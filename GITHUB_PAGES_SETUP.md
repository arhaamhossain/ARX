# GitHub Pages Deployment Setup

Your portfolio is now configured for automatic deployment to GitHub Pages!

## What was configured:

1. **Next.js Static Export** - The site now exports as static HTML
2. **Base Path** - Set to `/ARX` (your repository name)
3. **GitHub Actions Workflow** - Automatic build and deploy on push to main

## To complete the setup:

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Configure for GitHub Pages deployment"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository settings: https://github.com/arhaamhossain/ARX/settings
   - Scroll to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Select branch: `gh-pages`
   - Click Save

3. **Wait for deployment**:
   - Go to "Actions" tab in your repo
   - Watch the workflow run
   - Once complete, your site will be live at: `https://arhaamhossain.github.io/ARX/`

## Notes:

- All images currently use placeholder URLs (`via.placeholder.com`)
- Replace these with your actual project images
- The `basePath: "/ARX"` ensures all links work correctly on the subdirectory
- GitHub Actions will automatically rebuild and deploy whenever you push to `main`

## For local development:

The dev server still works normally:
```bash
npm run dev
```

But note that links will be prefixed with `/ARX` when deployed.
