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
    const code = `[${items}].map(item => {
        const num = parseFloat(item);
        return isNaN(num) ? item : num;
    })`;
    
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
    const array = javascriptGenerator.valueToCode(block, 'ARRAY', javascriptGenerator.ORDER_NONE) || '[]';
    const item = javascriptGenerator.valueToCode(block, 'ITEM', javascriptGenerator.ORDER_NONE) || '0';
    
    const code = `[...(${array}), ${item}]`;
    
    return [code, javascriptGenerator.ORDER_FUNCTION_CALL];
};

// Filter Array Generator
javascriptGenerator.forBlock['filter_array'] = function(block) {
    const array = javascriptGenerator.valueToCode(block, 'ARRAY', javascriptGenerator.ORDER_NONE) || '[]';
    const operator = block.getFieldValue('OPERATOR');
    const value = javascriptGenerator.valueToCode(block, 'VALUE', javascriptGenerator.ORDER_NONE) || '0';
    
    const code = `(${array}).filter(item => parseFloat(item) ${operator} ${value})`;
    
    return [code, javascriptGenerator.ORDER_FUNCTION_CALL];
};

// Map Array Generator
javascriptGenerator.forBlock['map_array'] = function(block) {
    const array = javascriptGenerator.valueToCode(block, 'ARRAY', javascriptGenerator.ORDER_NONE) || '[]';
    const operation = block.getFieldValue('OPERATION');
    const val = javascriptGenerator.valueToCode(block, 'VALUE', javascriptGenerator.ORDER_NONE) || '1';
    
    let mapFunc;
    if (operation === 'sqrt') {
        mapFunc = `item => Math.sqrt(parseFloat(item))`;
    } else if (operation === '**2') {
        mapFunc = `item => parseFloat(item) ** 2`;
    } else {
        mapFunc = `item => parseFloat(item) ${operation} ${val}`;
    }
    
    const code = `(${array}).map(${mapFunc})`;
    
    return [code, javascriptGenerator.ORDER_FUNCTION_CALL];
};

// Sort Array Generator
javascriptGenerator.forBlock['sort_array'] = function(block) {
    const array = javascriptGenerator.valueToCode(block, 'ARRAY', javascriptGenerator.ORDER_NONE) || '[]';
    const order = block.getFieldValue('ORDER');
    
    const sortFunc = order === 'asc' ? '(a, b) => a - b' : '(a, b) => b - a';
    
    const code = `[...(${array})].sort(${sortFunc})`;
    
    return [code, javascriptGenerator.ORDER_FUNCTION_CALL];
};

// ============================================
// CALCULATION GENERATORS
// ============================================

// Calculate Sum Generator
javascriptGenerator.forBlock['calculate_sum'] = function(block) {
    const array = javascriptGenerator.valueToCode(block, 'ARRAY', javascriptGenerator.ORDER_NONE) || '[]';
    
    const code = `(${array}).reduce((sum, item) => sum + parseFloat(item), 0)`;
    
    return [code, javascriptGenerator.ORDER_FUNCTION_CALL];
};

// Calculate Average Generator
javascriptGenerator.forBlock['calculate_average'] = function(block) {
    const array = javascriptGenerator.valueToCode(block, 'ARRAY', javascriptGenerator.ORDER_NONE) || '[]';
    
    const code = `(function(arr) {
        const numbers = arr.filter(item => !isNaN(parseFloat(item)));
        if (numbers.length === 0) return 0;
        const sum = numbers.reduce((acc, item) => acc + parseFloat(item), 0);
        return sum / numbers.length;
    })(${array})`;
    
    return [code, javascriptGenerator.ORDER_FUNCTION_CALL];
};

// Find Max Generator
javascriptGenerator.forBlock['find_max'] = function(block) {
    const array = javascriptGenerator.valueToCode(block, 'ARRAY', javascriptGenerator.ORDER_NONE) || '[]';
    
    const code = `Math.max(...(${array}).map(item => parseFloat(item) || -Infinity))`;
    
    return [code, javascriptGenerator.ORDER_FUNCTION_CALL];
};

// ============================================
// OUTPUT GENERATORS
// ============================================

// Display Result Generator
javascriptGenerator.forBlock['display_result'] = function(block) {
    const value = javascriptGenerator.valueToCode(block, 'VALUE', javascriptGenerator.ORDER_NONE) || 'null';
    const label = block.getFieldValue('LABEL');
    
    const code = `displayResult("${label}", ${value});\n`;
    return code;
};

// Display Chart Generator
javascriptGenerator.forBlock['display_chart'] = function(block) {
    const data = javascriptGenerator.valueToCode(block, 'DATA', javascriptGenerator.ORDER_NONE) || '[]';
    const title = block.getFieldValue('TITLE');
    
    const code = `displayChart("${title}", ${data});\n`;
    return code;
};
