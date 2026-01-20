# 🧩 Blockly Custom Blocks Demo

An interactive web application that allows users to create data processing workflows using custom Blockly blocks, generate executable JavaScript code, and see real-time results.

## 🚀 Live Demo

Visit the live demo: [GitHub Pages Link] (Deploy to GitHub Pages to get the URL)

## 📋 Features

### Custom Blockly Blocks (12 Total)

**Data Creation Blocks:**
- 🔢 Create Array - Create arrays from comma-separated values
- 🔢 Create Number - Create numeric values
- 📝 Create Text - Create text strings

**Array Operations:**
- ➕ Add Item - Add items to arrays
- 🔍 Filter Array - Filter arrays based on conditions (>, <, ==, >=, <=, !=)
- 🔄 Transform Array - Apply operations to each element (multiply, divide, add, subtract, square, square root)
- 📊 Sort Array - Sort arrays in ascending or descending order

**Calculations:**
- ➕ Calculate Sum - Sum all numbers in an array
- 📈 Calculate Average - Find the average of array values
- 🔝 Find Maximum - Find the largest value in an array

**Output:**
- 📺 Display Result - Show results with custom labels
- 📊 Display Chart - Visualize data as interactive bar charts

### Core Features

✅ **Full-Screen Workspace** - 70% screen dedicated to Blockly workspace
✅ **Code Generation** - Generate clean, executable JavaScript
✅ **Live Execution** - Run generated code and see immediate results
✅ **Responsive Design** - Works on mobile, tablet, and desktop
✅ **Error Handling** - User-friendly error messages
✅ **Auto-Save** - Workspace automatically saved to localStorage
✅ **Clear/Reset** - Easy workspace cleanup

## 🛠️ Technology Stack

- **Vanilla JavaScript (ES6+)** - No frameworks
- **Blockly** - Google's visual programming library (latest version)
- **HTML5 & CSS3** - Modern web standards
- **LocalStorage** - Auto-save functionality

## 📁 Project Structure

```
Aptcoder assignment Javascript/
├── index.html          # Main HTML file with layout
├── styles.css          # Responsive styling
├── blocks.js           # Custom Blockly block definitions
├── generators.js       # JavaScript code generators
├── app.js              # Main application logic
└── README.md           # Project documentation
```

## 🎯 How to Use

1. **Drag Blocks** - Choose blocks from the toolbox on the left
2. **Connect Blocks** - Snap blocks together to create workflows
3. **Generate Code** - Click "Generate Code" to see JavaScript
4. **Run** - Click "Run" to execute and see results
5. **Clear** - Click "Clear" to reset the workspace

### Example Workflow

Create a workflow to:
1. Create an array of numbers
2. Filter values greater than 20
3. Calculate the sum
4. Display the result

```
[Display Result]
  └─ [Calculate Sum]
      └─ [Filter Array > 20]
          └─ [Create Array: 10,20,30,40,50]
```

Result: **Total Sum: 120** (30 + 40 + 50)

## 🚀 Installation & Deployment

### Run Locally

1. Clone the repository:
```bash
git clone https://github.com/yourusername/blockly-custom-blocks-demo.git
cd blockly-custom-blocks-demo
```

2. Open `index.html` in your browser:
```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

Or use a local server:
```bash
# Python
python -m http.server 8000

# Node.js
npx http-server
```

### Deploy to GitHub Pages

1. Push your code to GitHub:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Enable GitHub Pages:
   - Go to repository Settings
   - Navigate to Pages section
   - Select source: `main` branch
   - Click Save

3. Your site will be live at: `https://yourusername.github.io/blockly-custom-blocks-demo/`

## 🎨 UI Layout

```
┌─────────────────────────────────────────────┐
│          Blockly Custom Blocks Demo          │
│     Drag blocks to create workflows          │
├─────────────────────────────────────────────┤
│                                       │      │
│                                       │ 📝   │
│         Blockly Workspace             │ Gen  │
│              (70%)                    │ 🗑️   │
│                                       │ Clr  │
│                                       ├──────┤
│                                       │ Code │
│                                       │      │
│                                       ├──────┤
│                                       │Output│
│                                       │      │
└─────────────────────────────────────────────┘
```

## 💡 Example Use Cases

1. **Data Analysis**
   - Create datasets
   - Filter and transform data
   - Calculate statistics
   - Visualize results

2. **Mathematical Operations**
   - Array manipulations
   - Statistical calculations
   - Data visualization

3. **Learning Tool**
   - Teach programming concepts
   - Visual code generation
   - Interactive learning

## 🔧 Code Features

- **Input Validation** - All blocks validate inputs
- **Error Handling** - Graceful error messages
- **Type Checking** - Proper block connections
- **Clean Code Generation** - Readable JavaScript output
- **Modular Design** - Separated concerns (blocks, generators, app logic)

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px (Full layout)
- **Tablet**: 768px - 1024px (Adjusted panels)
- **Mobile**: < 768px (Stacked layout)

## 🤝 Contributing

This is an assignment project, but suggestions are welcome!

## 📄 License

This project is created for educational purposes.

## 👤 Author

Created as part of the Aptcoder Blockly Custom Blocks assignment.

## 🎓 Assignment Requirements Met

✅ 6+ custom Blockly blocks (12 blocks created)
✅ Blocks work together meaningfully
✅ Proper input validation
✅ Correct block connections
✅ Clean JavaScript code generation
✅ Full-screen Blockly workspace
✅ Generate executable JavaScript
✅ Execute code with live results
✅ Responsive UI (mobile + desktop)
✅ User-friendly error handling
✅ Clear/Reset functionality
✅ Vanilla JavaScript only (no frameworks)
✅ ES6+ syntax
✅ Clean, modular code
✅ Professional UI with control buttons
✅ Code preview panel
✅ Results display panel
✅ Ready for GitHub Pages deployment

## 🚀 Next Steps

1. Create a GitHub repository
2. Push this code to the repository
3. Enable GitHub Pages
4. Share the live demo URL

---

**Note:** This project runs entirely in the browser with no backend required. All code execution happens client-side in a safe sandboxed environment.
