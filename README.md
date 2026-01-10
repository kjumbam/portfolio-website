# Portfolio Website Deployment Guide

Your professional portfolio website is ready to deploy! Here are the **easiest** ways to get it live on the web.

## 🚀 Quick Start (Local Testing)

First, let's test it on your computer:

```bash
# Navigate to the project folder
cd portfolio-website

# Install dependencies (only needed once)
npm install

# Start the development server
npm run dev
```

Open your browser to `http://localhost:5173` to see your portfolio!

---

## 🌐 Deploy to the Web (FREE Options)

### **Option 1: Vercel (RECOMMENDED - Easiest)**

Vercel is the fastest way to deploy React apps. It's FREE and takes 2 minutes.

#### Steps:

1. **Create a GitHub account** (if you don't have one)
   - Go to [github.com](https://github.com) and sign up

2. **Upload your portfolio to GitHub**
   ```bash
   # In the portfolio-website folder:
   git init
   git add .
   git commit -m "Initial portfolio website"
   
   # Create a new repository on GitHub, then:
   git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
   git push -u origin main
   ```

3. **Deploy with Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up" and use your GitHub account
   - Click "New Project"
   - Import your `portfolio-website` repository
   - Click "Deploy" (Vercel auto-detects everything!)

**Done!** Your site will be live at `your-username.vercel.app` in ~2 minutes.

---

### **Option 2: Netlify (Also Very Easy)**

Another excellent free option with drag-and-drop deployment.

#### Steps:

1. **Build your project locally**
   ```bash
   npm run build
   ```
   This creates a `dist` folder with your production files.

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up (free)
   - Drag the `dist` folder onto Netlify's upload area
   - **Done!** Your site is live immediately

**OR** connect to GitHub (like Vercel) for automatic deployments when you update your code.

---

### **Option 3: GitHub Pages (Free with GitHub)**

Good if you want everything in one place (code + hosting).

#### Steps:

1. **Install GitHub Pages package**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json** - Add these lines:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/portfolio-website",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

Your site will be live at `your-username.github.io/portfolio-website`

---

## 📝 Customization Checklist

Before deploying, update these items in `src/App.jsx`:

- [ ] Replace `your.email@example.com` with your real email
- [ ] Update GitHub link (line ~527)
- [ ] Update LinkedIn link (line ~531)
- [ ] Add your actual contact information

---

## 🔄 Updating Your Portfolio

After making changes:

**If using Vercel/Netlify with GitHub:**
```bash
git add .
git commit -m "Update portfolio"
git push
```
Your site automatically updates!

**If using drag-and-drop:**
```bash
npm run build
```
Then drag the new `dist` folder to Netlify again.

---

## 💡 Pro Tips

1. **Custom Domain**: All three platforms let you use your own domain (like `kiwo.dev`) for free
2. **Free HTTPS**: All platforms include free SSL certificates
3. **Analytics**: Add Google Analytics to track visitors
4. **SEO**: Update the meta description in `index.html` with your keywords

---

## 🆘 Troubleshooting

**"npm: command not found"**
- Install Node.js from [nodejs.org](https://nodejs.org)

**Build errors?**
- Delete `node_modules` folder
- Run `npm install` again
- Run `npm run build`

**Need help?**
- Vercel has excellent docs: [vercel.com/docs](https://vercel.com/docs)
- Or search "deploy React app to [platform]" on YouTube

---

## 🎉 You're Ready!

Pick the option that feels easiest (I recommend Vercel) and get your portfolio live in the next 5 minutes. Good luck with your job search! 🚀
