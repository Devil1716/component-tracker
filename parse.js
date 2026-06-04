const fs = require('fs');

const lines = fs.readFileSync('sheet.csv', 'utf8').split('\n');
const teams = {};
let currentTeam = null;

for (let i = 0; i < lines.length; i++) {
    const parts = lines[i].split(',');
    // Clean up carriage returns
    const row = parts.map(p => p.trim().replace(/^"|"$/g, ''));
    
    // Check if new team starts
    if (row[1] && !isNaN(parseInt(row[1]))) {
        currentTeam = 'Team ' + row[1];
        teams[currentTeam] = {
            id: 'IL' + String(row[1]).padStart(3, '0'),
            projectName: row[7] || '',
            faculty: row[6] || '',
            members: []
        };
    }
    
    // Add member if we are in a team and there's a name
    if (currentTeam && row[2]) {
        teams[currentTeam].members.push({
            name: row[2],
            sen: row[3] || '',
            email: row[4] || '',
            branch: row[5] || ''
        });
    }
    
    // Append to project title if it spans multiple lines (row[7] empty, but might be continuation)
    // Wait, looking at the CSV:
    // ,2,Swathi... ,,,Dr.Vijayashri,AI-Based Smart Crop Health Monitoring and Automated 
    // ,,Thanu K.L... ,,,,Irrigation system using IOT
    if (currentTeam && row[7]) {
        if (i > 0 && lines[i-1].split(',')[1] === row[1]) {
            // It's the first line of the team
        } else if (lines[i].startsWith(',,') && row[7]) {
             teams[currentTeam].projectName += ' ' + row[7];
        }
    }
}

// Write to json
fs.writeFileSync('teams_parsed.json', JSON.stringify(teams, null, 2));
console.log('Parsed ' + Object.keys(teams).length + ' teams.');
