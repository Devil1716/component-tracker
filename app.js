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
    const AUTH_MODE = RUNTIME_CONFIG.auth?.mode || 'firebase';
    const ADMIN_EMAIL = String(RUNTIME_CONFIG.auth?.adminEmail || RUNTIME_CONFIG.auth?.username || '').trim().toLowerCase();
    const ADMIN_USERNAME = String(RUNTIME_CONFIG.auth?.username || '').trim();
    const ADMIN_PASSWORD_HASH = String(RUNTIME_CONFIG.auth?.passwordHash || '').trim();
    const APP_ENV = new URLSearchParams(location.search).get('env') === 'test' ? 'testing' : (RUNTIME_CONFIG.environment || 'production');
    const DATABASE_PATHS = RUNTIME_CONFIG.databasePaths || {
        production: 'componentTracker/production/state',
        testing: 'componentTracker/testing/state'
    };
    const FIREBASE_STATE_PATH = DATABASE_PATHS[APP_ENV] || DATABASE_PATHS.production;
    const REMINDER_EMAIL_ENDPOINT = RUNTIME_CONFIG.email?.reminderEndpoint || '';
    const EMAIL_RE = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@(?:[a-z0-9-]+\.)+[a-z]{2,63}$/i;

    const ITEM_MAP = {};
    CATALOG.forEach(c => c.items.forEach(it => { ITEM_MAP[it.id] = it; }));

    // ── Storage helpers ────────────────────────────────────
    const KEY = 'comp_tracker_v8';
    const MIGRATION_KEY = `${KEY}_firebase_migrated_${APP_ENV}_v1`;
    function emptyData() { return { teams: {}, order: [], meta: {}, history: [], dateCounter: 0, schemaVersion: 2, updatedAt: '' }; }
    function blankMember() { return { name: '', sen: '', branch: '', email: '' }; }
    function cleanString(value, max = 200) { return String(value ?? '').trim().slice(0, max); }
    function normalizeEmail(value) { return cleanString(value, 254).toLowerCase(); }
    function isValidEmail(value) {
        const email = normalizeEmail(value);
        return Boolean(email && email.length <= 254 && !email.includes('..') && EMAIL_RE.test(email));
    }
    function emailValidationMessage(value, required = false) {
        const email = normalizeEmail(value);
        if (!email) return required ? 'Email is required.' : '';
        if (!isValidEmail(email)) return 'Enter a valid email address, for example student@example.edu.';
        return '';
    }
    function cleanQuantity(value) {
        const qty = Number.parseInt(value, 10);
        return Number.isFinite(qty) && qty > 0 ? Math.min(qty, 9999) : 0;
    }
    function cleanItemId(value) {
        const id = Number.parseInt(value, 10);
        return ITEM_MAP[id] ? id : 0;
    }
    function normalizeCheckout(item) {
        const itemId = cleanItemId(item?.itemId);
        const qty = cleanQuantity(item?.qty);
        if (!itemId || !qty) return null;
        return {
            uid: cleanString(item?.uid, 80) || Date.now().toString(36),
            itemId,
            qty,
            date: /^\d{4}-\d{2}-\d{2}$/.test(String(item?.date || '')) ? item.date : todayKey(),
            time: Number.isNaN(Date.parse(item?.time)) ? new Date().toISOString() : item.time,
            memberIndex: item?.memberIndex !== null && item?.memberIndex !== undefined && Number.isInteger(Number(item.memberIndex)) ? Number(item.memberIndex) : null,
            memberEmail: normalizeEmail(item?.memberEmail)
        };
    }
    function normalizeHistoryEvent(item) {
        const record = normalizeCheckout(item);
        if (!record) return null;
        return {
            ...record,
            type: item?.type === 'return' ? 'return' : 'take',
            team: cleanString(item?.team, 120)
        };
    }
    function normalizeMembers(members) {
        const out = Array.isArray(members) ? members.slice(0, MEMBER_COUNT) : [];
        while (out.length < MEMBER_COUNT) out.push(blankMember());
        return out.map(m => ({
            name: cleanString(m?.name, 120),
            sen: cleanString(m?.sen, 80),
            branch: BRANCHES.includes(m?.branch) ? m.branch : '',
            email: normalizeEmail(m?.email)
        }));
    }
    function normalizeMeta(meta = {}, fallbackId = '') {
        return {
            ...meta,
            id: cleanString(meta.id || fallbackId, 40),
            projectName: cleanString(meta.projectName, 160),
            detailsCollapsed: meta.detailsCollapsed === true,
            members: normalizeMembers(meta.members)
        };
    }
    function normalizeData(raw) {
        const d = raw && typeof raw === 'object' ? raw : emptyData();
        d.teams = d.teams && typeof d.teams === 'object' ? d.teams : {};
        d.order = Array.isArray(d.order) ? d.order.map(name => cleanString(name, 120)).filter(Boolean) : [];
        d.meta = d.meta && typeof d.meta === 'object' ? d.meta : {};
        d.history = Array.isArray(d.history) ? d.history.map(normalizeHistoryEvent).filter(Boolean) : [];
        d.dateCounter = Number.isFinite(d.dateCounter) ? d.dateCounter : 0;
        d.schemaVersion = 2;
        d.order.forEach(name => {
            d.teams[name] = Array.isArray(d.teams[name]) ? d.teams[name].map(normalizeCheckout).filter(Boolean) : [];
            if (!d.meta[name]) {
                d.dateCounter++;
                d.meta[name] = { id: generateId(d.dateCounter) };
            }
            d.meta[name] = normalizeMeta(d.meta[name], generateId(d.dateCounter));
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
    let firebaseAuthToken = '';
    let appUnlocked = false;
    let firebaseSaveTimer = null;
    let firebasePollTimer = null;
    let detailsSaveInProgress = false;

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
                branch: localMember.branch || member.branch,
                email: localMember.email || member.email
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
                projectName: (local.meta[name]?.projectName || merged.meta[name]?.projectName || ''),
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
        if (!firebaseReady || !firebaseAuthToken) return;
        clearTimeout(firebaseSaveTimer);
        firebaseSaveTimer = setTimeout(() => {
            putRemoteData(data).catch(err => {
                setSyncStatus('Cloud sync failed. Local copy saved.', 'danger');
                console.error('Firebase save failed', err);
            });
        }, 350);
    }

    function detailsEditorHasFocus() {
        return Boolean(detailsEditor && !detailsEditor.classList.contains('hidden') && detailsEditor.contains(document.activeElement));
    }

    function renderAll() {
        if (activeTeam && !data.teams[activeTeam]) {
            activeTeam = null;
            teamView.classList.add('hidden');
            emptyState.classList.remove('hidden');
        }
        renderTeams();
        if (activeTeam) selectTeam(activeTeam, { keepInputs: true, preserveDetailsInputs: detailsEditorHasFocus() });
        populateDataList();
    }

    function isAllowedAdminUser(user) {
        if (!user || !user.email) return false;
        return Boolean(ADMIN_EMAIL && user.email.toLowerCase() === ADMIN_EMAIL);
    }

    async function signInFirebaseAdmin(email, password) {
        if (!ADMIN_EMAIL) throw new Error('Admin Firebase email is not configured.');
        if (!RUNTIME_CONFIG.firebase?.apiKey) throw new Error('Firebase API key is not configured.');
        if (!email || !password) throw new Error('Enter the admin email and password.');
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${encodeURIComponent(RUNTIME_CONFIG.firebase.apiKey)}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password, returnSecureToken: true })
        });
        const result = await response.json().catch(() => ({}));
        if (!response.ok) {
            throw new Error('Invalid username or password.');
        }
        if (!isAllowedAdminUser(result)) {
            firebaseAuthToken = '';
            throw new Error('This account is not allowed to access this tracker.');
        }
        firebaseAuthToken = result.idToken || '';
        sessionStorage.setItem(AUTH_SESSION_KEY, JSON.stringify({
            email: result.email,
            idToken: firebaseAuthToken,
            expiresAt: Date.now() + (Number(result.expiresIn || 3600) * 1000)
        }));
    }

    function restoreFirebaseSession() {
        try {
            const session = JSON.parse(sessionStorage.getItem(AUTH_SESSION_KEY) || '{}');
            if (!isAllowedAdminUser(session) || !session.idToken || session.expiresAt <= Date.now()) return false;
            firebaseAuthToken = session.idToken;
            return true;
        } catch {
            return false;
        }
    }

    function firebaseStateUrl() {
        const base = String(RUNTIME_CONFIG.firebase?.databaseURL || '').replace(/\/$/, '');
        if (!base) throw new Error('Firebase database URL is not configured.');
        return `${base}/${FIREBASE_STATE_PATH}.json?auth=${encodeURIComponent(firebaseAuthToken)}`;
    }

    async function getRemoteData() {
        const response = await fetch(firebaseStateUrl(), { cache: 'no-store' });
        if (!response.ok) throw new Error(`Firebase read failed: ${response.status}`);
        return response.json();
    }

    async function putRemoteData(nextData) {
        const response = await fetch(firebaseStateUrl(), {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(nextData)
        });
        if (!response.ok) throw new Error(`Firebase write failed: ${response.status}`);
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
            if (AUTH_MODE === 'firebase' && !firebaseAuthToken) {
                setSyncStatus('Sign in with the admin Firebase account to sync.', 'danger');
                return;
            }
            setSyncStatus(`Cloud sync connected (${APP_ENV})`, 'success');

            const remoteData = await getRemoteData();
            const localData = load();
            const alreadyMigrated = localStorage.getItem(MIGRATION_KEY) === 'true';

            if (!remoteData && hasLocalContent(localData)) {
                data = normalizeData(localData);
                await putRemoteData(data);
                localStorage.setItem(MIGRATION_KEY, 'true');
            } else if (remoteData && hasLocalContent(localData) && !alreadyMigrated) {
                data = mergeData(remoteData, localData);
                await putRemoteData(data);
                localStorage.setItem(MIGRATION_KEY, 'true');
            } else if (remoteData) {
                data = normalizeData(remoteData);
                save(data, { remote: true });
            }

            firebaseReady = true;
            setSyncStatus(`Cloud sync connected (${APP_ENV})`, 'success');
            renderAll();

            clearInterval(firebasePollTimer);
            firebasePollTimer = setInterval(async () => {
                try {
                    const nextRaw = await getRemoteData();
                    if (!nextRaw) return;
                    const next = normalizeData(nextRaw);
                    if (JSON.stringify(next) === JSON.stringify(data)) return;
                    data = next;
                    save(data, { remote: true });
                    setSyncStatus(`Cloud sync connected (${APP_ENV})`, 'success');
                    renderAll();
                } catch (err) {
                    setSyncStatus('Cloud sync unavailable. Local copy saved.', 'danger');
                    console.error('Firebase polling failed', err);
                }
            }, 5000);
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
    const teamSearchInput = $('#teamSearchInput');
    const emptyState = $('#emptyState'), teamView = $('#teamView'), teamTitle = $('#teamTitle');
    const deleteTeamBtn = $('#deleteTeamBtn'), componentSelect = $('#componentSelect'); // INPUT
    const teamRenameInput = $('#teamRenameInput'), teamNumberInput = $('#teamNumberInput'), projectNameInput = $('#projectNameInput');
    const renameTeamBtn = $('#renameTeamBtn'), saveDetailsBtn = $('#saveDetailsBtn');
    const membersGrid = $('#membersGrid'), syncStatus = $('#syncStatus');
    const detailsEditor = $('#detailsEditor'), detailsSummary = $('#detailsSummary'), editDetailsBtn = $('#editDetailsBtn');
    const componentList = $('#componentList'); // DATALIST
    const quantityInput = $('#quantityInput'), issueMemberSelect = $('#issueMemberSelect'), logComponentBtn = $('#logComponentBtn');
    const randomAssignBtn = $('#randomAssignBtn'), regenerateAssignBtn = $('#regenerateAssignBtn');
    const inventoryBody = $('#inventoryBody'), noItemsMsg = $('#noItemsMsg');
    const exportBtn = $('#exportBtn'), summaryBtn = $('#summaryBtn'), summaryModal = $('#summaryModal');
    const summaryContent = $('#summaryContent'), closeSummary = $('#closeSummary');
    const stockBtn = $('#stockBtn'), stockModal = $('#stockModal'), stockContent = $('#stockContent');
    const closeStock = $('#closeStock'), stockSearch = $('#stockSearch'), stockHint = $('#stockHint');
    const dailyBtn = $('#dailyBtn'), dailyModal = $('#dailyModal'), dailyContent = $('#dailyContent');
    const closeDaily = $('#closeDaily'), prevDay = $('#prevDay'), nextDay = $('#nextDay');
    const currentDateEl = $('#currentDate');
    const reminderBtn = $('#reminderBtn'), reminderModal = $('#reminderModal'), closeReminder = $('#closeReminder');
    const reminderList = $('#reminderList'), reminderStatus = $('#reminderStatus'), sendReminderBtn = $('#sendReminderBtn');
    const exportModal = $('#exportModal'), closeExport = $('#closeExport'), exportMode = $('#exportMode'), exportSort = $('#exportSort'), downloadExportBtn = $('#downloadExportBtn');
    const allocationBtn = $('#allocationBtn'), allocationModal = $('#allocationModal'), closeAllocation = $('#closeAllocation');
    const allocationSearch = $('#allocationSearch'), allocationTeamFilter = $('#allocationTeamFilter'), allocationStatusFilter = $('#allocationStatusFilter'), allocationSort = $('#allocationSort');
    const allocationBody = $('#allocationBody'), allocationEmpty = $('#allocationEmpty'), allocationExportBtn = $('#allocationExportBtn');

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
        if (appUnlocked) return;
        appUnlocked = true;
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
        const password = loginPassword.value;
        try {
            if (AUTH_MODE === 'firebase') {
                await signInFirebaseAdmin(username, password);
            } else {
                if (!ADMIN_USERNAME || !ADMIN_PASSWORD_HASH) {
                    throw new Error('Admin login is not configured.');
                }
                const passwordHash = await sha256(password);
                if (username !== ADMIN_USERNAME || passwordHash !== ADMIN_PASSWORD_HASH) {
                    throw new Error('Invalid username or password.');
                }
                sessionStorage.setItem(AUTH_SESSION_KEY, JSON.stringify({ localHash: true }));
            }
            loginPassword.value = '';
            unlockApp();
        } catch (err) {
            loginError.textContent = err?.message || 'Invalid username or password.';
            loginPassword.value = '';
            loginPassword.focus();
        }
    }

    function initAuth() {
        loginForm.addEventListener('submit', handleLogin);
        document.body.classList.add('auth-locked');
        loginView.classList.remove('hidden');
        if (AUTH_MODE === 'firebase' && restoreFirebaseSession()) {
            unlockApp();
        } else if (AUTH_MODE !== 'firebase' && sessionStorage.getItem(AUTH_SESSION_KEY) && ADMIN_USERNAME && ADMIN_PASSWORD_HASH) {
            unlockApp();
        } else {
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

    function populateIssueMemberSelect() {
        if (!issueMemberSelect) return;
        issueMemberSelect.innerHTML = '<option value="">Issue to member...</option>';
        if (!activeTeam) return;
        const members = normalizeMembers(data.meta[activeTeam]?.members);
        members.forEach((member, index) => {
            if (!member.name && !member.email) return;
            const option = document.createElement('option');
            option.value = String(index);
            option.textContent = `${member.name || `Member ${index + 1}`}${member.email ? ` (${member.email})` : ''}`;
            issueMemberSelect.appendChild(option);
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
                <input type="text" inputmode="email" data-field="email" value="${esc(member.email)}" placeholder="College email ID">
                <div class="field-error" data-error-for="email"></div>
                <select data-field="branch">${branchOptions}</select>
            </div>`;
        }).join('');
        renderDetailsState();
        validateMemberInputs(false);
    }

    function teamNumberAvailable(id, currentTeam = activeTeam) {
        const normalized = cleanString(id, 40).toLowerCase();
        if (!normalized) return false;
        return !data.order.some(team => team !== currentTeam && cleanString(data.meta[team]?.id, 40).toLowerCase() === normalized);
    }

    function memberDetailsComplete(members) {
        const normalized = normalizeMembers(members);
        const filled = normalized.filter(member => member.name || member.sen || member.branch || member.email);
        return Boolean(filled.length) && filled.every(member => member.name && member.sen && member.branch && isValidEmail(member.email));
    }

    function teamDetailsComplete(meta) {
        return Boolean(cleanString(meta?.id, 40) && cleanString(meta?.projectName, 160) && memberDetailsComplete(meta?.members));
    }

    function renderDetailsState(forceOpen = false) {
        if (!activeTeam) return;
        const meta = data.meta[activeTeam] || {};
        const members = normalizeMembers(meta.members);
        const complete = teamDetailsComplete(meta);
        const collapsed = complete && meta.detailsCollapsed !== false && !forceOpen;
        detailsEditor.classList.toggle('hidden', collapsed);
        detailsSummary.classList.toggle('hidden', !collapsed);
        editDetailsBtn.classList.toggle('hidden', !collapsed);
        if (collapsed) {
            const filled = members.filter(member => member.name && member.sen && member.branch && isValidEmail(member.email)).length;
            detailsSummary.innerHTML = `<strong>${esc(meta.id)} - ${filled}/${MEMBER_COUNT} members saved</strong><span>${esc(meta.projectName)} - ${esc(activeTeam)}</span>`;
        }
    }

    function openDetailsEditor() {
        if (!activeTeam) return;
        data.meta[activeTeam] = data.meta[activeTeam] || {};
        data.meta[activeTeam].detailsCollapsed = false;
        save(data);
        renderDetailsState(true);
    }

    function validateMemberInputs(showRequired = false) {
        let valid = true;
        membersGrid.querySelectorAll('.member-card').forEach(card => {
            const emailInput = card.querySelector('[data-field="email"]');
            const error = card.querySelector('[data-error-for="email"]');
            if (!emailInput || !error) return;
            const rowHasValue = [...card.querySelectorAll('[data-field]')].some(input => cleanString(input.value, 254));
            const msg = emailValidationMessage(emailInput.value, showRequired && rowHasValue);
            emailInput.classList.toggle('invalid', Boolean(msg));
            error.textContent = msg;
            if (msg) valid = false;
        });
        return valid;
    }

    function updateMember(target) {
        if (target?.dataset?.field === 'email') validateMemberInputs(false);
        renderDetailsState(true);
    }

    function updateTeamMetaField() {
        renderDetailsState(true);
    }

    function saveTeamDetails() {
        if (!activeTeam) return;
        detailsSaveInProgress = true;
        const members = [...membersGrid.querySelectorAll('.member-card')].map(card => ({
            name: card.querySelector('[data-field="name"]')?.value || '',
            sen: card.querySelector('[data-field="sen"]')?.value || '',
            email: normalizeEmail(card.querySelector('[data-field="email"]')?.value || ''),
            branch: card.querySelector('[data-field="branch"]')?.value || ''
        }));
        const meta = normalizeMeta({
            ...(data.meta[activeTeam] || {}),
            id: teamNumberInput.value,
            projectName: projectNameInput.value,
            members
        });
        const finish = () => setTimeout(() => { detailsSaveInProgress = false; }, 150);
        if (!meta.id) { finish(); return toast('Enter a team number', 'danger'); }
        if (!teamNumberAvailable(meta.id)) { finish(); return toast('Team number already exists', 'danger'); }
        if (!meta.projectName) { finish(); return toast('Enter a project name', 'danger'); }
        if (!validateMemberInputs(true)) { finish(); return toast('Fix the highlighted email addresses', 'danger'); }
        if (!memberDetailsComplete(meta.members)) { finish(); return toast('Complete each entered member with name, SEN, branch, and email', 'danger'); }
        meta.detailsCollapsed = true;
        data.meta[activeTeam] = meta;
        save(data);
        renderTeams();
        populateIssueMemberSelect();
        renderDetailsState();
        toast('Team details saved');
        setSyncStatus(firebaseReady ? 'Saved to cloud.' : 'Saved locally. Sync pending.', 'success');
        finish();
    }

    function renameTeam() {
        if (!activeTeam) return;
        const oldName = activeTeam;
        const newName = teamRenameInput.value.trim();
        if (!newName) return toast('Enter a team name', 'danger');
        if (newName === oldName) return toast('Team name unchanged', 'info');
        if (data.teams[newName]) return toast('Team already exists', 'danger');

        data.teams[newName] = data.teams[oldName] || [];
        data.meta[newName] = normalizeMeta(data.meta[oldName] || { id: '???', members: normalizeMembers() });
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
        const query = cleanString(teamSearchInput?.value, 120).toLowerCase();
        let rendered = 0;
        data.order.forEach(name => {
            const meta = data.meta[name] || { id: '???', projectName: '' };
            const matches = !query
                || name.toLowerCase().includes(query)
                || cleanString(meta.projectName, 160).toLowerCase().includes(query)
                || cleanString(meta.id, 40).toLowerCase().includes(query);
            if (!matches) return;
            rendered++;
            const d = document.createElement('div');
            d.className = 'team-item' + (name === activeTeam ? ' active' : '');
            const items = data.teams[name] || [];
            const totalQty = items.reduce((s, c) => s + c.qty, 0);

            // Using standard team item logic (SVG removed from JS, handled by CSS/HTML structure)
            // Team ID + Name + Badge
            d.innerHTML = `<span class="team-id">${esc(meta.id)}</span>
      <span class="team-list-copy"><strong>${esc(name)}</strong><small>${esc(meta.projectName || 'Project name pending')}</small></span>`
                + (totalQty ? `<span class="badge">${totalQty}</span>` : '');
            d.addEventListener('click', () => selectTeam(name));
            teamListEl.appendChild(d);
        });
        if (!rendered) {
            teamListEl.innerHTML = '<div class="team-empty">No matching teams</div>';
        }
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
        teamTitle.innerHTML = `<span style="font-size:0.5em;opacity:0.6;margin-right:12px;vertical-align:middle;border:1px solid #ccc;padding:2px 6px;border-radius:4px">${esc(meta.id)}</span>${esc(name)}${meta.projectName ? `<small class="team-title-project">${esc(meta.projectName)}</small>` : ''}`;
        if (!options.preserveDetailsInputs) {
            teamRenameInput.value = name;
            teamNumberInput.value = meta.id || '';
            projectNameInput.value = meta.projectName || '';
        }

        renderTeams();
        if (!options.preserveDetailsInputs) renderMembers();
        else renderDetailsState(true);
        renderInventory();
        populateDataList();
        populateIssueMemberSelect();
        if (!options.keepInputs) {
            quantityInput.value = 1;
            issueMemberSelect.value = '';
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
        data.meta[name] = normalizeMeta({ id: generateId(data.dateCounter), members: normalizeMembers(), projectName: '', detailsCollapsed: false });

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
    function validAssignableMembers(team = activeTeam) {
        return normalizeMembers(data.meta[team]?.members)
            .map((member, index) => ({ ...member, index }))
            .filter(member => member.name && isValidEmail(member.email));
    }

    function chooseFairMember(itemId, team = activeTeam, excludeIndex = null) {
        const members = validAssignableMembers(team).filter(member => member.index !== excludeIndex);
        if (!members.length) return null;
        const items = data.teams[team] || [];
        const scored = members.map(member => ({
            ...member,
            load: items.reduce((sum, item) => sum + (item.memberIndex === member.index ? item.qty : 0), 0),
            sameComponent: items.some(item => item.itemId === itemId && item.memberIndex === member.index)
        })).filter(member => !member.sameComponent);
        const pool = scored.length ? scored : members.map(member => ({ ...member, load: 0 }));
        const minLoad = Math.min(...pool.map(member => member.load));
        const lightest = pool.filter(member => member.load === minLoad);
        return lightest[Math.floor(Math.random() * lightest.length)];
    }

    function setFairRandomMember(regenerate = false) {
        const itemId = getSelectedId();
        if (!itemId) return toast('Select a valid component first', 'danger');
        const current = issueMemberSelect.value === '' ? null : Number(issueMemberSelect.value);
        const member = chooseFairMember(itemId, activeTeam, regenerate ? current : null);
        if (!member) return toast('No eligible members with valid emails', 'danger');
        issueMemberSelect.value = String(member.index);
        toast(`${regenerate ? 'Regenerated' : 'Assigned'} to ${member.name}`, 'info');
    }

    function logComponent() {
        if (!activeTeam) return;
        const itemId = getSelectedId();
        if (!itemId) return toast('Select a valid component', 'danger');

        const qty = parseInt(quantityInput.value, 10);
        if (!qty || qty < 1) return toast('Qty must be at least 1', 'danger');
        const remaining = getRemaining(itemId);
        if (qty > remaining) return toast(`Only ${remaining} left`, 'danger');
        const memberIndex = issueMemberSelect.value === '' ? null : Number(issueMemberSelect.value);
        const member = Number.isInteger(memberIndex) ? normalizeMembers(data.meta[activeTeam]?.members)[memberIndex] : null;
        if (!member || !member.name || !isValidEmail(member.email)) return toast('Select a member with a valid email', 'danger');

        const now = new Date();
        const dateKey = toDateKey(now);
        const uid = Date.now().toString(36) + Math.random().toString(36).slice(2, 5);

        const existing = (data.teams[activeTeam] || []).find(
            c => c.itemId === itemId && c.memberIndex === memberIndex
        );
        if (existing) {
            existing.qty += qty;
            existing.time = now.toISOString();
            existing.memberIndex = memberIndex;
            existing.memberEmail = member.email;
        } else {
            data.teams[activeTeam].push({
                uid, itemId, qty, date: dateKey, time: now.toISOString(), memberIndex, memberEmail: member.email
            });
        }

        data.history.push({
            type: 'take', uid, itemId, qty, date: dateKey, time: now.toISOString(), team: activeTeam, memberIndex, memberEmail: member.email
        });

        save(data);
        renderInventory();
        populateDataList();
        quantityInput.value = 1;
        issueMemberSelect.value = '';
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

    function reassignItem(uid) {
        if (!activeTeam) return;
        const teamItems = data.teams[activeTeam] || [];
        const item = teamItems.find(c => c.uid === uid);
        if (!item) return;
        const members = validAssignableMembers(activeTeam);
        if (!members.length) return toast('No eligible members with valid emails', 'danger');
        const options = members.map(member => `${member.index + 1}: ${member.name} <${member.email}>`).join('\n');
        const choice = prompt(`Reassign to member number:\n${options}`, String((item.memberIndex ?? 0) + 1));
        if (choice === null) return;
        const nextIndex = Number(choice) - 1;
        const nextMember = members.find(member => member.index === nextIndex);
        if (!nextMember) return toast('Select a valid member number', 'danger');
        const now = new Date();
        const duplicate = teamItems.find(c => c.uid !== uid && c.itemId === item.itemId && c.memberIndex === nextMember.index);
        if (duplicate) {
            duplicate.qty += item.qty;
            duplicate.time = now.toISOString();
            teamItems.splice(teamItems.indexOf(item), 1);
        } else {
            item.memberIndex = nextMember.index;
            item.memberEmail = nextMember.email;
            item.time = now.toISOString();
        }
        data.history.push({
            type: 'take',
            uid: Date.now().toString(36),
            itemId: item.itemId,
            qty: item.qty,
            date: toDateKey(now),
            time: now.toISOString(),
            team: activeTeam,
            memberIndex: nextMember.index,
            memberEmail: nextMember.email
        });
        save(data);
        renderInventory();
        toast(`Reassigned to ${nextMember.name}`);
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
            dateRow.innerHTML = `<td colspan="6" style="padding:14px 14px 6px;border:none;">
      <span class="date-stamp">${formatDate(dk)}</span>
    </td>`;
            inventoryBody.appendChild(dateRow);

            byDate[dk].forEach(item => {
                idx++;
                const it = ITEM_MAP[item.itemId];
                const name = it ? it.name : 'Unknown';
                const member = Number.isInteger(item.memberIndex) ? normalizeMembers(data.meta[activeTeam]?.members)[item.memberIndex] : null;
                const issuedTo = member?.name || item.memberEmail || 'Team';
                const tr = document.createElement('tr');
                const t = new Date(item.time);
                const ts = t.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

                tr.innerHTML = `
        <td>${idx}</td>
        <td>${esc(name)}</td>
        <td>${esc(issuedTo)}</td>
        <td><div class="qty-cell"><span class="qty-val">${item.qty}</span></div></td>
        <td style="color:var(--text-dim)">${ts}</td>
        <td><button class="return-btn" data-uid="${item.uid}" data-qty="${item.qty}">Return</button> <button class="return-btn reassign-btn" data-uid="${item.uid}">Reassign</button></td>`;
                inventoryBody.appendChild(tr);
            });
        });
    }

    inventoryBody.addEventListener('click', e => {
        const rb = e.target.closest('.return-btn');
        if (rb?.classList.contains('reassign-btn')) return reassignItem(rb.dataset.uid);
        if (rb) return returnItem(rb.dataset.uid, parseInt(rb.dataset.qty));
    });

    componentSelect.addEventListener('input', updateStockHint);

    // ── Export CSV ─────────────────────────────────────────
    const csvCell = value => `"${String(value ?? '').replace(/"/g, '""')}"`;

    function downloadCSV(filename, headers, rows) {
        const csv = [
            headers.map(csvCell).join(','),
            ...rows.map(row => headers.map(header => csvCell(row[header])).join(','))
        ].join('\n') + '\n';
        const b = new Blob([csv], { type: 'text/csv;charset=utf-8' });
        const u = URL.createObjectURL(b);
        const a = document.createElement('a');
        a.href = u;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(u);
    }

    function allocationRows(includeReturned = false) {
        const pending = [];
        data.order.forEach(team => {
            const meta = normalizeMeta(data.meta[team] || {});
            const members = normalizeMembers(meta.members);
            (data.teams[team] || []).forEach(item => {
                const catalog = ITEM_MAP[item.itemId];
                const member = Number.isInteger(item.memberIndex) ? members[item.memberIndex] : null;
                pending.push({
                    Component: catalog ? catalog.name : 'Unknown component',
                    Team: team,
                    'Team ID': meta.id,
                    'Project Name': meta.projectName,
                    Member: member?.name || '',
                    Email: item.memberEmail || member?.email || '',
                    Quantity: item.qty,
                    'Assigned Date': item.date || '',
                    Status: 'Pending',
                    Notes: item.memberEmail ? `Issued to ${member?.name || item.memberEmail}` : 'Issued to team'
                });
            });
        });
        if (!includeReturned) return pending;
        const returned = data.history
            .filter(item => item.type === 'return')
            .map(item => {
                const meta = normalizeMeta(data.meta[item.team] || {});
                const catalog = ITEM_MAP[item.itemId];
                return {
                    Component: catalog ? catalog.name : 'Unknown component',
                    Team: item.team,
                    'Team ID': meta.id,
                    'Project Name': meta.projectName,
                    Member: '',
                    Email: '',
                    Quantity: item.qty,
                    'Assigned Date': item.date || '',
                    Status: 'Returned',
                    Notes: 'Returned to inventory'
                };
            });
        return pending.concat(returned);
    }

    function sortRows(rows, sortKey) {
        const keyMap = {
            team: 'Team',
            component: 'Component',
            quantity: 'Quantity',
            status: 'Status',
            date: 'Assigned Date'
        };
        const key = keyMap[sortKey] || 'Team';
        return rows.sort((a, b) => {
            if (key === 'Quantity') return Number(b[key] || 0) - Number(a[key] || 0);
            const aValue = a[key] ?? a.Date ?? '';
            const bValue = b[key] ?? b.Date ?? '';
            if (key === 'Assigned Date') return String(bValue).localeCompare(String(aValue));
            return String(aValue).localeCompare(String(bValue));
        });
    }

    function buildExportRows(mode, sortKey) {
        if (mode === 'inventory') {
            const rows = CATALOG.flatMap(cat => cat.items.map(item => ({
                Category: cat.cat,
                Component: item.name,
                'Total Stock': item.stock,
                Allocated: getTotalUsed(item.id),
                Available: getRemaining(item.id),
                Status: getRemaining(item.id) <= 0 ? 'Out of stock' : 'Available'
            })));
            return { filename: 'full_inventory.csv', headers: ['Category', 'Component', 'Total Stock', 'Allocated', 'Available', 'Status'], rows };
        }
        if (mode === 'team') {
            const rows = allocationRows(false).map(row => ({
                'Team ID': row['Team ID'],
                Team: row.Team,
                'Project Name': row['Project Name'],
                Component: row.Component,
                Member: row.Member,
                Email: row.Email,
                Quantity: row.Quantity,
                Date: row['Assigned Date'],
                Status: row.Status
            }));
            return { filename: 'team_wise_components.csv', headers: ['Team ID', 'Team', 'Project Name', 'Component', 'Member', 'Email', 'Quantity', 'Date', 'Status'], rows: sortRows(rows, sortKey) };
        }
        if (mode === 'pending') {
            const rows = allocationRows(false);
            return { filename: 'pending_components_report.csv', headers: ['Team ID', 'Team', 'Project Name', 'Component', 'Member', 'Email', 'Quantity', 'Assigned Date', 'Status', 'Notes'], rows: sortRows(rows, sortKey) };
        }
        const rows = allocationRows(true);
        return { filename: 'allocation_report.csv', headers: ['Team ID', 'Team', 'Project Name', 'Component', 'Member', 'Email', 'Quantity', 'Assigned Date', 'Status', 'Notes'], rows: sortRows(rows, sortKey) };
    }

    function exportCSV(mode = exportMode?.value || 'inventory', sortKey = exportSort?.value || 'team') {
        const { filename, headers, rows } = buildExportRows(mode, sortKey);
        if (!rows.length) return toast('Nothing to export', 'info');
        downloadCSV(filename, headers, rows);
        toast('CSV exported');
    }

    function renderAllocationTracker() {
        allocationTeamFilter.innerHTML = '<option value="">All teams</option>' + data.order
            .map(team => `<option value="${esc(team)}">${esc(team)}</option>`)
            .join('');
        updateAllocationTracker();
    }

    function updateAllocationTracker() {
        const query = normalizeEmail(allocationSearch.value).replace(/@/g, ' ');
        const teamFilter = allocationTeamFilter.value;
        const statusFilter = allocationStatusFilter.value;
        const rows = sortRows(allocationRows(true), allocationSort.value)
            .filter(row => !teamFilter || row.Team === teamFilter)
            .filter(row => !statusFilter || row.Status.toLowerCase() === statusFilter)
            .filter(row => {
                if (!query) return true;
                const haystack = [row.Component, row.Team, row.Member, row.Email, row.Notes, row['Project Name'], row['Team ID']]
                    .join(' ')
                    .toLowerCase();
                return query.split(/\s+/).every(part => !part || haystack.includes(part));
            });
        allocationBody.innerHTML = rows.map(row => `<tr>
            <td>${esc(row.Component)}</td>
            <td>${esc(row['Team ID'])} - ${esc(row.Team)}</td>
            <td>${esc(row.Quantity)}</td>
            <td>${esc(row['Assigned Date'])}</td>
            <td>${esc(row.Status)}</td>
            <td>${esc(row.Notes)}</td>
        </tr>`).join('');
        allocationEmpty.classList.toggle('hidden', rows.length > 0);
    }

    // ── Modals ─────────────────────────────────────────────
    function showSummary() {
        if (!data.order.length) return toast('No teams', 'info');
        let total = 0, html = '';
        data.order.forEach(team => {
            const meta = data.meta[team] || { id: '' };
            const items = data.teams[team] || [];
            if (!items.length) {
                html += `<div class="summary-team"><h4>[${esc(meta.id)}] ${esc(team)}</h4>
        <p class="summary-project">${esc(meta.projectName || 'Project name pending')}</p>
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
            html += `<div class="summary-team"><h4>[${esc(meta.id)}] ${esc(team)} - <span style="color:var(--accent3)">${tq} items</span></h4>
      <p class="summary-project">${esc(meta.projectName || 'Project name pending')}</p>
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

    function pendingTeams() {
        return data.order.map(team => {
            const items = data.teams[team] || [];
            if (!items.length) return null;
            const meta = normalizeMeta(data.meta[team] || {});
            const pendingComponents = items.map(item => {
                const catalog = ITEM_MAP[item.itemId];
                return {
                    uid: item.uid,
                    itemId: item.itemId,
                    name: catalog ? catalog.name : 'Unknown component',
                    qty: item.qty,
                    date: item.date,
                    time: item.time,
                    memberIndex: item.memberIndex,
                    memberEmail: item.memberEmail
                };
            });
            const members = normalizeMembers(meta.members);
            const validMembers = members.filter(member => member.name && isValidEmail(member.email));
            const recipientMap = new Map();
            pendingComponents.forEach(component => {
                const member = Number.isInteger(component.memberIndex) ? members[component.memberIndex] : null;
                const targets = member && isValidEmail(member.email) ? [member] : validMembers;
                targets.forEach(target => {
                    if (!recipientMap.has(target.email)) {
                        recipientMap.set(target.email, {
                            name: target.name,
                            sen: target.sen,
                            branch: target.branch,
                            email: target.email,
                            pendingComponents: []
                        });
                    }
                    recipientMap.get(target.email).pendingComponents.push(component);
                });
            });
            const recipients = [...recipientMap.values()];
            return {
                team,
                teamNumber: meta.id,
                projectName: meta.projectName,
                pendingComponents,
                recipients
            };
        }).filter(Boolean);
    }

    function renderReminderTeams() {
        const teams = pendingTeams();
        if (!teams.length) {
            reminderStatus.textContent = 'No teams have pending components.';
            reminderStatus.className = 'reminder-status success';
            reminderList.innerHTML = '';
            sendReminderBtn.disabled = true;
            return;
        }
        reminderStatus.textContent = REMINDER_EMAIL_ENDPOINT
            ? `Select teams to email. Sender: ${ADMIN_EMAIL}`
            : 'Reminder service is not connected. Add the Firebase Function URL in COMPONENT_TRACKER_CONFIG.email.reminderEndpoint.';
        reminderStatus.className = REMINDER_EMAIL_ENDPOINT ? 'reminder-status' : 'reminder-status danger';
        sendReminderBtn.disabled = !REMINDER_EMAIL_ENDPOINT;
        reminderList.innerHTML = teams.map(item => {
            const recipientText = item.recipients.length
                ? item.recipients.map(r => `${esc(r.name)} &lt;${esc(r.email)}&gt;`).join(', ')
                : '<span class="danger-text">No valid member emails</span>';
            const components = item.pendingComponents.map(component => `<li>${esc(component.name)} <strong>x${component.qty}</strong></li>`).join('');
            return `<label class="reminder-card">
                <input type="checkbox" class="reminder-check" value="${esc(item.team)}" ${item.recipients.length ? 'checked' : 'disabled'}>
                <div>
                    <div class="reminder-card-head">
                        <strong>${esc(item.teamNumber)} - ${esc(item.team)}</strong>
                        <span>${esc(item.projectName || 'Project name pending')}</span>
                    </div>
                    <p>Recipients: ${recipientText}</p>
                    <ul>${components}</ul>
                </div>
            </label>`;
        }).join('');
    }

    function showReminders() {
        renderReminderTeams();
        reminderModal.classList.remove('hidden');
    }

    async function sendReminderEmails() {
        const selected = [...reminderList.querySelectorAll('.reminder-check:checked')].map(input => input.value);
        if (!selected.length) return toast('Select at least one team', 'danger');
        if (!REMINDER_EMAIL_ENDPOINT) return toast('Reminder service is not connected yet', 'danger');
        const payload = {
            adminEmail: ADMIN_EMAIL,
            teams: pendingTeams().filter(item => selected.includes(item.team))
        };
        sendReminderBtn.disabled = true;
        sendReminderBtn.textContent = 'Sending...';
        reminderStatus.textContent = 'Sending reminder emails...';
        reminderStatus.className = 'reminder-status';
        try {
            const response = await fetchWithRetry(REMINDER_EMAIL_ENDPOINT, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        ...(firebaseAuthToken ? { Authorization: `Bearer ${firebaseAuthToken}` } : {})
                    },
                    body: JSON.stringify(payload)
                },
                3,
                15000
            );
            const result = await response.json().catch(() => ({}));
            if (!response.ok && response.status !== 207) throw new Error(userFriendlyReminderError(response.status, result));
            const failedText = result.failed ? ` ${result.failed} failed; check function logs.` : '';
            const skippedText = result.skippedInvalidEmails ? ` ${result.skippedInvalidEmails} invalid email(s) skipped.` : '';
            reminderStatus.textContent = `Sent ${result.sent || 0} reminder email(s).${failedText}${skippedText}`;
            reminderStatus.className = result.failed ? 'reminder-status danger' : 'reminder-status success';
            toast(result.failed ? 'Some reminder emails failed' : 'Reminder emails sent', result.failed ? 'danger' : 'success');
        } catch (err) {
            console.error('Reminder request failed', err);
            reminderStatus.textContent = err?.friendlyMessage || err?.message || 'Could not send reminders. Check your internet connection and try again.';
            reminderStatus.className = 'reminder-status danger';
            toast('Reminder email send failed', 'danger');
        } finally {
            sendReminderBtn.disabled = false;
            sendReminderBtn.textContent = 'Send Selected Emails';
        }
    }

    function userFriendlyReminderError(status, result = {}) {
        if (status === 401 || status === 403) return 'Your admin session expired or is not allowed to send reminders. Sign in again.';
        if (status === 500 && /SMTP/i.test(result.error || '')) return 'Reminder mail service is not configured on the server.';
        if (status >= 500) return 'Reminder service is temporarily unavailable. Please try again shortly.';
        return 'Could not send reminders. Check selected teams and try again.';
    }

    async function fetchWithRetry(url, options, attempts = 3, timeoutMs = 15000) {
        let lastError;
        for (let attempt = 1; attempt <= attempts; attempt++) {
            const controller = new AbortController();
            const timeout = setTimeout(() => controller.abort(), timeoutMs);
            try {
                const response = await fetch(url, { ...options, signal: controller.signal });
                clearTimeout(timeout);
                if (response.status >= 500 && attempt < attempts) throw new Error(`Server unavailable (${response.status})`);
                return response;
            } catch (err) {
                clearTimeout(timeout);
                lastError = err;
                console.warn('Reminder request attempt failed', { attempt, attempts, message: err?.message });
                if (attempt < attempts) await new Promise(resolve => setTimeout(resolve, 500 * attempt));
            }
        }
        const message = lastError?.name === 'AbortError'
            ? 'Reminder service timed out. Please check the network and try again.'
            : 'Network problem while sending reminders. Please try again.';
        const friendly = new Error(message);
        friendly.friendlyMessage = message;
        throw friendly;
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
                html += `<div class="summary-team"><h4>[${esc(meta.id)}] ${esc(team)}</h4>
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
    teamSearchInput.addEventListener('input', renderTeams);
    renameTeamBtn.addEventListener('click', renameTeam);
    editDetailsBtn.addEventListener('click', openDetailsEditor);
    teamRenameInput.addEventListener('keydown', e => { if (e.key === 'Enter') renameTeam(); });
    teamNumberInput.addEventListener('input', updateTeamMetaField);
    projectNameInput.addEventListener('input', updateTeamMetaField);
    saveDetailsBtn.addEventListener('click', saveTeamDetails);
    membersGrid.addEventListener('input', e => updateMember(e.target));
    membersGrid.addEventListener('change', e => updateMember(e.target));
    deleteTeamBtn.addEventListener('click', deleteTeam);
    logComponentBtn.addEventListener('click', logComponent);
    randomAssignBtn.addEventListener('click', () => setFairRandomMember(false));
    regenerateAssignBtn.addEventListener('click', () => setFairRandomMember(true));
    quantityInput.addEventListener('keydown', e => { if (e.key === 'Enter') logComponent(); });
    exportBtn.addEventListener('click', () => exportModal.classList.remove('hidden'));
    closeExport.addEventListener('click', () => exportModal.classList.add('hidden'));
    exportModal.addEventListener('click', e => { if (e.target === exportModal) exportModal.classList.add('hidden'); });
    downloadExportBtn.addEventListener('click', () => exportCSV());
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
    reminderBtn.addEventListener('click', showReminders);
    closeReminder.addEventListener('click', () => reminderModal.classList.add('hidden'));
    reminderModal.addEventListener('click', e => { if (e.target === reminderModal) reminderModal.classList.add('hidden'); });
    sendReminderBtn.addEventListener('click', sendReminderEmails);
    allocationBtn.addEventListener('click', () => { renderAllocationTracker(); allocationModal.classList.remove('hidden'); });
    closeAllocation.addEventListener('click', () => allocationModal.classList.add('hidden'));
    allocationModal.addEventListener('click', e => { if (e.target === allocationModal) allocationModal.classList.add('hidden'); });
    [allocationSearch, allocationTeamFilter, allocationStatusFilter, allocationSort].forEach(control => {
        control.addEventListener('input', updateAllocationTracker);
        control.addEventListener('change', updateAllocationTracker);
    });
    allocationExportBtn.addEventListener('click', () => exportCSV('allocation', allocationSort.value));

    // ── Init ───────────────────────────────────────────────
    initToast();
    initAuth();
})();
