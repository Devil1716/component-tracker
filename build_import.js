const fs = require('fs');

const IMPORT_DATA = JSON.parse(fs.readFileSync('teams_parsed.json', 'utf8'));

const clientScript = `
(async function() {
    if (localStorage.getItem('import_done_v2')) {
        return; // Already imported
    }

    const KEY = 'comp_tracker_v8';
    let rawData = localStorage.getItem(KEY);
    
    // Create a local backup
    if (rawData && !localStorage.getItem(KEY + '_backup_pre_import')) {
        localStorage.setItem(KEY + '_backup_pre_import', rawData);
    }

    // Attempt to push backup to the cloud if admin is logged in
    if (rawData && window.__fb_token) {
        try {
            const dbUrl = 'https://component-tracker-cd000-default-rtdb.asia-southeast1.firebasedatabase.app/componentTracker/production/state_backup_pre_import.json?auth=' + encodeURIComponent(window.__fb_token);
            await fetch(dbUrl, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: rawData
            });
            console.log("CLOUD BACKUP SUCCESSFUL!");
        } catch(e) {
            console.error("Cloud backup failed", e);
        }
    }

    let data;
    try {
        data = rawData ? JSON.parse(rawData) : null;
    } catch (e) {
        console.error("Error parsing local data", e);
    }
    
    if (!data) return;
    
    const IMPORT_DATA = ${JSON.stringify(IMPORT_DATA)};

    let importedCount = 0;
    let updatedCount = 0;

    for (const [teamName, teamInfo] of Object.entries(IMPORT_DATA)) {
        if (!data.order) data.order = [];
        if (!data.meta) data.meta = {};
        if (!data.teams) data.teams = {};

        const isNew = !data.order.includes(teamName);

        if (isNew) {
            data.order.push(teamName);
            data.teams[teamName] = [];
            data.meta[teamName] = {
                id: teamInfo.id,
                projectName: teamInfo.projectName,
                faculty: teamInfo.faculty,
                members: []
            };
            importedCount++;
        } else {
            updatedCount++;
        }

        const currentMembers = data.meta[teamName].members || [];
        while (currentMembers.length < 5) currentMembers.push({name:'', sen:'', email:'', branch:''});

        const importMembers = teamInfo.members || [];
        
        for (const im of importMembers) {
            if (!im || !im.name || !im.name.trim()) continue;
            
            const exists = currentMembers.some(cm => cm.name && cm.name.trim().toLowerCase() === im.name.trim().toLowerCase());
            
            if (!exists) {
                const emptySlot = currentMembers.find(cm => !cm.name || !cm.name.trim());
                if (emptySlot) {
                    emptySlot.name = im.name;
                    emptySlot.sen = im.sen || '';
                    emptySlot.email = im.email || '';
                    emptySlot.branch = im.branch || '';
                }
            }
        }
        data.meta[teamName].members = currentMembers;
    }

    localStorage.setItem(KEY, JSON.stringify(data));
    localStorage.setItem(KEY + '_needs_sync', 'true');
    localStorage.setItem('import_done_v2', 'true');
    
    console.log("Smart Import complete! New teams: " + importedCount + ", Updated teams: " + updatedCount);
    setTimeout(() => {
        window.location.reload();
    }, 500);

})();
`;

fs.writeFileSync('import_teams.js', clientScript);
