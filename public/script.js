const socket = io();

const form = document.getElementById("form");
const input = document.getElementById("input");
const messages = document.getElementById("messages");
const usernameLabel = document.getElementById("username-label");

const username = prompt("Enter your name:", "Guest")?.trim() || "Guest";
usernameLabel.textContent = username;

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;

    const message = { user: username, text };
    socket.emit("chat message", message);
    input.value = "";
});

socket.on("chat message", function(message) {
    if (!message) return;
    const own = message.user === username;
    addMessage(message, own);
});

socket.on("connect", () => {
    addSystemMessage("Connected to the chat server.");
});

socket.on("disconnect", () => {
    addSystemMessage("Disconnected from the server.");
});

function addMessage(message, own) {
    const item = document.createElement("div");
    item.className = `message${own ? " own" : ""}`;

    const sender = document.createElement("span");
    sender.className = "sender";
    sender.textContent = own ? "You" : message.user;

    const text = document.createElement("span");
    text.textContent = message.text;

    item.appendChild(sender);
    item.appendChild(text);
    messages.appendChild(item);
    messages.scrollTop = messages.scrollHeight;
}

function addSystemMessage(text) {
    const item = document.createElement("div");
    item.className = "message system";
    item.textContent = text;
    messages.appendChild(item);
    messages.scrollTop = messages.scrollHeight;
}
