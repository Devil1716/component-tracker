/**
 * Amity Component Tracker - Exporter Module
 * 
 * This module isolates all CSV exporting, row building, and sorting concerns.
 * It provides a modular, clean interface which makes the codebase highly maintainable.
 * 
 * To revert back to the inline implementation in app.js:
 * 1. Remove the `<script src="exporter.js"></script>` reference from index.html.
 * 2. Restore the original inline definitions of downloadCSV, allocationRows, sortRows,
 *    buildExportRows, and exportCSV in app.js (see local git history or comments in app.js).
 */

(() => {
    'use strict';

    /**
     * Helper to safely format a cell value for standard CSV compatibility.
     * Escapes double quotes and wraps the value in quotes.
     * 
     * @param {*} value - The raw cell value
     * @returns {string} - CSV-compliant formatted cell string
     */
    const csvCell = value => `"${String(value ?? '').replace(/"/g, '""')}"`;

    /**
     * Triggers a browser download of a CSV file constructed from headers and rows.
     * 
     * @param {string} filename - The name of the file to download (e.g. 'inventory.csv')
     * @param {Array<string>} headers - List of header names (keys in the row objects)
     * @param {Array<Object>} rows - Array of row objects to serialize
     */
    function downloadCSV(filename, headers, rows) {
        const csv = [
            headers.map(csvCell).join(','),
            ...rows.map(row => headers.map(header => csvCell(row[header])).join(','))
        ].join('\n') + '\n';
        
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const anchor = document.createElement('a');
        
        anchor.href = url;
        anchor.download = filename;
        anchor.click();
        
        URL.revokeObjectURL(url);
    }

    /**
     * Sorts an array of row objects based on a sortKey mapping.
     * Supporting numeric quantity sorting and locale-based string comparison for dates and names.
     * 
     * @param {Array<Object>} rows - The rows to be sorted
     * @param {string} sortKey - The sort criteria ('team', 'component', 'quantity', 'status', 'date')
     * @returns {Array<Object>} - The sorted array of rows
     */
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
            if (key === 'Quantity') {
                return Number(b[key] || 0) - Number(a[key] || 0);
            }
            const aValue = a[key] ?? a.Date ?? '';
            const bValue = b[key] ?? b.Date ?? '';
            
            if (key === 'Assigned Date') {
                return String(bValue).localeCompare(String(aValue));
            }
            return String(aValue).localeCompare(String(bValue));
        });
    }

    /**
     * Builds the raw component allocation rows by combining checkouts and return histories.
     * 
     * @param {Object} data - The core application data object
     * @param {Object} ITEM_MAP - The catalog lookup map
     * @param {Function} normalizeMeta - Metadata normalization function from app.js
     * @param {Function} normalizeMembers - Members list normalization function from app.js
     * @param {boolean} includeReturned - Whether to merge returned checkouts from history
     * @returns {Array<Object>} - Raw allocation records
     */
    function buildAllocationRows(data, ITEM_MAP, normalizeMeta, normalizeMembers, includeReturned = false) {
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

    /**
     * Builds finalized columns and rows for export based on mode and sort rules.
     * 
     * @param {string} mode - Export mode ('inventory', 'team', 'pending', 'allocation')
     * @param {string} sortKey - The sort criteria ('team', 'component', etc.)
     * @param {Object} context - Object providing access to app state variables and utility functions
     * @returns {Object} - An object containing { filename, headers, rows }
     */
    function buildExportRows(mode, sortKey, context) {
        const { data, CATALOG, ITEM_MAP, normalizeMeta, normalizeMembers, getTotalUsed, getRemaining } = context;

        if (mode === 'inventory') {
            const rows = CATALOG.flatMap(cat => cat.items.map(item => ({
                Category: cat.cat,
                Component: item.name,
                'Total Stock': item.stock,
                Allocated: getTotalUsed(item.id),
                Available: getRemaining(item.id),
                Status: getRemaining(item.id) <= 0 ? 'Out of stock' : 'Available'
            })));
            return {
                filename: 'full_inventory.csv',
                headers: ['Category', 'Component', 'Total Stock', 'Allocated', 'Available', 'Status'],
                rows
            };
        }
        
        if (mode === 'team') {
            const rows = buildAllocationRows(data, ITEM_MAP, normalizeMeta, normalizeMembers, false).map(row => ({
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
            return {
                filename: 'team_wise_components.csv',
                headers: ['Team ID', 'Team', 'Project Name', 'Component', 'Member', 'Email', 'Quantity', 'Date', 'Status'],
                rows: sortRows(rows, sortKey)
            };
        }
        
        if (mode === 'pending') {
            const rows = buildAllocationRows(data, ITEM_MAP, normalizeMeta, normalizeMembers, false);
            return {
                filename: 'pending_components_report.csv',
                headers: ['Team ID', 'Team', 'Project Name', 'Component', 'Member', 'Email', 'Quantity', 'Assigned Date', 'Status', 'Notes'],
                rows: sortRows(rows, sortKey)
            };
        }
        
        // Default / Full Allocation Report
        const rows = buildAllocationRows(data, ITEM_MAP, normalizeMeta, normalizeMembers, true);
        return {
            filename: 'allocation_report.csv',
            headers: ['Team ID', 'Team', 'Project Name', 'Component', 'Member', 'Email', 'Quantity', 'Assigned Date', 'Status', 'Notes'],
            rows: sortRows(rows, sortKey)
        };
    }

    // Expose Exporter globally
    window.Exporter = {
        downloadCSV,
        sortRows,
        buildAllocationRows,
        buildExportRows
    };
})();
