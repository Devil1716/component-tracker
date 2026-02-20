(() => {
    'use strict';

    // ── Full Component Catalog (105 items) ─────────────────
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

    const ITEM_MAP = {};
    CATALOG.forEach(c => c.items.forEach(it => { ITEM_MAP[it.id] = it; }));

    // ── Storage helpers ────────────────────────────────────
    const KEY = 'comp_tracker_v5';
    function load() {
        try {
            const d = JSON.parse(localStorage.getItem(KEY)) || { teams: {}, order: [], meta: {}, history: [], dateCounter: 0 };
            if (!d.meta) d.meta = {};
            if (!d.history) d.history = []; // Initialize history if missing
            if (typeof d.dateCounter === 'undefined') d.dateCounter = 0;

            // Migration: assign IDs to existing teams
            d.order.forEach(name => {
                if (!d.meta[name]) {
                    d.dateCounter++;
                    d.meta[name] = { id: generateId(d.dateCounter) };
                }
            });

            // Migration: if history empty but teams exist, populate history with existing takes
            if (d.history.length === 0 && d.order.length > 0) {
                d.order.forEach(team => {
                    (d.teams[team] || []).forEach(c => {
                        d.history.push({
                            type: 'take',
                            uid: c.uid || Date.now().toString(36),
                            itemId: c.itemId,
                            qty: c.qty,
                            date: c.date,
                            time: c.time,
                            team: team
                        });
                    });
                });
            }
            return d;
        }
        catch { return { teams: {}, order: [], meta: {}, history: [], dateCounter: 0 }; }
    }
    function save(d) { localStorage.setItem(KEY, JSON.stringify(d)); }

    function generateId(num) {
        return 'IL' + String(num).padStart(3, '0');
    }

    let data = load();
    let activeTeam = null;
    let html5QrCode;

    // ── Date helpers ───────────────────────────────────────
    function toDateKey(d) { return d.toISOString().slice(0, 10); }
    function formatDate(key) {
        const d = new Date(key + 'T00:00:00');
        return d.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    }
    function todayKey() { return toDateKey(new Date()); }

    // ── DOM refs ───────────────────────────────────────────
    const $ = s => document.querySelector(s);
    const teamNameInput = $('#teamNameInput'), addTeamBtn = $('#addTeamBtn'), teamListEl = $('#teamList');
    const emptyState = $('#emptyState'), teamView = $('#teamView'), teamTitle = $('#teamTitle');
    const deleteTeamBtn = $('#deleteTeamBtn'), componentSelect = $('#componentSelect');
    const quantityInput = $('#quantityInput'), logComponentBtn = $('#logComponentBtn');
    const inventoryBody = $('#inventoryBody'), noItemsMsg = $('#noItemsMsg');
    const exportBtn = $('#exportBtn'), summaryBtn = $('#summaryBtn'), summaryModal = $('#summaryModal');
    const summaryContent = $('#summaryContent'), closeSummary = $('#closeSummary');
    const stockBtn = $('#stockBtn'), stockModal = $('#stockModal'), stockContent = $('#stockContent');
    const closeStock = $('#closeStock'), stockSearch = $('#stockSearch'), stockHint = $('#stockHint');
    const dailyBtn = $('#dailyBtn'), dailyModal = $('#dailyModal'), dailyContent = $('#dailyContent');
    const closeDaily = $('#closeDaily'), prevDay = $('#prevDay'), nextDay = $('#nextDay');
    const currentDateEl = $('#currentDate');

    // Scanner refs
    const scanBtn = $('#scanBtn'), scannerModal = $('#scannerModal'), closeScanner = $('#closeScanner');

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

    // ── Populate dropdown ──────────────────────────────────
    function populateSelect() {
        componentSelect.innerHTML = '';
        CATALOG.forEach(cat => {
            const og = document.createElement('optgroup');
            og.label = cat.cat;
            cat.items.forEach(it => {
                const o = document.createElement('option');
                o.value = it.id;
                const r = getRemaining(it.id);
                o.textContent = `${it.name}  [${r} left]`;
                if (r <= 0) o.disabled = true;
                og.appendChild(o);
            });
            componentSelect.appendChild(og);
        });
        updateStockHint();
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
        const id = parseInt(componentSelect.value);
        if (!id || !ITEM_MAP[id]) { stockHint.innerHTML = ''; return; }
        const r = getRemaining(id), total = ITEM_MAP[id].stock;
        let cls = 'ok';
        if (r <= 0) cls = 'out';
        else if (r <= total * 0.2) cls = 'low';
        stockHint.innerHTML = `Stock: <span class="${cls}">${r}</span> / ${total} remaining`;
    }

    // ── Render sidebar ─────────────────────────────────────
    function renderTeams() {
        teamListEl.innerHTML = '';
        data.order.forEach(name => {
            const d = document.createElement('div');
            d.className = 'team-item' + (name === activeTeam ? ' active' : '');
            const items = data.teams[name] || [];
            const totalQty = items.reduce((s, c) => s + c.qty, 0);
            const meta = data.meta[name] || { id: '???' };

            d.innerHTML = `<span class="team-id">${meta.id}</span>
      <span style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(name)}</span>`
                + (totalQty ? `<span class="badge">${totalQty}</span>` : '');
            d.addEventListener('click', () => selectTeam(name));
            teamListEl.appendChild(d);
        });
    }

    function selectTeam(name) {
        activeTeam = name;
        emptyState.classList.add('hidden');
        teamView.classList.remove('hidden');
        teamView.style.animation = 'none';
        void teamView.offsetWidth;
        teamView.style.animation = '';

        const meta = data.meta[name] || { id: '???' };
        teamTitle.innerHTML = `<span style="font-size:0.5em;opacity:0.6;margin-right:12px;vertical-align:middle;border:1px solid #ccc;padding:2px 6px;border-radius:4px">${meta.id}</span>${esc(name)}`;

        renderTeams();
        renderInventory();
        populateSelect();
    }

    // ── Add / delete team ──────────────────────────────────
    function addTeam() {
        const name = teamNameInput.value.trim();
        if (!name) return toast('Enter a team name', 'danger');
        if (data.teams[name]) return toast('Team already exists', 'danger');

        data.teams[name] = [];
        data.order.push(name);
        data.dateCounter++;
        data.meta[name] = { id: generateId(data.dateCounter) };

        save(data);
        teamNameInput.value = '';
        renderTeams();
        selectTeam(name);
        toast(`Team "${name}" added (${data.meta[name].id})`);
    }

    function deleteTeam() {
        if (!activeTeam) return;
        if (!confirm(`Delete team "${activeTeam}" and all its components?`)) return;

        // Clean up history? Maybe not, keep history intact?
        // Let's keep history for logs, but remove from order.
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

    // ── Log component (TAKE) ───────────────────────────────
    function logComponent() {
        if (!activeTeam) return;
        const itemId = parseInt(componentSelect.value);
        if (!itemId || !ITEM_MAP[itemId]) return toast('Select a component', 'danger');
        const qty = parseInt(quantityInput.value, 10);
        if (!qty || qty < 1) return toast('Qty must be at least 1', 'danger');
        const remaining = getRemaining(itemId);
        if (qty > remaining) return toast(`Only ${remaining} left in stock!`, 'danger');

        const now = new Date();
        const dateKey = toDateKey(now);
        const uid = Date.now().toString(36) + Math.random().toString(36).slice(2, 5);

        // Add to Current Inventory
        const existing = (data.teams[activeTeam] || []).find(
            c => c.itemId === itemId && c.date === dateKey
        );
        if (existing) {
            existing.qty += qty;
            existing.time = now.toISOString(); // update last time
        } else {
            data.teams[activeTeam].push({
                uid,
                itemId,
                qty,
                date: dateKey,
                time: now.toISOString()
            });
        }

        // Add to History Log
        data.history.push({
            type: 'take',
            uid,
            itemId,
            qty,
            date: dateKey,
            time: now.toISOString(),
            team: activeTeam
        });

        save(data);
        renderInventory();
        populateSelect();
        quantityInput.value = 1;
        toast(`${qty}\u00D7 ${ITEM_MAP[itemId].name} logged`);
    }

    // ── Log component (RETURN) ─────────────────────────────
    function returnItem(uid, currentQty) {
        if (!activeTeam) return;
        // Prompt for qty
        // For simplicity, return ALL or Ask?
        // User asked for "return component".
        let qtyToReturn = prompt(`Return how many? (Max: ${currentQty})`, currentQty);
        if (qtyToReturn === null) return;
        qtyToReturn = parseInt(qtyToReturn);
        if (isNaN(qtyToReturn) || qtyToReturn <= 0 || qtyToReturn > currentQty) {
            return toast('Invalid quantity', 'danger');
        }

        // Update Inventory
        const teamItems = data.teams[activeTeam] || [];
        const itemIndex = teamItems.findIndex(c => c.uid === uid);
        if (itemIndex === -1) return;
        const item = teamItems[itemIndex];

        if (qtyToReturn >= item.qty) {
            // Remove entire entry
            data.teams[activeTeam].splice(itemIndex, 1);
        } else {
            // Reduce qty
            item.qty -= qtyToReturn;
        }

        // Add to History Log
        const now = new Date();
        data.history.push({
            type: 'return',
            uid: Date.now().toString(36), // New UID for return event
            itemId: item.itemId,
            qty: qtyToReturn,
            date: toDateKey(now),
            time: now.toISOString(),
            team: activeTeam
        });

        save(data);
        renderInventory();
        populateSelect();
        toast(`Returned ${qtyToReturn} item(s)`);
    }

    // ── Qty Adjust (Quick Fix) & Remove ────────────────────
    function changeQty(uid, delta) {
        if (!activeTeam) return;
        const item = (data.teams[activeTeam] || []).find(c => c.uid === uid);
        if (!item) return;

        if (delta > 0) {
            const r = getRemaining(item.itemId);
            if (r <= 0) return toast('Out of stock!', 'danger');
            item.qty++;
        } else {
            // Treat -1 as a small return? Or just correction?
            // Let's make it correction only. Real returns should use Return Button.
            if (item.qty > 1) item.qty--;
            else return; // Don't remove via minus button
        }

        save(data);
        renderInventory();
        populateSelect();
    }

    // ── Render inventory ──────────────────────────────────
    function renderInventory() {
        if (!activeTeam) return;
        const items = data.teams[activeTeam] || [];
        inventoryBody.innerHTML = '';
        noItemsMsg.classList.toggle('hidden', items.length > 0);

        // Group items by date
        const byDate = {};
        items.forEach(item => {
            const dk = item.date || 'Unknown';
            if (!byDate[dk]) byDate[dk] = [];
            byDate[dk].push(item);
        });

        // Sort dates descending (newest first)
        const dates = Object.keys(byDate).sort((a, b) => b.localeCompare(a));
        let idx = 0;

        dates.forEach(dk => {
            const dateRow = document.createElement('tr');
            dateRow.innerHTML = `<td colspan="5" style="padding:14px 14px 6px;border:none;">
      <span class="date-stamp">\uD83D\uDCC5 ${formatDate(dk)}</span>
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
        <td><div class="qty-cell">
          <!-- <button class="qty-btn" data-uid="${item.uid}" data-d="-1">\u2212</button> -->
          <span class="qty-val">${item.qty}</span>
          <!-- <button class="qty-btn" data-uid="${item.uid}" data-d="1">＋</button> -->
        </div></td>
        <td style="color:var(--text-dim)">${ts}</td>
        <td>
          <button class="return-btn" data-uid="${item.uid}" data-qty="${item.qty}">\u21A9 Return</button>
        </td>`;
                inventoryBody.appendChild(tr);
            });
        });
    }

    // ── Delegate clicks in inventory ───────────────────────
    inventoryBody.addEventListener('click', e => {
        const qb = e.target.closest('.qty-btn');
        // if(qb) return changeQty(qb.dataset.uid, parseInt(qb.dataset.d)); // Disable direct edit, force return flow
        const rb = e.target.closest('.return-btn');
        if (rb) return returnItem(rb.dataset.uid, parseInt(rb.dataset.qty));
    });

    componentSelect.addEventListener('change', updateStockHint);

    // ── Export CSV (Full History) ──────────────────────────
    function exportCSV() {
        if (!data.history.length) return toast('No history', 'info');
        let csv = 'Type,Team ID,Team Name,Component,Qty,Date,Time\n';

        // Sort history by date desc
        const sorted = [...data.history].sort((a, b) => b.time.localeCompare(a.time));

        sorted.forEach(h => {
            const meta = data.meta[h.team] || { id: '' };
            const it = ITEM_MAP[h.itemId];
            const d = new Date(h.time);
            const type = h.type === 'return' ? 'RETURNED' : 'TAKEN';
            csv += `"${type}","${meta.id}","${h.team}","${it ? it.name : '?'}",${h.qty},"${h.date}","${d.toLocaleTimeString()}"\n`;
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

    // ── Summary modal ──────────────────────────────────────
    function showSummary() {
        if (!data.order.length) return toast('No teams', 'info');
        let total = 0, html = '';
        data.order.forEach(team => {
            const meta = data.meta[team] || { id: '' };
            const items = data.teams[team] || [];
            if (!items.length) {
                html += `<div class="summary-team"><h4><span class="dot"></span>[${meta.id}] ${esc(team)}</h4>
        <p style="color:var(--text-dim);font-size:.85rem">No components currently checked out.</p></div>`;
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
            html += `<div class="summary-team"><h4><span class="dot"></span>[${meta.id}] ${esc(team)} — <span style="color:var(--accent3)">${tq} items</span></h4>
      <table><thead><tr><th>Component</th><th>Qty</th></tr></thead><tbody>${rows}</tbody></table></div>`;
        });
        html += `<div class="summary-total">Current Total In Circulation: <span>${total} components</span></div>`;
        summaryContent.innerHTML = html;
        summaryModal.classList.remove('hidden');
    }

    // ── Stock modal ────────────────────────────────────────
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

    // ── Daily Log modal (History View) ─────────────────────
    let dailyDate = todayKey();

    function showDaily() {
        currentDateEl.textContent = formatDate(dailyDate);
        let html = '';

        // Filter history for this date
        const events = data.history.filter(h => h.date === dailyDate);

        // Group by Team
        // Actually, chronologically is better for a "Log".
        // Or Team-wise. Let's do Team-wise for consistency with other views.

        // Get all teams involved today
        const teamsToday = [...new Set(events.map(e => e.team))];

        if (!teamsToday.length) {
            html = '<p class="daily-none">No activity on this date.</p>';
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

                html += `<div class="daily-team"><h4><span class="dot"></span>[${meta.id}] ${esc(team)}</h4>
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

    // ── QR Scanner ─────────────────────────────────────────
    function onScanSuccess(decodedText, decodedResult) {
        // Try to parse ID. Expects "101" or "ID:101" or JSON.
        // Simplest: match digits.
        const match = decodedText.match(/(\d+)/);
        if (match) {
            const id = parseInt(match[1]);
            if (ITEM_MAP[id]) {
                componentSelect.value = id;
                updateStockHint();
                // Flash UI
                const row = $('.component-entry');
                row.style.background = '#dcfce7';
                setTimeout(() => row.style.background = '#fff', 300);

                // Close modal
                closeScannerModal();
                toast(`Scanned: ${ITEM_MAP[id].name}`);
            } else {
                toast(`Unknown Item ID: ${id}`, 'danger');
            }
        } else {
            toast(`Could not read ID from QR`, 'danger');
        }
    }

    function startScanner() {
        scannerModal.classList.remove('hidden');
        if (!html5QrCode) {
            html5QrCode = new Html5Qrcode("reader");
        }
        html5QrCode.start(
            { facingMode: "environment" },
            { fps: 10, qrbox: { width: 250, height: 250 } },
            onScanSuccess,
            (errorMessage) => { /* ignore parse errors */ }
        ).catch(err => {
            console.error(err);
            toast('Camera error: ' + err, 'danger');
        });
    }

    function closeScannerModal() {
        scannerModal.classList.add('hidden');
        if (html5QrCode && html5QrCode.isScanning) {
            html5QrCode.stop().then(() => {
                // stopped
            }).catch(err => console.error(err));
        }
    }

    // ── Utils ──────────────────────────────────────────────
    function esc(s) {
        return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    // ── Event Bindings ─────────────────────────────────────
    addTeamBtn.addEventListener('click', addTeam);
    teamNameInput.addEventListener('keydown', e => { if (e.key === 'Enter') addTeam(); });
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

    // Scanner
    if (scanBtn) scanBtn.addEventListener('click', startScanner);
    if (closeScanner) closeScanner.addEventListener('click', closeScannerModal);
    if (scannerModal) scannerModal.addEventListener('click', e => { if (e.target === scannerModal) closeScannerModal(); });


    // ── Init ───────────────────────────────────────────────
    initToast();
    renderTeams();
    populateSelect();
})();
