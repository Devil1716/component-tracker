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
    const KEY = 'comp_tracker_v3';
    function load() {
        try { return JSON.parse(localStorage.getItem(KEY)) || { teams: {}, order: [] }; }
        catch { return { teams: {}, order: [] }; }
    }
    function save(d) { localStorage.setItem(KEY, JSON.stringify(d)); }

    let data = load();
    let activeTeam = null;

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
            d.innerHTML = `<span>${esc(name)}</span>`
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
        teamTitle.textContent = name;
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
        save(data);
        teamNameInput.value = '';
        renderTeams();
        selectTeam(name);
        toast(`Team "${name}" added`);
    }

    function deleteTeam() {
        if (!activeTeam) return;
        if (!confirm(`Delete team "${activeTeam}" and all its components?`)) return;
        delete data.teams[activeTeam];
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
        const itemId = parseInt(componentSelect.value);
        if (!itemId || !ITEM_MAP[itemId]) return toast('Select a component', 'danger');
        const qty = parseInt(quantityInput.value, 10);
        if (!qty || qty < 1) return toast('Qty must be at least 1', 'danger');
        const remaining = getRemaining(itemId);
        if (qty > remaining) return toast(`Only ${remaining} left in stock!`, 'danger');

        const now = new Date();
        const dateKey = toDateKey(now);
        const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

        // Check if same item was already logged TODAY — merge
        const existing = (data.teams[activeTeam] || []).find(
            c => c.itemId === itemId && c.date === dateKey
        );
        if (existing) {
            existing.qty += qty;
            existing.time = now.toISOString();
        } else {
            data.teams[activeTeam].push({
                uid: Date.now().toString(36) + Math.random().toString(36).slice(2, 5),
                itemId,
                qty,
                date: dateKey,
                time: now.toISOString()
            });
        }

        save(data);
        renderInventory();
        populateSelect();
        quantityInput.value = 1;
        toast(`${qty}\u00D7 ${ITEM_MAP[itemId].name} logged`);
    }

    // ── Qty change / remove ────────────────────────────────
    function changeQty(uid, delta) {
        if (!activeTeam) return;
        const item = (data.teams[activeTeam] || []).find(c => c.uid === uid);
        if (!item) return;
        if (delta > 0) {
            const r = getRemaining(item.itemId);
            if (r <= 0) return toast('Out of stock!', 'danger');
        }
        item.qty = Math.max(1, item.qty + delta);
        save(data);
        renderInventory();
        populateSelect();
    }

    function removeItem(uid) {
        if (!activeTeam) return;
        data.teams[activeTeam] = data.teams[activeTeam].filter(c => c.uid !== uid);
        save(data);
        renderInventory();
        populateSelect();
        toast('Removed', 'info');
    }

    // ── Render inventory (grouped by date) ─────────────────
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
            // Date header row
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
                const ts = t.toLocaleString('en-US', {
                    hour: '2-digit', minute: '2-digit', hour12: true
                });

                tr.innerHTML = `
        <td>${idx}</td>
        <td>${esc(name)}</td>
        <td><div class="qty-cell">
          <button class="qty-btn" data-uid="${item.uid}" data-d="-1">\u2212</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" data-uid="${item.uid}" data-d="1">＋</button>
        </div></td>
        <td style="color:var(--text-dim)">${ts}</td>
        <td><button class="remove-btn" data-uid="${item.uid}">Remove</button></td>`;
                inventoryBody.appendChild(tr);
            });
        });
    }

    // ── Delegate clicks in inventory ───────────────────────
    inventoryBody.addEventListener('click', e => {
        const qb = e.target.closest('.qty-btn');
        if (qb) return changeQty(qb.dataset.uid, parseInt(qb.dataset.d));
        const rb = e.target.closest('.remove-btn');
        if (rb) return removeItem(rb.dataset.uid);
    });

    componentSelect.addEventListener('change', updateStockHint);

    // ── Export CSV ──────────────────────────────────────────
    function exportCSV() {
        if (!data.order.length) return toast('No data', 'info');
        let csv = 'Team,Sl.No,Component,Qty Taken,Date,Time,Stock Total\n';
        data.order.forEach(team => {
            (data.teams[team] || []).forEach(c => {
                const it = ITEM_MAP[c.itemId];
                const d = new Date(c.time);
                csv += `"${team}",${c.itemId},"${it ? it.name : '?'}",${c.qty},"${c.date || ''}","${d.toLocaleTimeString()}",${it ? it.stock : '?'}\n`;
            });
        });
        const b = new Blob([csv], { type: 'text/csv' });
        const u = URL.createObjectURL(b);
        const a = document.createElement('a');
        a.href = u;
        a.download = 'component_log.csv';
        a.click();
        URL.revokeObjectURL(u);
        toast('CSV downloaded');
    }

    // ── Summary modal ──────────────────────────────────────
    function showSummary() {
        if (!data.order.length) return toast('No teams', 'info');
        let total = 0, html = '';
        data.order.forEach(team => {
            const items = data.teams[team] || [];
            if (!items.length) {
                html += `<div class="summary-team"><h4><span class="dot"></span>${esc(team)}</h4>
        <p style="color:var(--text-dim);font-size:.85rem">No components.</p></div>`;
                return;
            }
            // Aggregate by component (across dates)
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
            html += `<div class="summary-team"><h4><span class="dot"></span>${esc(team)} — <span style="color:var(--accent3)">${tq} items</span></h4>
      <table><thead><tr><th>Component</th><th>Qty</th></tr></thead><tbody>${rows}</tbody></table></div>`;
        });
        html += `<div class="summary-total">Grand Total: <span>${total} components</span> across ${data.order.length} team${data.order.length > 1 ? 's' : ''}</div>`;
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

    // ── Daily Log modal ────────────────────────────────────
    let dailyDate = todayKey();

    function showDaily() {
        currentDateEl.textContent = formatDate(dailyDate);
        let html = '';
        let dayTotal = 0;
        let hasEntries = false;

        data.order.forEach(team => {
            const items = (data.teams[team] || []).filter(c => c.date === dailyDate);
            if (!items.length) return;
            hasEntries = true;
            let rows = '';
            let teamQty = 0;
            items.forEach(c => {
                const it = ITEM_MAP[c.itemId];
                const t = new Date(c.time);
                const ts = t.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
                teamQty += c.qty;
                rows += `<tr><td>${esc(it ? it.name : '?')}</td><td style="font-weight:600">${c.qty}</td><td style="color:var(--text-dim)">${ts}</td></tr>`;
            });
            dayTotal += teamQty;
            html += `<div class="daily-team"><h4><span class="dot"></span>${esc(team)} — <span style="color:var(--accent3)">${teamQty} items</span></h4>
      <table><thead><tr><th>Component</th><th>Qty</th><th>Time</th></tr></thead><tbody>${rows}</tbody></table></div>`;
        });

        if (!hasEntries) {
            html = '<p class="daily-none">No components logged on this date.</p>';
        } else {
            html += `<div class="summary-total">Day Total: <span>${dayTotal} components</span></div>`;
        }

        dailyContent.innerHTML = html;
    }

    function shiftDay(delta) {
        const d = new Date(dailyDate + 'T00:00:00');
        d.setDate(d.getDate() + delta);
        dailyDate = toDateKey(d);
        showDaily();
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

    // ── Init ───────────────────────────────────────────────
    initToast();
    renderTeams();
    populateSelect();
})();
