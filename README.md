# Live Chat App

A real-time chat application built using Node.js, Express, and Socket.IO.

Users can connect and send messages instantly using WebSockets.

## Features

- Real-time messaging
- Username prompt for each user
- Responsive chat UI with message bubbles
- WebSocket communication
- Frontend + Backend integration

## Technologies Used

- Node.js
- Express.js
- Socket.IO
- HTML
- CSS
- JavaScript

## Installation

1. Clone the repository:
   ```bash
   git clone <your-repository-link>
   ```
2. Change into the project folder:
   ```bash
   cd live-chat-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Run the Server

```bash
node server.js
```

Then open `http://localhost:3000` in your browser.

## Test Multiple Users

- Open the link in different browsers
- Or use Incognito mode
- Or open on different devices on the same network

## Network Access

Find your local IPv4 address with `ipconfig`, then open:

```text
http://YOUR_IP_ADDRESS:3000
```

## Project Structure

```
live-chat-app/
├── server.js
├── package.json
├── README.md
└── public/
    ├── index.html
    ├── style.css
    └── script.js
```

## Future Improvements

- Add username system
- Add chat rooms
- Add typing indicator
- Store messages in a database
- Deploy to cloud

## Deployment

This app is a Node.js server and must be deployed to a Node-capable host.

### Recommended platforms

- Render: https://render.com
- Railway: https://railway.app
- Heroku: https://www.heroku.com

### Deploy steps

1. Push the repo to GitHub.
2. Create a new service on your deployment platform.
3. Use `npm start` as the start command.
4. Set the port to the platform-provided `PORT` environment variable (already supported).

### Heroku quick deploy

If you connect this repo to Heroku, use these settings:

- Buildpack: Node.js
- Start command: `npm start`

### Render quick deploy

If you connect this repo to Render, use:

- Environment: `Node`
- Build command: `npm install`
- Start command: `npm start`

### GitHub Actions deploy to Heroku

A GitHub Actions workflow is included at `.github/workflows/deploy.yml`.

To deploy automatically on every push to `main`, add these repository secrets in GitHub:

- `HEROKU_API_KEY`
- `HEROKU_APP_NAME`
- `HEROKU_EMAIL`

Then push to `main` and GitHub Actions will deploy the app to Heroku.

The application serves the frontend from `public/` and uses Socket.IO for real-time chat.
