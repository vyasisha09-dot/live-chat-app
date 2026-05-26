# Live Chat App

A real-time chat application built using Node.js, Express, and Socket.IO.

Users can connect and send messages instantly using WebSockets.

## Features

- Real-time messaging
- Multiple users support
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
