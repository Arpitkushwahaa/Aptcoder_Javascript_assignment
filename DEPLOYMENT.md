# 🚀 Deployment Guide

## GitHub Pages Deployment

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top-right corner
3. Select "New repository"
4. Name it: `blockly-custom-blocks-demo`
5. Set it to **Public**
6. Click "Create repository"

### Step 2: Push Your Code

Open terminal in your project folder and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit your code
git commit -m "Initial commit: Blockly Custom Blocks Demo"

# Add remote origin (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/blockly-custom-blocks-demo.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under "Source", select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

### Step 4: Access Your Live Demo

Your site will be live at:
```
https://YOUR_USERNAME.github.io/blockly-custom-blocks-demo/
```

It may take 1-2 minutes for the site to be deployed.

---

## Alternative: Using GitHub Desktop

1. Download [GitHub Desktop](https://desktop.github.com/)
2. Open GitHub Desktop
3. Click "Create a New Repository on your hard drive"
4. Set the path to your project folder
5. Publish to GitHub (click "Publish repository")
6. Follow Step 3 above to enable Pages

---

## Testing Locally

Before deploying, test locally:

### Option 1: Direct File Open
- Simply open `index.html` in your browser

### Option 2: Local Server (Recommended)

**Using Python:**
```bash
python -m http.server 8000
# Open http://localhost:8000
```

**Using Node.js:**
```bash
npx http-server
# Open http://localhost:8080
```

**Using VS Code:**
- Install "Live Server" extension
- Right-click `index.html`
- Click "Open with Live Server"

---

## Troubleshooting

### Issue: Page shows 404 error
- Make sure `index.html` is in the root directory
- Check that GitHub Pages is enabled in repository settings

### Issue: Blockly not loading
- Check browser console for errors
- Ensure internet connection (Blockly loads from CDN)
- Try hard refresh (Ctrl + F5)

### Issue: Code not executing
- Check browser console for JavaScript errors
- Make sure you clicked "Generate Code" before "Run"

---

## Update Your Live Site

After making changes:

```bash
git add .
git commit -m "Description of changes"
git push origin main
```

GitHub Pages will automatically update in 1-2 minutes.

---

## 🎉 You're Done!

Share your live demo URL with others!
