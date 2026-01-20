# 📚 Quick Reference Guide

## Block Categories

### 🔵 Data Creation (Blue)
- **Create Array**: Enter comma-separated values (e.g., `1,2,3,4,5`)
- **Create Number**: Enter any number
- **Create Text**: Enter any text string

### 🟢 Array Operations (Green)
- **Add Item**: Adds an item to an array
- **Filter Array**: Filter based on conditions (>, <, ==, >=, <=, !=)
- **Transform Array**: Apply math operations (×, ÷, +, -, square, √)
- **Sort Array**: Sort ascending or descending

### 🟣 Calculations (Purple)
- **Calculate Sum**: Sum all array values
- **Calculate Average**: Average of all values
- **Find Maximum**: Largest value in array

### 🟡 Output (Yellow)
- **Display Result**: Show value with custom label
- **Display Chart**: Visualize as bar chart

## Example Workflows

### 1. Basic Sum Calculation
```
Display Result "Total"
└─ Calculate Sum
   └─ Create Array [10,20,30,40,50]
```
Output: **Total: 150**

### 2. Filter and Average
```
Display Result "Average of Large Numbers"
└─ Calculate Average
   └─ Filter Array (> 25)
      └─ Create Array [10,20,30,40,50]
```
Output: **Average of Large Numbers: 40**

### 3. Transform and Visualize
```
Display Chart "Squared Values"
└─ Transform Array (square)
   └─ Create Array [1,2,3,4,5]
```
Output: Bar chart showing [1, 4, 9, 16, 25]

### 4. Complex Workflow
```
Display Result "Result"
└─ Calculate Sum
   └─ Transform Array (× 2)
      └─ Sort Array (descending)
         └─ Filter Array (> 20)
            └─ Create Array [10,20,30,40,50]
```
Steps:
1. Filter > 20: [30, 40, 50]
2. Sort desc: [50, 40, 30]
3. Multiply by 2: [100, 80, 60]
4. Sum: **240**

## Tips & Tricks

### ✅ Best Practices
1. Start with data creation blocks
2. Chain operations logically
3. Always end with an output block
4. Use descriptive labels
5. Test incrementally

### ⚠️ Common Mistakes
1. Not using output blocks (won't show results)
2. Forgetting to click "Generate Code" before "Run"
3. Invalid array syntax (use commas: `1,2,3`)
4. Connecting incompatible blocks

### 🔧 Troubleshooting
- **No output?** Check if you used Display blocks
- **Error message?** Check block connections and values
- **Unexpected result?** Click "Generate Code" to inspect JavaScript
- **Workspace frozen?** Try refreshing the page (auto-saved!)

## Keyboard Shortcuts

- **Delete Block**: Select block + Delete key
- **Duplicate Block**: Ctrl+C, Ctrl+V
- **Undo**: Ctrl+Z
- **Zoom In/Out**: Mouse wheel
- **Pan**: Click and drag workspace

## Advanced Features

### Auto-Save
Your workspace is automatically saved every 5 seconds to browser localStorage. Safe to close and reopen!

### Code Preview
Generated JavaScript uses modern ES6+ features:
- Arrow functions
- Array methods (map, filter, reduce)
- Template literals
- IIFE for scoping

### Safe Execution
All code runs in a sandboxed environment with:
- Input validation
- Error handling
- Type checking
- XSS protection

## Need Help?

1. Check the README.md for full documentation
2. Inspect generated code for debugging
3. Use browser console for detailed errors
4. Start with example workflows above

Happy building! 🎉
