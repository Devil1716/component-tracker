(() => {
    'use strict';

    // ── Catalog ────────────────────────────────────────────
    // (Same catalog as before, 105 items)
    const CATALOG = [
        {
            cat: "Development Boards", items: [
                { id: 1, name: "Arduino Uno R3 (Original)", stock: 50 },
                { id: 2, name: "ESP32 Dev Kit V1", stock: 50 },
                { id: 3, name: "Raspberry Pi Pico W", stock: 50 },
                { id: 4, name: "Raspberry Pi 4B (4GB) + SD/Case/HDMI/Adapter", stock: 25 },
                { id: 5, name: "Raspberry Pi 5 (4GB) + SD/Case/HDMI/Adapter", stock: 25 }
            ]
        },
        {
            cat: "Basic Sensors", items: [
                { id: 6, name: "DHT11 (Temperature & Humidity)", stock: 50 },
                { id: 7, name: "DHT22 (Temperature & Humidity)", stock: 50 },
                { id: 8, name: "BMP180 (Barometric Pressure)", stock: 50 },
                { id: 9, name: "HC-SR04 (Ultrasonic Distance)", stock: 50 },
                { id: 10, name: "Waveshare IR Obstacle Sensor", stock: 50 },
                { id: 11, name: "LDR Module", stock: 50 },
                { id: 12, name: "Touch Sensor (TTP223)", stock: 50 },
                { id: 13, name: "Reed Switch (Magnetic)", stock: 50 },
                { id: 14, name: "Tilt Sensor (SW-520D)", stock: 50 },
                { id: 15, name: "Rain Sensor Module", stock: 50 },
                { id: 16, name: "PIR Motion Sensor (HC-SR501)", stock: 50 },
                { id: 17, name: "Hall Effect Sensor", stock: 50 },
                { id: 18, name: "UV Sensor (GUVA-S12SD)", stock: 50 }
            ]
        },
        {
            cat: "Advanced Sensors", items: [
                { id: 19, name: "MPU6050 (Accelerometer & Gyroscope)", stock: 50 },
                { id: 20, name: "ADXL345", stock: 50 },
                { id: 21, name: "MQ135 Gas Sensor", stock: 50 },
                { id: 22, name: "MQ7 CO2 Gas Sensor", stock: 50 },
                { id: 23, name: "MQ5 LPG Gas Sensor", stock: 50 },
                { id: 24, name: "Soil Moisture Sensor", stock: 50 },
                { id: 25, name: "Water Level Sensor", stock: 50 },
                { id: 26, name: "pH Sensor", stock: 20 },
                { id: 27, name: "Turbidity Sensor", stock: 20 },
                { id: 28, name: "TDS Sensor", stock: 20 },
                { id: 29, name: "Current Sensor (INA219)", stock: 50 },
                { id: 30, name: "Voltage Sensor (0-25V)", stock: 50 },
                { id: 31, name: "Color Sensor (TCS3200)", stock: 50 },
                { id: 32, name: "Flame Sensor (Fire Detection)", stock: 50 },
                { id: 33, name: "Sound Sensor (KY-038)", stock: 50 },
                { id: 34, name: "Shock Sensor (Vibration Detection)", stock: 50 },
                { id: 35, name: "Laser Sensor Module", stock: 50 },
                { id: 36, name: "ESP32 Camera with TTL Converter", stock: 50 },
                { id: 37, name: "Neo 6M GPS Module", stock: 25 },
                { id: 38, name: "Raspberry Pi Camera 5MP", stock: 50 },
                { id: 39, name: "10K Potentiometer", stock: 25 },
                { id: 40, name: "TM4C123GXL - ARM TIVA Launchpad", stock: 30 },
                { id: 41, name: "Keypad 4x3", stock: 25 }
            ]
        },
        {
            cat: "Medical & Health Sensors", items: [
                { id: 42, name: "Heart Rate & Pulse Oximeter (MAX30102)", stock: 25 },
                { id: 43, name: "ECG Module (AD8232)", stock: 25 },
                { id: 44, name: "Body Temperature (MLX90614 IR)", stock: 25 },
                { id: 45, name: "Pulse Sensor", stock: 25 },
                { id: 46, name: "EMG Sensor (Myoware)", stock: 20 },
                { id: 47, name: "GSR Sensor (Stress Monitoring)", stock: 20 }
            ]
        },
        {
            cat: "Industrial & Automation Sensors", items: [
                { id: 48, name: "Vibration Sensor", stock: 50 },
                { id: 49, name: "Thermocouple Sensor (K-Type, MAX6675)", stock: 50 },
                { id: 50, name: "Radar Sensor (RCWL-0516)", stock: 50 },
                { id: 51, name: "Fingerprint Sensor Module (R307)", stock: 20 },
                { id: 52, name: "RFID Module (RC522 + Card + Key Tag)", stock: 50 },
                { id: 53, name: "NFC Module (PN532)", stock: 50 },
                { id: 54, name: "LoRa RFM95 (Long-Range IoT)", stock: 20 }
            ]
        },
        {
            cat: "Actuators & Modules", items: [
                { id: 55, name: "Servo Motor (SG90)", stock: 50 },
                { id: 56, name: "Servo Motor (MG996R)", stock: 50 },
                { id: 57, name: "Stepper Motor (28BYJ-48 + ULN2003)", stock: 50 },
                { id: 58, name: "Relay Module (5V, 1 channel)", stock: 50 },
                { id: 59, name: "Relay Module (5V, 2 channel)", stock: 50 },
                { id: 60, name: "Relay Module (5V, 4 channel)", stock: 50 },
                { id: 61, name: "Buzzer Module (Active)", stock: 50 },
                { id: 62, name: "Buzzer Module (Passive)", stock: 50 },
                { id: 63, name: "DC Motor (5V)", stock: 50 },
                { id: 64, name: "DC Motor (12V)", stock: 50 },
                { id: 65, name: "L298N Motor Driver", stock: 50 },
                { id: 66, name: "L293D Motor Driver", stock: 50 }
            ]
        },
        {
            cat: "Displays & Communication", items: [
                { id: 67, name: '0.96" OLED Display (I2C, SSD1306)', stock: 25 },
                { id: 68, name: "16x2 LCD with I2C Module", stock: 25 },
                { id: 69, name: '1.8" TFT Display (ST7735)', stock: 25 },
                { id: 70, name: "ESP8266 Wi-Fi Module (NodeMCU)", stock: 25 },
                { id: 71, name: "GSM Module (A7670C)", stock: 25 },
                { id: 72, name: "Bluetooth Module (HC-05)", stock: 25 }
            ]
        },
        {
            cat: "Power Supplies & Accessories", items: [
                { id: 73, name: "DC Jack Connector", stock: 200 },
                { id: 74, name: "5V 2A Power Adapter", stock: 100 },
                { id: 75, name: "12V 2A Power Adapter", stock: 100 },
                { id: 76, name: "TP5100 Charging Module", stock: 100 },
                { id: 77, name: "USB Cable (Micro USB)", stock: 100 },
                { id: 78, name: "USB Cable (Type C)", stock: 100 },
                { id: 79, name: "USB Cable (Type A to B)", stock: 100 },
                { id: 80, name: "Jumper Wires (M-M) 30CM", stock: 200 },
                { id: 81, name: "Jumper Wires (M-F) 30CM", stock: 200 },
                { id: 82, name: "Jumper Wires (F-F) 30CM", stock: 200 },
                { id: 83, name: "Single Strand Wire (Red)", stock: 5 },
                { id: 84, name: "Single Strand Wire (Black)", stock: 5 },
                { id: 85, name: "Single Strand Wire (Green)", stock: 5 }
            ]
        },
        {
            cat: "Electronics & Soldering Tools", items: [
                { id: 86, name: "Soldering Station (60W) Complete Set", stock: 10 },
                { id: 87, name: "Anti-Static ESD Silicone Soldering Mat", stock: 16 },
                { id: 88, name: "Hot Air Rework Station", stock: 10 },
                { id: 89, name: "Digital Multimeter (MAS830L)", stock: 10 },
                { id: 90, name: "Variable Power Supply (WANPTEK, 0-30V, 0-10A)", stock: 16 },
                { id: 91, name: "Breadboard (400 points)", stock: 200 },
                { id: 92, name: "Breadboard Power Supply Module", stock: 100 },
                { id: 93, name: "Universal PCB Prototype Board (9x15CM)", stock: 200 },
                { id: 94, name: "Resistor Set (500 Pcs, 1.2\u03A9-1M\u03A9)", stock: 25 },
                { id: 95, name: "Capacitor Set (500 Pcs, 0.1uF-1000uF)", stock: 25 },
                { id: 96, name: "Diodes Set (100 Pcs)", stock: 25 },
                { id: 97, name: "Transistors Set (480 Pcs)", stock: 25 },
                { id: 98, name: "Heat Shrink Tubing (530 Pcs)", stock: 25 }
            ]
        },
        {
            cat: "Tools", items: [
                { id: 99, name: "Wire Stripper", stock: 25 },
                { id: 100, name: "Cutter", stock: 25 },
                { id: 101, name: "Nose Plier", stock: 25 },
                { id: 102, name: "Screw Driver Set", stock: 25 },
                { id: 103, name: "Knife", stock: 25 }
            ]
        },
        {
            cat: "Machines", items: [
                { id: 104, name: "CNC 3018 PLUS 500W Spindle Engraving Machine", stock: 1 },
                { id: 105, name: "X1 Carbon 3D Printer", stock: 2 }
            ]
        }
    ];

    const BRANCHES = ['CSE', 'AIML', 'ROBOTICS', 'ECE', 'BIOTECH'];
    const MEMBER_COUNT = 5;
    const RUNTIME_CONFIG = window.COMPONENT_TRACKER_CONFIG || {};
    const AUTH_SESSION_KEY = 'component_tracker_admin_authenticated';
    const DEFAULT_ADMIN_USERNAME = 'Admin';
    const DEFAULT_ADMIN_PASSWORD_HASH = 'f4be6304187fe50f86c8ab2bd456c59425f2844f1990d6f47ddee184c4ec9f60';
    const ADMIN_USERNAME = RUNTIME_CONFIG.auth?.username || DEFAULT_ADMIN_USERNAME;
    const ADMIN_PASSWORD_HASH = RUNTIME_CONFIG.auth?.passwordHash || DEFAULT_ADMIN_PASSWORD_HASH;
    const APP_ENV = new URLSearchParams(location.search).get('env') === 'test' ? 'testing' : (RUNTIME_CONFIG.environment || 'production');
    const DATABASE_PATHS = RUNTIME_CONFIG.databasePaths || {
        production: 'componentTracker/production/state',
        testing: 'componentTracker/testing/state'
    };
    const FIREBASE_STATE_PATH = DATABASE_PATHS[APP_ENV] || DATABASE_PATHS.production;

    const ITEM_MAP = {};
    CATALOG.forEach(c => c.items.forEach(it => { ITEM_MAP[it.id] = it; }));

    // ── Storage helpers ────────────────────────────────────
    const KEY = 'comp_tracker_v8';
    const MIGRATION_KEY = `${KEY}_firebase_migrated_${APP_ENV}_v1`;
    function emptyData() { return { teams: {}, order: [], meta: {}, history: [], dateCounter: 0, schemaVersion: 2, updatedAt: '' }; }
    function blankMember() { return { name: '', sen: '', branch: '' }; }
    function normalizeMembers(members) {
        const out = Array.isArray(members) ? members.slice(0, MEMBER_COUNT) : [];
        while (out.length < MEMBER_COUNT) out.push(blankMember());
        return out.map(m => ({
            name: String(m?.name || ''),
            sen: String(m?.sen || ''),
            branch: BRANCHES.includes(m?.branch) ? m.branch : ''
        }));
    }
    function normalizeData(raw) {
        const d = raw && typeof raw === 'object' ? raw : emptyData();
        d.teams = d.teams && typeof d.teams === 'object' ? d.teams : {};
        d.order = Array.isArray(d.order) ? d.order.filter(name => typeof name === 'string') : [];
        d.meta = d.meta && typeof d.meta === 'object' ? d.meta : {};
        d.history = Array.isArray(d.history) ? d.history : [];
        d.dateCounter = Number.isFinite(d.dateCounter) ? d.dateCounter : 0;
        d.schemaVersion = 2;
        d.order.forEach(name => {
            if (!Array.isArray(d.teams[name])) d.teams[name] = [];
            if (!d.meta[name]) {
                d.dateCounter++;
                d.meta[name] = { id: generateId(d.dateCounter) };
            }
            d.meta[name].members = normalizeMembers(d.meta[name].members);
        });
        return d;
    }
    function load() {
        try {
            return normalizeData(JSON.parse(localStorage.getItem(KEY)) || emptyData());
        }
        catch { return emptyData(); }
    }
    function save(d, options = {}) {
        d.updatedAt = new Date().toISOString();
        localStorage.setItem(KEY, JSON.stringify(d));
        if (!options.remote && firebaseReady) queueRemoteSave();
    }

    function generateId(num) {
        return 'IL' + String(num).padStart(3, '0');
    }

    let data = load();
    let activeTeam = null;
    let firebaseReady = false;
    let firebaseRef = null;
    let firebaseSet = null;
    let firebaseSaveTimer = null;

    // ── Date Format ────────────────────────────────────────
    function toDateKey(d) {
        const y = d.getFullYear();
        const m = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${y}-${m}-${day}`;
    }

    function formatDate(key) {
        // '2026-02-19' -> "Thursday, February 19, 2026"
        if (!key) return 'Unknown Date';
        const parts = key.split('-');
        // Construct date in local timezone to avoid off-by-one errors
        const d = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
        return d.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    function todayKey() { return toDateKey(new Date()); }

    function hasLocalContent(d) {
        return Boolean(d.order.length || d.history.length);
    }

    function mergeRecords(a = [], b = [], keyFn) {
        const map = new Map();
        [...a, ...b].forEach(item => {
            const key = keyFn(item);
            if (!map.has(key)) map.set(key, item);
        });
        return [...map.values()];
    }

    function mergeMemberSlots(remoteMembers, localMembers) {
        const remote = normalizeMembers(remoteMembers);
        const local = normalizeMembers(localMembers);
        return remote.map((member, index) => {
            const localMember = local[index];
            return {
                name: localMember.name || member.name,
                sen: localMember.sen || member.sen,
                branch: localMember.branch || member.branch
            };
        });
    }

    function mergeData(remoteRaw, localRaw) {
        const remote = normalizeData(remoteRaw || emptyData());
        const local = normalizeData(localRaw || emptyData());
        const merged = normalizeData(remote);
        local.order.forEach(name => {
            if (!merged.order.includes(name)) merged.order.push(name);
            merged.teams[name] = mergeRecords(
                merged.teams[name] || [],
                local.teams[name] || [],
                item => item.uid || `${item.itemId}-${item.date}-${item.time}`
            );
            merged.meta[name] = {
                ...(merged.meta[name] || {}),
                ...(local.meta[name] || {}),
                id: (merged.meta[name]?.id || local.meta[name]?.id || ''),
                members: mergeMemberSlots(merged.meta[name]?.members, local.meta[name]?.members)
            };
        });
        merged.history = mergeRecords(
            merged.history,
            local.history,
            item => `${item.type}-${item.uid || ''}-${item.team}-${item.itemId}-${item.time}`
        ).sort((a, b) => String(a.time || '').localeCompare(String(b.time || '')));
        merged.dateCounter = Math.max(remote.dateCounter || 0, local.dateCounter || 0);
        return normalizeData(merged);
    }

    function queueRemoteSave() {
        if (!firebaseReady || !firebaseSet || !firebaseRef) return;
        clearTimeout(firebaseSaveTimer);
        firebaseSaveTimer = setTimeout(() => {
            firebaseSet(firebaseRef, data).catch(err => {
                setSyncStatus('Cloud sync failed. Local copy saved.', 'danger');
                console.error('Firebase save failed', err);
            });
        }, 350);
    }

    function renderAll() {
        if (activeTeam && !data.teams[activeTeam]) {
            activeTeam = null;
            teamView.classList.add('hidden');
            emptyState.classList.remove('hidden');
        }
        renderTeams();
        if (activeTeam) selectTeam(activeTeam, { keepInputs: true });
        populateDataList();
    }

    async function connectFirebase() {
        if (!RUNTIME_CONFIG.firebase) {
            setSyncStatus('Missing Firebase config. Local copy saved.', 'danger');
            return;
        }
        if (location.protocol === 'file:') {
            setSyncStatus('Offline file mode. Open the hosted link for cloud sync.', 'danger');
            return;
        }

        try {
            const appModule = await import('https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js');
            const dbModule = await import('https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js');
            const app = appModule.initializeApp(RUNTIME_CONFIG.firebase);
            const db = dbModule.getDatabase(app);
            firebaseRef = dbModule.ref(db, FIREBASE_STATE_PATH);
            firebaseSet = dbModule.set;
            setSyncStatus(`Cloud sync connected (${APP_ENV})`, 'success');

            const snapshot = await dbModule.get(firebaseRef);
            const remoteData = snapshot.exists() ? snapshot.val() : null;
            const localData = load();
            const alreadyMigrated = localStorage.getItem(MIGRATION_KEY) === 'true';

            if (!remoteData && hasLocalContent(localData)) {
                data = normalizeData(localData);
                await firebaseSet(firebaseRef, data);
                localStorage.setItem(MIGRATION_KEY, 'true');
            } else if (remoteData && hasLocalContent(localData) && !alreadyMigrated) {
                data = mergeData(remoteData, localData);
                await firebaseSet(firebaseRef, data);
                localStorage.setItem(MIGRATION_KEY, 'true');
            } else if (remoteData) {
                data = normalizeData(remoteData);
                save(data, { remote: true });
            }

            firebaseReady = true;
            setSyncStatus(`Cloud sync connected (${APP_ENV})`, 'success');
            renderAll();

            dbModule.onValue(firebaseRef, snap => {
                if (!snap.exists()) return;
                const next = normalizeData(snap.val());
                if (JSON.stringify(next) === JSON.stringify(data)) return;
                data = next;
                save(data, { remote: true });
                setSyncStatus(`Cloud sync connected (${APP_ENV})`, 'success');
                renderAll();
            }, err => {
                setSyncStatus('Cloud sync unavailable. Local copy saved.', 'danger');
                console.error('Firebase listener failed', err);
            });
        } catch (err) {
            setSyncStatus('Cloud sync unavailable. Local copy saved.', 'danger');
            console.error('Firebase connection failed', err);
        }
    }

    // ── DOM refs ───────────────────────────────────────────
    const $ = s => document.querySelector(s);
    const loginView = $('#loginView'), loginForm = $('#loginForm');
    const loginUsername = $('#loginUsername'), loginPassword = $('#loginPassword'), loginError = $('#loginError');
    const teamNameInput = $('#teamNameInput'), addTeamBtn = $('#addTeamBtn'), teamListEl = $('#teamList');
    const emptyState = $('#emptyState'), teamView = $('#teamView'), teamTitle = $('#teamTitle');
    const deleteTeamBtn = $('#deleteTeamBtn'), componentSelect = $('#componentSelect'); // INPUT
    const teamRenameInput = $('#teamRenameInput'), renameTeamBtn = $('#renameTeamBtn');
    const membersGrid = $('#membersGrid'), syncStatus = $('#syncStatus');
    const detailsEditor = $('#detailsEditor'), detailsSummary = $('#detailsSummary'), editDetailsBtn = $('#editDetailsBtn');
    const componentList = $('#componentList'); // DATALIST
    const quantityInput = $('#quantityInput'), logComponentBtn = $('#logComponentBtn');
    const inventoryBody = $('#inventoryBody'), noItemsMsg = $('#noItemsMsg');
    const exportBtn = $('#exportBtn'), summaryBtn = $('#summaryBtn'), summaryModal = $('#summaryModal');
    const summaryContent = $('#summaryContent'), closeSummary = $('#closeSummary');
    const stockBtn = $('#stockBtn'), stockModal = $('#stockModal'), stockContent = $('#stockContent');
    const closeStock = $('#closeStock'), stockSearch = $('#stockSearch'), stockHint = $('#stockHint');
    const dailyBtn = $('#dailyBtn'), dailyModal = $('#dailyModal'), dailyContent = $('#dailyContent');
    const closeDaily = $('#closeDaily'), prevDay = $('#prevDay'), nextDay = $('#nextDay');
    const currentDateEl = $('#currentDate');

    const sidebar = $('#sidebar'), sidebarToggle = $('#sidebarToggle');

    // ── Toast ──────────────────────────────────────────────
    let tc;
    function initToast() {
        tc = document.createElement('div');
        tc.className = 'toast-container';
        document.body.appendChild(tc);
    }
    function toast(m, t = 'success') {
        const e = document.createElement('div');
        e.className = `toast ${t}`;
        e.textContent = m;
        tc.appendChild(e);
        setTimeout(() => { e.style.opacity = '0'; setTimeout(() => e.remove(), 300); }, 2400);
    }

    function setSyncStatus(message, type = 'info') {
        if (!syncStatus) return;
        syncStatus.textContent = message;
        syncStatus.className = `sync-status ${type}`;
    }

    async function sha256(text) {
        const bytes = new TextEncoder().encode(text);
        const hashBuffer = await crypto.subtle.digest('SHA-256', bytes);
        return [...new Uint8Array(hashBuffer)].map(b => b.toString(16).padStart(2, '0')).join('');
    }

    function unlockApp() {
        document.body.classList.remove('auth-locked');
        loginView.classList.add('hidden');
        setSyncStatus(`Connecting ${APP_ENV} cloud sync...`, 'info');
        renderTeams();
        populateDataList();
        connectFirebase();
    }

    async function handleLogin(e) {
        e.preventDefault();
        loginError.textContent = '';
        const username = loginUsername.value.trim();
        const passwordHash = await sha256(loginPassword.value);
        if (username === ADMIN_USERNAME && passwordHash === ADMIN_PASSWORD_HASH) {
            sessionStorage.setItem(AUTH_SESSION_KEY, 'true');
            loginPassword.value = '';
            unlockApp();
        } else {
            loginError.textContent = 'Invalid username or password.';
            loginPassword.value = '';
            loginPassword.focus();
        }
    }

    function initAuth() {
        loginForm.addEventListener('submit', handleLogin);
        if (sessionStorage.getItem(AUTH_SESSION_KEY) === 'true') {
            unlockApp();
        } else {
            document.body.classList.add('auth-locked');
            loginView.classList.remove('hidden');
            loginUsername.focus();
        }
    }

    // ── Populate DataList ──────────────────────────────────
    function populateDataList() {
        componentList.innerHTML = '';
        CATALOG.forEach(cat => {
            cat.items.forEach(it => {
                const r = getRemaining(it.id);
                const o = document.createElement('option');
                o.value = `[${it.id}] ${it.name}`;
                o.label = `${cat.cat} (${r} left)`;
                componentList.appendChild(o);
            });
        });
    }

    function getSelectedId() {
        const val = componentSelect.value.trim();
        if (!val) return null;
        const m = val.match(/^\[(\d+)\]/);
        if (m) return parseInt(m[1]);
        const num = parseInt(val);
        if (!isNaN(num) && ITEM_MAP[num]) return num;
        return null;
    }

    // ── Stock math ─────────────────────────────────────────
    function getTotalUsed(itemId) {
        let used = 0;
        data.order.forEach(t => {
            (data.teams[t] || []).forEach(c => { if (c.itemId === itemId) used += c.qty; });
        });
        return used;
    }
    function getRemaining(itemId) {
        const it = ITEM_MAP[itemId];
        if (!it) return 0;
        return it.stock - getTotalUsed(itemId);
    }
    function updateStockHint() {
        const id = getSelectedId();
        if (!id || !ITEM_MAP[id]) { stockHint.innerHTML = ''; return; }
        const r = getRemaining(id), total = ITEM_MAP[id].stock;
        let cls = 'ok';
        if (r <= 0) cls = 'out';
        else if (r <= total * 0.2) cls = 'low';
        stockHint.innerHTML = `Stock: <span class="${cls}">${r}</span> / ${total} remaining`;
    }

    // ── Render sidebar ─────────────────────────────────────
    function renderMembers() {
        if (!activeTeam) return;
        const meta = data.meta[activeTeam] || {};
        const members = normalizeMembers(meta.members);
        membersGrid.innerHTML = members.map((member, index) => {
            const branchOptions = [''].concat(BRANCHES).map(branch => {
                const label = branch || 'Select branch';
                return `<option value="${esc(branch)}"${member.branch === branch ? ' selected' : ''}>${label}</option>`;
            }).join('');
            return `<div class="member-card" data-index="${index}">
                <div class="member-label">Member ${index + 1}</div>
                <input type="text" data-field="name" value="${esc(member.name)}" placeholder="Name">
                <input type="text" data-field="sen" value="${esc(member.sen)}" placeholder="SEN">
                <select data-field="branch">${branchOptions}</select>
            </div>`;
        }).join('');
        renderDetailsState();
    }

    function memberDetailsComplete(members) {
        return normalizeMembers(members).every(member => member.name && member.sen && member.branch);
    }

    function renderDetailsState(forceOpen = false) {
        if (!activeTeam) return;
        const meta = data.meta[activeTeam] || {};
        const members = normalizeMembers(meta.members);
        const complete = memberDetailsComplete(members);
        const collapsed = complete && meta.detailsCollapsed !== false && !forceOpen;
        detailsEditor.classList.toggle('hidden', collapsed);
        detailsSummary.classList.toggle('hidden', !collapsed);
        editDetailsBtn.classList.toggle('hidden', !collapsed);
        if (collapsed) {
            const filled = members.filter(member => member.name && member.sen && member.branch).length;
            detailsSummary.innerHTML = `<strong>${filled}/${MEMBER_COUNT} members saved</strong><span>${esc(activeTeam)}</span>`;
        }
    }

    function openDetailsEditor() {
        if (!activeTeam) return;
        data.meta[activeTeam] = data.meta[activeTeam] || {};
        data.meta[activeTeam].detailsCollapsed = false;
        save(data);
        renderDetailsState(true);
    }

    function updateMember(target) {
        if (!activeTeam) return;
        const card = target.closest('.member-card');
        if (!card) return;
        const index = Number(card.dataset.index);
        const field = target.dataset.field;
        if (!Number.isInteger(index) || !field) return;
        const meta = data.meta[activeTeam] || { members: normalizeMembers() };
        meta.members = normalizeMembers(meta.members);
        meta.members[index][field] = target.value.trim();
        meta.detailsCollapsed = memberDetailsComplete(meta.members);
        data.meta[activeTeam] = meta;
        save(data);
        setSyncStatus(firebaseReady ? 'Saving to cloud...' : 'Saved locally. Sync pending.', 'info');
        renderDetailsState();
    }

    function renameTeam() {
        if (!activeTeam) return;
        const oldName = activeTeam;
        const newName = teamRenameInput.value.trim();
        if (!newName) return toast('Enter a team name', 'danger');
        if (newName === oldName) return toast('Team name unchanged', 'info');
        if (data.teams[newName]) return toast('Team already exists', 'danger');

        data.teams[newName] = data.teams[oldName] || [];
        data.meta[newName] = data.meta[oldName] || { id: '???', members: normalizeMembers() };
        delete data.teams[oldName];
        delete data.meta[oldName];
        data.order = data.order.map(name => name === oldName ? newName : name);
        data.history.forEach(item => {
            if (item.team === oldName) item.team = newName;
        });
        activeTeam = newName;
        save(data);
        selectTeam(newName);
        toast(`Renamed team to "${newName}"`);
    }

    function renderTeams() {
        teamListEl.innerHTML = '';
        data.order.forEach(name => {
            const d = document.createElement('div');
            d.className = 'team-item' + (name === activeTeam ? ' active' : '');
            const items = data.teams[name] || [];
            const totalQty = items.reduce((s, c) => s + c.qty, 0);
            const meta = data.meta[name] || { id: '???' };

            // Using standard team item logic (SVG removed from JS, handled by CSS/HTML structure)
            // Team ID + Name + Badge
            d.innerHTML = `<span class="team-id">${meta.id}</span>
      <span style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(name)}</span>`
                + (totalQty ? `<span class="badge">${totalQty}</span>` : '');
            d.addEventListener('click', () => selectTeam(name));
            teamListEl.appendChild(d);
        });
    }

    function selectTeam(name, options = {}) {
        activeTeam = name;
        emptyState.classList.add('hidden');
        teamView.classList.remove('hidden');

        // Clean refresh animation
        teamView.style.animation = 'none';
        void teamView.offsetWidth;
        teamView.style.animation = '';

        const meta = data.meta[name] || { id: '???' };
        teamTitle.innerHTML = `<span style="font-size:0.5em;opacity:0.6;margin-right:12px;vertical-align:middle;border:1px solid #ccc;padding:2px 6px;border-radius:4px">${meta.id}</span>${esc(name)}`;
        teamRenameInput.value = name;

        renderTeams();
        renderMembers();
        renderInventory();
        populateDataList();
        if (!options.keepInputs) {
            quantityInput.value = 1;
            componentSelect.value = '';
            stockHint.innerHTML = '';
        }
    }

    // ── Add / delete team ──────────────────────────────────
    function addTeam() {
        const name = teamNameInput.value.trim();
        if (!name) return toast('Enter a team name', 'danger');
        if (data.teams[name]) return toast('Team already exists', 'danger');

        data.teams[name] = [];
        data.order.push(name);
        data.dateCounter++;
        data.meta[name] = { id: generateId(data.dateCounter), members: normalizeMembers() };

        save(data);
        teamNameInput.value = '';
        renderTeams();
        selectTeam(name);
        toast(`Team "${name}" added`);
    }

    function deleteTeam() {
        if (!activeTeam) return;
        if (!confirm(`Delete team "${activeTeam}"?`)) return;

        delete data.teams[activeTeam];
        delete data.meta[activeTeam];
        data.order = data.order.filter(n => n !== activeTeam);

        save(data);
        const old = activeTeam;
        activeTeam = null;
        teamView.classList.add('hidden');
        emptyState.classList.remove('hidden');
        renderTeams();
        toast(`Team "${old}" deleted`, 'danger');
    }

    // ── Log component ──────────────────────────────────────
    function logComponent() {
        if (!activeTeam) return;
        const itemId = getSelectedId();
        if (!itemId) return toast('Select a valid component', 'danger');

        const qty = parseInt(quantityInput.value, 10);
        if (!qty || qty < 1) return toast('Qty must be at least 1', 'danger');
        const remaining = getRemaining(itemId);
        if (qty > remaining) return toast(`Only ${remaining} left`, 'danger');

        const now = new Date();
        const dateKey = toDateKey(now);
        const uid = Date.now().toString(36) + Math.random().toString(36).slice(2, 5);

        const existing = (data.teams[activeTeam] || []).find(
            c => c.itemId === itemId && c.date === dateKey
        );
        if (existing) {
            existing.qty += qty;
            existing.time = now.toISOString();
        } else {
            data.teams[activeTeam].push({
                uid, itemId, qty, date: dateKey, time: now.toISOString()
            });
        }

        data.history.push({
            type: 'take', uid, itemId, qty, date: dateKey, time: now.toISOString(), team: activeTeam
        });

        save(data);
        renderInventory();
        populateDataList();
        quantityInput.value = 1;
        componentSelect.value = '';
        stockHint.innerHTML = '';
        toast(`${qty}\u00D7 ${ITEM_MAP[itemId].name} logged`);
    }

    function returnItem(uid, currentQty) {
        if (!activeTeam) return;
        let qtyToReturn = prompt(`Return how many? (Max: ${currentQty})`, currentQty);
        if (qtyToReturn === null) return;
        qtyToReturn = parseInt(qtyToReturn);
        if (isNaN(qtyToReturn) || qtyToReturn <= 0 || qtyToReturn > currentQty) {
            return toast('Invalid quantity', 'danger');
        }

        const teamItems = data.teams[activeTeam] || [];
        const itemIndex = teamItems.findIndex(c => c.uid === uid);
        if (itemIndex === -1) return;
        const item = teamItems[itemIndex];

        if (qtyToReturn >= item.qty) {
            data.teams[activeTeam].splice(itemIndex, 1);
        } else {
            item.qty -= qtyToReturn;
        }

        const now = new Date();
        data.history.push({
            type: 'return',
            uid: Date.now().toString(36),
            itemId: item.itemId,
            qty: qtyToReturn,
            date: toDateKey(now),
            time: now.toISOString(),
            team: activeTeam
        });

        save(data);
        renderInventory();
        populateDataList();
        toast(`Returned ${qtyToReturn} item(s)`);
    }

    // ── Render inventory ──────────────────────────────────
    function renderInventory() {
        if (!activeTeam) return;
        const items = data.teams[activeTeam] || [];
        inventoryBody.innerHTML = '';
        noItemsMsg.classList.toggle('hidden', items.length > 0);

        const byDate = {};
        items.forEach(item => {
            const dk = item.date || 'Unknown';
            if (!byDate[dk]) byDate[dk] = [];
            byDate[dk].push(item);
        });

        const dates = Object.keys(byDate).sort((a, b) => b.localeCompare(a));
        let idx = 0;

        dates.forEach(dk => {
            const dateRow = document.createElement('tr');
            // Date row without emoji
            dateRow.innerHTML = `<td colspan="5" style="padding:14px 14px 6px;border:none;">
      <span class="date-stamp">${formatDate(dk)}</span>
    </td>`;
            inventoryBody.appendChild(dateRow);

            byDate[dk].forEach(item => {
                idx++;
                const it = ITEM_MAP[item.itemId];
                const name = it ? it.name : 'Unknown';
                const tr = document.createElement('tr');
                const t = new Date(item.time);
                const ts = t.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

                tr.innerHTML = `
        <td>${idx}</td>
        <td>${esc(name)}</td>
        <td><div class="qty-cell"><span class="qty-val">${item.qty}</span></div></td>
        <td style="color:var(--text-dim)">${ts}</td>
        <td><button class="return-btn" data-uid="${item.uid}" data-qty="${item.qty}">Return</button></td>`;
                inventoryBody.appendChild(tr);
            });
        });
    }

    inventoryBody.addEventListener('click', e => {
        const rb = e.target.closest('.return-btn');
        if (rb) return returnItem(rb.dataset.uid, parseInt(rb.dataset.qty));
    });

    componentSelect.addEventListener('input', updateStockHint);

    // ── Export CSV ─────────────────────────────────────────
    function exportCSV() {
        if (!data.history.length) return toast('No history', 'info');
        let csv = 'Type,Team ID,Team Name,Component,Qty,Date,Time\n';
        const sorted = [...data.history].sort((a, b) => b.time.localeCompare(a.time));
        const csvCell = value => `"${String(value ?? '').replace(/"/g, '""')}"`;
        sorted.forEach(h => {
            const meta = data.meta[h.team] || { id: '' };
            const it = ITEM_MAP[h.itemId];
            const d = new Date(h.time);
            const type = h.type === 'return' ? 'RETURNED' : 'TAKEN';
            csv += [
                csvCell(type),
                csvCell(meta.id),
                csvCell(h.team),
                csvCell(it ? it.name : '?'),
                h.qty,
                csvCell(h.date),
                csvCell(d.toLocaleTimeString())
            ].join(',') + '\n';
        });
        const b = new Blob([csv], { type: 'text/csv' });
        const u = URL.createObjectURL(b);
        const a = document.createElement('a');
        a.href = u;
        a.download = 'component_log_full.csv';
        a.click();
        URL.revokeObjectURL(u);
        toast('Full History CSV exported');
    }

    // ── Modals ─────────────────────────────────────────────
    function showSummary() {
        if (!data.order.length) return toast('No teams', 'info');
        let total = 0, html = '';
        data.order.forEach(team => {
            const meta = data.meta[team] || { id: '' };
            const items = data.teams[team] || [];
            if (!items.length) {
                html += `<div class="summary-team"><h4>[${meta.id}] ${esc(team)}</h4>
        <p style="color:var(--text-dim);font-size:.85rem">No components.</p></div>`;
                return;
            }
            const agg = {};
            items.forEach(c => {
                if (!agg[c.itemId]) agg[c.itemId] = 0;
                agg[c.itemId] += c.qty;
            });
            let tq = 0, rows = '';
            Object.entries(agg).forEach(([id, qty]) => {
                const it = ITEM_MAP[id];
                tq += qty;
                rows += `<tr><td>${esc(it ? it.name : '?')}</td><td style="font-weight:600">${qty}</td></tr>`;
            });
            total += tq;
            html += `<div class="summary-team"><h4>[${meta.id}] ${esc(team)} — <span style="color:var(--accent3)">${tq} items</span></h4>
      <table><thead><tr><th>Component</th><th>Qty</th></tr></thead><tbody>${rows}</tbody></table></div>`;
        });
        html += `<div class="summary-total">Total In Circulation: <span>${total}</span></div>`;
        summaryContent.innerHTML = html;
        summaryModal.classList.remove('hidden');
    }

    function showStock(filter = '') {
        let html = '';
        const f = filter.toLowerCase();
        CATALOG.forEach(cat => {
            const filtered = cat.items.filter(it => !f || it.name.toLowerCase().includes(f));
            if (!filtered.length) return;
            html += `<div class="stock-category"><h4>${esc(cat.cat)}</h4>`;
            filtered.forEach(it => {
                const r = getRemaining(it.id);
                let cls = 'ok';
                if (r <= 0) cls = 'out';
                else if (r <= it.stock * 0.2) cls = 'low';
                html += `<div class="stock-row"><span class="sname">${esc(it.name)}</span><span class="stotal">${it.stock}</span><span class="sremain ${cls}">${r}</span></div>`;
            });
            html += `</div>`;
        });
        if (!html) html = '<p style="color:var(--text-dim);text-align:center;padding:20px">No matches.</p>';
        stockContent.innerHTML = html;
    }

    // ── Daily Log ──────────────────────────────────────────
    let dailyDate = todayKey();

    function showDaily() {
        currentDateEl.textContent = formatDate(dailyDate);
        let html = '';
        const events = data.history.filter(h => h.date === dailyDate);
        const teamsToday = [...new Set(events.map(e => e.team))];

        if (!teamsToday.length) {
            html = '<p class="daily-none" style="text-align:center;color:#64748b;padding:24px">No activity recorded for this date.</p>';
        } else {
            teamsToday.forEach(team => {
                const meta = data.meta[team] || { id: '' };
                const teamEvents = events.filter(e => e.team === team).sort((a, b) => a.time.localeCompare(b.time));
                let rows = '';
                teamEvents.forEach(e => {
                    const it = ITEM_MAP[e.itemId];
                    const t = new Date(e.time);
                    const ts = t.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
                    const isReturn = e.type === 'return';
                    rows += `<tr class="history-row ${isReturn ? 'returned' : ''}">
          <td>${esc(it ? it.name : '?')}</td>
          <td style="font-weight:600">${e.qty}</td>
          <td style="color:var(--text-dim)">${ts}</td>
          <td>${isReturn ? '<span class="badge-returned">RETURNED</span>' : '<span style="color:var(--amity-blue);font-size:.7rem;font-weight:700">TAKEN</span>'}</td>
        </tr>`;
                });
                html += `<div class="summary-team"><h4>[${meta.id}] ${esc(team)}</h4>
        <table><thead><tr><th>Component</th><th>Qty</th><th>Time</th><th>Status</th></tr></thead><tbody>${rows}</tbody></table></div>`;
            });
        }
        dailyContent.innerHTML = html;
    }

    function shiftDay(delta) {
        const d = new Date(dailyDate + 'T00:00:00');
        d.setDate(d.getDate() + delta);
        dailyDate = toDateKey(d);
        showDaily();
    }

    // ── Sidebar Toggle ─────────────────────────────────────
    if (localStorage.getItem('sidebarCollapsed') === 'true') {
        sidebar.classList.add('collapsed');
    }
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
            localStorage.setItem('sidebarCollapsed', sidebar.classList.contains('collapsed'));
        });
    }

    function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }

    // ── Event Bindings ─────────────────────────────────────
    addTeamBtn.addEventListener('click', addTeam);
    teamNameInput.addEventListener('keydown', e => { if (e.key === 'Enter') addTeam(); });
    renameTeamBtn.addEventListener('click', renameTeam);
    editDetailsBtn.addEventListener('click', openDetailsEditor);
    teamRenameInput.addEventListener('keydown', e => { if (e.key === 'Enter') renameTeam(); });
    membersGrid.addEventListener('change', e => updateMember(e.target));
    membersGrid.addEventListener('blur', e => updateMember(e.target), true);
    deleteTeamBtn.addEventListener('click', deleteTeam);
    logComponentBtn.addEventListener('click', logComponent);
    quantityInput.addEventListener('keydown', e => { if (e.key === 'Enter') logComponent(); });
    exportBtn.addEventListener('click', exportCSV);
    summaryBtn.addEventListener('click', showSummary);
    closeSummary.addEventListener('click', () => summaryModal.classList.add('hidden'));
    summaryModal.addEventListener('click', e => { if (e.target === summaryModal) summaryModal.classList.add('hidden'); });
    stockBtn.addEventListener('click', () => { stockSearch.value = ''; showStock(); stockModal.classList.remove('hidden'); });
    closeStock.addEventListener('click', () => stockModal.classList.add('hidden'));
    stockModal.addEventListener('click', e => { if (e.target === stockModal) stockModal.classList.add('hidden'); });
    stockSearch.addEventListener('input', () => showStock(stockSearch.value));
    dailyBtn.addEventListener('click', () => { dailyDate = todayKey(); showDaily(); dailyModal.classList.remove('hidden'); });
    closeDaily.addEventListener('click', () => dailyModal.classList.add('hidden'));
    dailyModal.addEventListener('click', e => { if (e.target === dailyModal) dailyModal.classList.add('hidden'); });
    prevDay.addEventListener('click', () => shiftDay(-1));
    nextDay.addEventListener('click', () => shiftDay(1));

    // ── Init ───────────────────────────────────────────────
    initToast();
    initAuth();
})();
