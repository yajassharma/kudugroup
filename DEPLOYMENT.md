# Deployment Guide for SPA Routing

This project is a Single Page Application (SPA). When deploying to a static server or hosting provider, you must ensure that all requests fallback to `index.html` so that the client-side router can handle the navigation.

The following configurations have already been added to your project:
- `vercel.json` (Root): For Vercel deployments.
- `_redirects` (`public/`): For Netlify, Cloudflare Pages, and standard static hosts.
- `.htaccess` (`public/`): For Apache-based servers.

## Additional Environment Configurations

### Nginx
If you are using Nginx, add the following to your server block:

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

### Docker (Nginx)
If you are containerizing the app with Nginx, use a configuration like this in your `nginx.conf`:

```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### Node.js (Express)
If you are serving the static files using Express, use the `connect-history-api-fallback` middleware:

```javascript
const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');

const app = express();

// Middleware for SPA routing
app.use(history());

app.use(express.static(path.join(__current_dir, 'dist')));

app.listen(3000);
```

### Local Testing
To test the production build locally with SPA routing support:

1. Build the app: `npm run build`
2. Serve the `dist` folder using a tool that supports SPA routing:
   ```bash
   npx serve -s dist
   ```
   The `-s` (or `--single`) flag ensures all unknown paths are redirected to `index.html`.
