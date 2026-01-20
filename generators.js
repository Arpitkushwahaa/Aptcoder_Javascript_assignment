// JavaScript Code Generators for Custom Blocks
// This file generates executable JavaScript code from the custom blocks

// Create JavaScript generator instance
const javascriptGenerator = Blockly.JavaScript;

// ============================================
// DATA CREATION GENERATORS
// ============================================

// Create Array Generator
javascriptGenerator.forBlock['create_array'] = function(block) {
    const items = block.getFieldValue('ITEMS');
    
    // Validate and parse the input
    const code = `(function() {
        try {
            const input = "${items}";
            const arr = input.split(',').map(item => {
                const trimmed = item.trim();
                const num = parseFloat(trimmed);
                return isNaN(num) ? trimmed : num;
            });
            return arr;
        } catch(e) {
            throw new Error('Invalid array format');
        }
    })()`;
    
    return [code, javascriptGenerator.ORDER_FUNCTION_CALL];
};

// Create Number Generator
javascriptGenerator.forBlock['create_number'] = function(block) {
    const number = block.getFieldValue('NUM');
    const code = parseFloat(number);
    return [code, javascriptGenerator.ORDER_ATOMIC];
};

// Create Text Generator
javascriptGenerator.forBlock['create_text'] = function(block) {
    const text = block.getFieldValue('TEXT');
    const code = `"${text}"`;
    return [code, javascriptGenerator.ORDER_ATOMIC];
};

// ============================================
// ARRAY OPERATION GENERATORS
// ============================================

// Add Item Generator
javascriptGenerator.forBlock['add_item'] = function(block) {
    const array = javascriptGenerator.valueToCode(block, 'ARRAY', javascriptGenerator.ORDER_ATOMIC) || '[]';
    const item = javascriptGenerator.valueToCode(block, 'ITEM', javascriptGenerator.ORDER_ATOMIC) || '0';
    
    const code = `(function() {
        const arr = Array.isArray(${array}) ? [...${array}] : [];
        arr.push(${item});
        return arr;
    })()`;
    
    return [code, javascriptGenerator.ORDER_FUNCTION_CALL];
};

// Filter Array Generator
javascriptGenerator.forBlock['filter_array'] = function(block) {
    const array = javascriptGenerator.valueToCode(block, 'ARRAY', javascriptGenerator.ORDER_ATOMIC) || '[]';
    const operator = block.getFieldValue('OPERATOR');
    const value = javascriptGenerator.valueToCode(block, 'VALUE', javascriptGenerator.ORDER_ATOMIC) || '0';
    
    const code = `(function() {
        const arr = Array.isArray(${array}) ? ${array} : [];
        return arr.filter(item => {
            const num = typeof item === 'number' ? item : parseFloat(item);
            return !isNaN(num) && num ${operator} ${value};
        });
    })()`;
    
    return [code, javascriptGenerator.ORDER_FUNCTION_CALL];
};

// Map Array Generator
javascriptGenerator.forBlock['map_array'] = function(block) {
    const array = javascriptGenerator.valueToCode(block, 'ARRAY', javascriptGenerator.ORDER_ATOMIC) || '[]';
    const operation = block.getFieldValue('OPERATION');
    const value = javascriptGenerator.valueToCode(block, 'VALUE', javascriptGenerator.ORDER_ATOMIC) || '1';
    
    let mapFunc;
    if (operation === 'sqrt') {
        mapFunc = `item => Math.sqrt(item)`;
    } else if (operation === '**2') {
        mapFunc = `item => item * item`;
    } else {
        mapFunc = `item => item ${operation} ${value}`;
    }
    
    const code = `(function() {
        const arr = Array.isArray(${array}) ? ${array} : [];
        return arr.map(item => {
            const num = typeof item === 'number' ? item : parseFloat(item);
            if (isNaN(num)) return item;
            return (${mapFunc})(num);
        });
    })()`;
    
    return [code, javascriptGenerator.ORDER_FUNCTION_CALL];
};

// Sort Array Generator
javascriptGenerator.forBlock['sort_array'] = function(block) {
    const array = javascriptGenerator.valueToCode(block, 'ARRAY', javascriptGenerator.ORDER_ATOMIC) || '[]';
    const order = block.getFieldValue('ORDER');
    
    const sortFunc = order === 'asc' ? '(a, b) => a - b' : '(a, b) => b - a';
    
    const code = `(function() {
        const arr = Array.isArray(${array}) ? [...${array}] : [];
        return arr.sort(${sortFunc});
    })()`;
    
    return [code, javascriptGenerator.ORDER_FUNCTION_CALL];
};

// ============================================
// CALCULATION GENERATORS
// ============================================

// Calculate Sum Generator
javascriptGenerator.forBlock['calculate_sum'] = function(block) {
    const array = javascriptGenerator.valueToCode(block, 'ARRAY', javascriptGenerator.ORDER_ATOMIC) || '[]';
    
    const code = `(function() {
        const arr = Array.isArray(${array}) ? ${array} : [];
        return arr.reduce((sum, item) => {
            const num = typeof item === 'number' ? item : parseFloat(item);
            return sum + (isNaN(num) ? 0 : num);
        }, 0);
    })()`;
    
    return [code, javascriptGenerator.ORDER_FUNCTION_CALL];
};

// Calculate Average Generator
javascriptGenerator.forBlock['calculate_average'] = function(block) {
    const array = javascriptGenerator.valueToCode(block, 'ARRAY', javascriptGenerator.ORDER_ATOMIC) || '[]';
    
    const code = `(function() {
        const arr = Array.isArray(${array}) ? ${array} : [];
        const numbers = arr.filter(item => {
            const num = typeof item === 'number' ? item : parseFloat(item);
            return !isNaN(num);
        });
        if (numbers.length === 0) return 0;
        const sum = numbers.reduce((acc, item) => {
            const num = typeof item === 'number' ? item : parseFloat(item);
            return acc + num;
        }, 0);
        return sum / numbers.length;
    })()`;
    
    return [code, javascriptGenerator.ORDER_FUNCTION_CALL];
};

// Find Max Generator
javascriptGenerator.forBlock['find_max'] = function(block) {
    const array = javascriptGenerator.valueToCode(block, 'ARRAY', javascriptGenerator.ORDER_ATOMIC) || '[]';
    
    const code = `(function() {
        const arr = Array.isArray(${array}) ? ${array} : [];
        const numbers = arr.map(item => {
            const num = typeof item === 'number' ? item : parseFloat(item);
            return isNaN(num) ? -Infinity : num;
        });
        return numbers.length > 0 ? Math.max(...numbers) : 0;
    })()`;
    
    return [code, javascriptGenerator.ORDER_FUNCTION_CALL];
};

// ============================================
// OUTPUT GENERATORS
// ============================================

// Display Result Generator
javascriptGenerator.forBlock['display_result'] = function(block) {
    const value = javascriptGenerator.valueToCode(block, 'VALUE', javascriptGenerator.ORDER_ATOMIC) || 'null';
    const label = block.getFieldValue('LABEL');
    
    const code = `displayResult("${label}", ${value});\n`;
    return code;
};

// Display Chart Generator
javascriptGenerator.forBlock['display_chart'] = function(block) {
    const data = javascriptGenerator.valueToCode(block, 'DATA', javascriptGenerator.ORDER_ATOMIC) || '[]';
    const title = block.getFieldValue('TITLE');
    
    const code = `displayChart("${title}", ${data});\n`;
    return code;
};
