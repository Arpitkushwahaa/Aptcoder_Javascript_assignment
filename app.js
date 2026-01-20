// Main Application Logic
// Handles Blockly workspace, code generation, and execution

// Global variables
let workspace;
let outputResults = [];

// Initialize Blockly workspace when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeWorkspace();
    setupEventListeners();
});

/**
 * Initialize Blockly workspace with custom configuration
 */
function initializeWorkspace() {
    const blocklyDiv = document.getElementById('blocklyDiv');
    const toolbox = document.getElementById('toolbox');
    
    workspace = Blockly.inject(blocklyDiv, {
        toolbox: toolbox,
        grid: {
            spacing: 20,
            length: 3,
            colour: '#ccc',
            snap: true
        },
        zoom: {
            controls: true,
            wheel: true,
            startScale: 1.0,
            maxScale: 3,
            minScale: 0.3,
            scaleSpeed: 1.2
        },
        trashcan: true,
        scrollbars: true,
        sounds: true,
        theme: Blockly.Themes.Classic
    });

    // Add some starter blocks to help users get started
    addStarterBlocks();
}

/**
 * Add starter blocks to the workspace
 */
function addStarterBlocks() {
    // Create blocks programmatically
    const displayBlock = workspace.newBlock('display_result');
    displayBlock.setFieldValue('Total Sum', 'LABEL');
    displayBlock.moveBy(50, 50);
    
    const sumBlock = workspace.newBlock('calculate_sum');
    const arrayBlock = workspace.newBlock('create_array');
    arrayBlock.setFieldValue('10,20,30,40,50', 'ITEMS');
    
    // Connect blocks
    arrayBlock.outputConnection.connect(sumBlock.getInput('ARRAY').connection);
    sumBlock.outputConnection.connect(displayBlock.getInput('VALUE').connection);
    
    // Initialize and render
    displayBlock.initSvg();
    displayBlock.render();
    sumBlock.initSvg();
    sumBlock.render();
    arrayBlock.initSvg();
    arrayBlock.render();
}

/**
 * Setup event listeners for buttons
 */
function setupEventListeners() {
    const generateBtn = document.getElementById('generateBtn');
    const runBtn = document.getElementById('runBtn');
    const clearBtn = document.getElementById('clearBtn');

    generateBtn.addEventListener('click', generateCode);
    runBtn.addEventListener('click', runCode);
    clearBtn.addEventListener('click', clearWorkspace);
}

/**
 * Generate JavaScript code from blocks
 */
function generateCode() {
    try {
        // Generate code from workspace
        const code = Blockly.JavaScript.workspaceToCode(workspace);
        
        // Display generated code
        const codeOutput = document.getElementById('codeOutput');
        
        if (!code.trim()) {
            codeOutput.textContent = '// No blocks in workspace. Add some blocks to generate code!';
            showMessage('info', 'No blocks to generate code from. Please add some blocks first.');
            return;
        }
        
        codeOutput.textContent = code;
        showMessage('success', 'Code generated successfully! Click "Run" to execute.');
        
    } catch (error) {
        showError(`Code generation failed: ${error.message}`);
    }
}

/**
 * Execute the generated JavaScript code
 */
function runCode() {
    try {
        // Clear previous results
        outputResults = [];
        const resultsOutput = document.getElementById('resultsOutput');
        resultsOutput.innerHTML = '';
        
        // Get generated code
        const codeOutput = document.getElementById('codeOutput');
        const code = codeOutput.textContent;
        
        if (!code || code.startsWith('//')) {
            showError('No code to run. Please generate code first.');
            return;
        }
        
        // Execute the code in a safe context
        try {
            // Create a function to execute the code
            const executeCode = new Function('displayResult', 'displayChart', code);
            executeCode(displayResult, displayChart);
            
            // If no output was generated, show a message
            if (outputResults.length === 0 && resultsOutput.innerHTML === '') {
                showMessage('info', 'Code executed successfully but produced no output. Use display blocks to see results.');
            } else {
                showMessage('success', 'Code executed successfully!');
            }
            
        } catch (execError) {
            showError(`Execution error: ${execError.message}`);
        }
        
    } catch (error) {
        showError(`Runtime error: ${error.message}`);
    }
}

/**
 * Display a result with a label
 * @param {string} label - The label for the result
 * @param {*} value - The value to display
 */
function displayResult(label, value) {
    const resultsOutput = document.getElementById('resultsOutput');
    
    let displayValue;
    if (Array.isArray(value)) {
        displayValue = `[${value.join(', ')}]`;
    } else if (typeof value === 'object' && value !== null) {
        displayValue = JSON.stringify(value, null, 2);
    } else {
        displayValue = String(value);
    }
    
    const resultItem = document.createElement('div');
    resultItem.className = 'result-item';
    resultItem.innerHTML = `<strong>${escapeHtml(label)}:</strong> ${escapeHtml(displayValue)}`;
    
    resultsOutput.appendChild(resultItem);
    outputResults.push({ label, value });
}

/**
 * Display data as a bar chart
 * @param {string} title - The chart title
 * @param {Array} data - The data to display
 */
function displayChart(title, data) {
    const resultsOutput = document.getElementById('resultsOutput');
    
    if (!Array.isArray(data) || data.length === 0) {
        showError('Chart data must be a non-empty array');
        return;
    }
    
    // Find max value for scaling
    const numbers = data.map(item => {
        const num = typeof item === 'number' ? item : parseFloat(item);
        return isNaN(num) ? 0 : num;
    });
    const maxValue = Math.max(...numbers, 1);
    
    // Create chart container
    const chartContainer = document.createElement('div');
    chartContainer.className = 'chart-container';
    
    const chartTitle = document.createElement('h4');
    chartTitle.textContent = title;
    chartTitle.style.marginBottom = '1rem';
    chartTitle.style.color = '#5C81A6';
    chartContainer.appendChild(chartTitle);
    
    // Create bars
    data.forEach((value, index) => {
        const num = typeof value === 'number' ? value : parseFloat(value);
        const displayNum = isNaN(num) ? 0 : num;
        const percentage = (displayNum / maxValue) * 100;
        
        const barContainer = document.createElement('div');
        barContainer.className = 'chart-bar';
        
        const label = document.createElement('div');
        label.className = 'chart-label';
        label.textContent = `Item ${index + 1}:`;
        
        const barFill = document.createElement('div');
        barFill.className = 'chart-bar-fill';
        barFill.style.width = percentage + '%';
        barFill.textContent = displayNum.toFixed(2);
        
        barContainer.appendChild(label);
        barContainer.appendChild(barFill);
        chartContainer.appendChild(barContainer);
    });
    
    resultsOutput.appendChild(chartContainer);
}

/**
 * Clear the workspace
 */
function clearWorkspace() {
    if (confirm('Are you sure you want to clear the workspace? This cannot be undone.')) {
        workspace.clear();
        
        // Clear outputs
        document.getElementById('codeOutput').textContent = '';
        document.getElementById('resultsOutput').innerHTML = '';
        outputResults = [];
        
        showMessage('info', 'Workspace cleared. You can start fresh!');
    }
}

/**
 * Show an error message
 * @param {string} message - The error message to display
 */
function showError(message) {
    const resultsOutput = document.getElementById('resultsOutput');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error';
    errorDiv.innerHTML = `<strong>❌ Error:</strong> ${escapeHtml(message)}`;
    resultsOutput.appendChild(errorDiv);
}

/**
 * Show a message to the user
 * @param {string} type - The message type (success, error, info)
 * @param {string} message - The message to display
 */
function showMessage(type, message) {
    const resultsOutput = document.getElementById('resultsOutput');
    
    const messageDiv = document.createElement('div');
    messageDiv.className = 'result-item';
    
    let icon = 'ℹ️';
    let color = '#5C81A6';
    
    if (type === 'success') {
        icon = '✅';
        color = '#28a745';
    } else if (type === 'error') {
        icon = '❌';
        color = '#dc3545';
    }
    
    messageDiv.innerHTML = `<span style="color: ${color}"><strong>${icon} ${escapeHtml(message)}</strong></span>`;
    resultsOutput.appendChild(messageDiv);
}

/**
 * Escape HTML to prevent XSS
 * @param {string} text - The text to escape
 * @returns {string} The escaped text
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

/**
 * Handle window resize
 */
window.addEventListener('resize', function() {
    Blockly.svgResize(workspace);
});

/**
 * Save workspace to localStorage periodically
 */
setInterval(function() {
    if (workspace) {
        const state = Blockly.serialization.workspaces.save(workspace);
        localStorage.setItem('blocklyWorkspace', JSON.stringify(state));
    }
}, 5000);

/**
 * Load workspace from localStorage on startup
 */
window.addEventListener('load', function() {
    const savedWorkspace = localStorage.getItem('blocklyWorkspace');
    if (savedWorkspace && workspace) {
        try {
            const state = JSON.parse(savedWorkspace);
            // Only load if it's the new format (has blocks property)
            if (state && state.blocks) {
                workspace.clear();
                Blockly.serialization.workspaces.load(state, workspace);
            }
        } catch (e) {
            console.log('No valid saved workspace, starting fresh');
            // Clear old format data
            localStorage.removeItem('blocklyWorkspace');
        }
    }
});
