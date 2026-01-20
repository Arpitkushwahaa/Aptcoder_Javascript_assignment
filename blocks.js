// Custom Blockly Block Definitions
// This file defines 10+ custom blocks for data processing workflows

// ============================================
// DATA CREATION BLOCKS
// ============================================

// 1. Create Array Block
Blockly.Blocks['create_array'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("create array")
            .appendField(new Blockly.FieldTextInput("1,2,3,4,5"), "ITEMS");
        this.setOutput(true, "Array");
        this.setColour(160);
        this.setTooltip("Create an array from comma-separated values");
        this.setHelpUrl("");
    }
};

// 2. Create Number Block
Blockly.Blocks['create_number'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("number")
            .appendField(new Blockly.FieldNumber(0), "NUM");
        this.setOutput(true, "Number");
        this.setColour(230);
        this.setTooltip("Create a number value");
        this.setHelpUrl("");
    }
};

// 3. Create Text Block
Blockly.Blocks['create_text'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("text")
            .appendField(new Blockly.FieldTextInput("hello"), "TEXT");
        this.setOutput(true, "String");
        this.setColour(160);
        this.setTooltip("Create a text value");
        this.setHelpUrl("");
    }
};

// ============================================
// ARRAY OPERATION BLOCKS
// ============================================

// 4. Add Item to Array Block
Blockly.Blocks['add_item'] = {
    init: function() {
        this.appendValueInput("ARRAY")
            .setCheck("Array")
            .appendField("add to array");
        this.appendValueInput("ITEM")
            .setCheck(null)
            .appendField("item");
        this.setInputsInline(true);
        this.setOutput(true, "Array");
        this.setColour(120);
        this.setTooltip("Add an item to an array");
        this.setHelpUrl("");
    }
};

// 5. Filter Array Block
Blockly.Blocks['filter_array'] = {
    init: function() {
        this.appendValueInput("ARRAY")
            .setCheck("Array")
            .appendField("filter array");
        this.appendDummyInput()
            .appendField("condition")
            .appendField(new Blockly.FieldDropdown([
                ["greater than", ">"],
                ["less than", "<"],
                ["equal to", "=="],
                ["greater or equal", ">="],
                ["less or equal", "<="],
                ["not equal", "!="]
            ]), "OPERATOR");
        this.appendValueInput("VALUE")
            .setCheck("Number");
        this.setInputsInline(true);
        this.setOutput(true, "Array");
        this.setColour(120);
        this.setTooltip("Filter array based on condition");
        this.setHelpUrl("");
    }
};

// 6. Map Array Block
Blockly.Blocks['map_array'] = {
    init: function() {
        this.appendValueInput("ARRAY")
            .setCheck("Array")
            .appendField("transform array");
        this.appendDummyInput()
            .appendField("operation")
            .appendField(new Blockly.FieldDropdown([
                ["multiply by", "*"],
                ["divide by", "/"],
                ["add", "+"],
                ["subtract", "-"],
                ["square", "**2"],
                ["square root", "sqrt"]
            ]), "OPERATION");
        this.appendValueInput("VALUE")
            .setCheck("Number");
        this.setInputsInline(true);
        this.setOutput(true, "Array");
        this.setColour(120);
        this.setTooltip("Transform each element in the array");
        this.setHelpUrl("");
    }
};

// 7. Sort Array Block
Blockly.Blocks['sort_array'] = {
    init: function() {
        this.appendValueInput("ARRAY")
            .setCheck("Array")
            .appendField("sort array");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                ["ascending", "asc"],
                ["descending", "desc"]
            ]), "ORDER");
        this.setInputsInline(true);
        this.setOutput(true, "Array");
        this.setColour(120);
        this.setTooltip("Sort array in ascending or descending order");
        this.setHelpUrl("");
    }
};

// ============================================
// CALCULATION BLOCKS
// ============================================

// 8. Calculate Sum Block
Blockly.Blocks['calculate_sum'] = {
    init: function() {
        this.appendValueInput("ARRAY")
            .setCheck("Array")
            .appendField("sum of");
        this.setOutput(true, "Number");
        this.setColour(290);
        this.setTooltip("Calculate the sum of all numbers in the array");
        this.setHelpUrl("");
    }
};

// 9. Calculate Average Block
Blockly.Blocks['calculate_average'] = {
    init: function() {
        this.appendValueInput("ARRAY")
            .setCheck("Array")
            .appendField("average of");
        this.setOutput(true, "Number");
        this.setColour(290);
        this.setTooltip("Calculate the average of all numbers in the array");
        this.setHelpUrl("");
    }
};

// 10. Find Max Block
Blockly.Blocks['find_max'] = {
    init: function() {
        this.appendValueInput("ARRAY")
            .setCheck("Array")
            .appendField("maximum of");
        this.setOutput(true, "Number");
        this.setColour(290);
        this.setTooltip("Find the maximum value in the array");
        this.setHelpUrl("");
    }
};

// ============================================
// OUTPUT BLOCKS
// ============================================

// 11. Display Result Block
Blockly.Blocks['display_result'] = {
    init: function() {
        this.appendValueInput("VALUE")
            .setCheck(null)
            .appendField("display");
        this.appendDummyInput()
            .appendField("label")
            .appendField(new Blockly.FieldTextInput("Result"), "LABEL");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(45);
        this.setTooltip("Display a value with a label");
        this.setHelpUrl("");
    }
};

// 12. Display Chart Block
Blockly.Blocks['display_chart'] = {
    init: function() {
        this.appendValueInput("DATA")
            .setCheck("Array")
            .appendField("display bar chart");
        this.appendDummyInput()
            .appendField("title")
            .appendField(new Blockly.FieldTextInput("Data Chart"), "TITLE");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(45);
        this.setTooltip("Display data as a bar chart");
        this.setHelpUrl("");
    }
};
