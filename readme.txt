Real-Time Chat Application

A real-time chat application built using Node.js, Express, and Socket.IO.

Users can connect and send messages instantly using WebSockets.

🚀 Features

Real-time messaging

Multiple users support

WebSocket communication

Frontend + Backend integration

🛠️ Technologies Used

Node.js

Express.js

Socket.IO

HTML

CSS

JavaScript

📦 Installation Guide

Follow these steps to run the project on your system.

1️⃣ Clone the Repository
git clone <your-repository-link>


Or download the ZIP file and extract it.

2️⃣ Open Project Folder
cd live-chat-app

3️⃣ Install Dependencies

Make sure Node.js is installed.

Check version:

node -v


Then install required packages:

npm install


This will install:

express

socket.io

4️⃣ Run the Server
node server.js


If successful, you will see:

Server running on http://localhost:3000

5️⃣ Open in Browser

Open:

http://localhost:3000

👥 How to Test Multiple Users

Open the link in different browsers

Or open Incognito mode

Or open on different devices connected to the same WiFi

All users can chat in real-time.

🌍 Allow Other Devices on Same Network

Run:

ipconfig


Find your IPv4 address

Open in browser:

http://YOUR_IP_ADDRESS:3000


Example:

http://192.168.1.5:3000

🛑 Common Errors & Solutions
Error: Port 3000 already in use
npx kill-port 3000

Error: Cannot find module
npm install

📌 Project Structure
live-chat-app/
│
├── server.js
├── package.json
└── public/
    ├── index.html
    ├── style.css
    └── script.js

🎯 Future Improvements

Add username system

Add chat rooms

Add typing indicator

Store messages in database

Deploy to cloud