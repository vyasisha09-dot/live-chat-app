const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

io.on("connection", (socket) => {
    console.log("User connected", socket.id);

    socket.on("chat message", (message) => {
        if (!message || !message.text) return;
        io.emit("chat message", message);
    });

    socket.on("disconnect", () => {
        console.log("User disconnected", socket.id);
    });
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
