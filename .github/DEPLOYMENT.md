# Deployment Documentation

## Automatic Deployment to GitHub Pages

This project is configured to automatically deploy to GitHub Pages on every push to the `main` branch using GitHub Actions.

### How it works

The workflow is defined in `.github/workflows/deploy.yml` and consists of two jobs:

1. **Build Job**:
   - Checks out the repository code
   - Sets up Node.js 20 with npm caching
   - Installs dependencies using `npm ci`
   - Builds the application using `npm run build`
   - Uploads the `dist` folder as a Pages artifact

2. **Deploy Job**:
   - Runs after the build job completes successfully
   - Deploys the artifact to GitHub Pages
   - Provides the deployment URL

### Triggering Deployment

Deployment happens automatically when:
- Code is pushed to the `main` branch
- A pull request is merged into the `main` branch

### Viewing Deployments

- Visit the **Actions** tab in the GitHub repository to see workflow runs
- The deployed site will be available at: `https://matteoolarte.github.io/ResqBit-WebPage`

### Manual Deployment (Legacy)

The project still includes the legacy `npm run deploy` script that uses `gh-pages` for manual deployment. However, this is no longer necessary as deployments are automated.

### Requirements

For the workflow to function properly, ensure that:
1. GitHub Pages is enabled in the repository settings
2. The Pages source is set to "GitHub Actions"
3. The workflow has the necessary permissions (already configured in the workflow file)
