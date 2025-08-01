alert("JS file loaded!");

function sendMessage() {
    alert("sendMessage triggered!");
    const input = document.getElementById("message");
    const chatBody = document.getElementById("chat-body");
    const userText = input.value.trim();  

    if (userText === "") return;

    const userMsg = document.createElement("div");
    userMsg.className = "chat-message user-message";
    userMsg.textContent = "You: " + userText;
    chatBody.appendChild(userMsg);

    fetch("/get", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: userText })
    })
    .then(res => res.json())
    .then(data => {
        const botMsg = document.createElement("div");
        botMsg.className = "chat-message bot-message";
        botMsg.textContent = "Bot: " + data.reply;
        chatBody.appendChild(botMsg);
        chatBody.scrollTop = chatBody.scrollHeight;
    });

    input.value = "";
}
