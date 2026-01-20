# 🚀 Deployment Guide

## View Live Project

**Live Demo:** [https://arpitkushwahaa.github.io/Aptcoder_Javascript_assignment/](https://arpitkushwahaa.github.io/Aptcoder_Javascript_assignment/)

**Repository:** [https://github.com/Arpitkushwahaa/Aptcoder_Javascript_assignment](https://github.com/Arpitkushwahaa/Aptcoder_Javascript_assignment)

---

## How to Enable GitHub Pages

If the live demo isn't working yet, follow these steps:

1. Go to your repository: https://github.com/Arpitkushwahaa/Aptcoder_Javascript_assignment
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under **Source**, select:
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **Save**
6. Wait 1-2 minutes for deployment

Your site will be live at: `https://arpitkushwahaa.github.io/Aptcoder_Javascript_assignment/`

---

## How to Test Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/Arpitkushwahaa/Aptcoder_Javascript_assignment.git
   ```

2. Open `index.html` in your browser

**OR**

Run a local server:
```bash
# Python
python -m http.server 8000

# Node.js
npx http-server
```

---

## Verify It's Working

Once live, you should see:
- ✅ Blockly workspace with drag-and-drop blocks
- ✅ Control buttons (Generate Code, Run, Clear)
- ✅ Code preview panel
- ✅ Results output panel
- ✅ Starter blocks already on workspace

**Test:**
1. Click "Run" button
2. You should see "Total Sum: 150" in the output

---

## Troubleshooting

**Problem:** 404 Page Not Found
- Wait 2-3 minutes after enabling GitHub Pages
- Ensure repository is **Public**
- Check that `index.html` is in root directory

**Problem:** Blocks not loading
- Check internet connection (Blockly loads from CDN)
- Clear browser cache (Ctrl + F5)
- Open browser console (F12) to check for errors

---

**Project is ready for viewing!** 🎉
