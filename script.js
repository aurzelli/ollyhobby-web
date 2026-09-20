document.getElementById("changeTextBtn").addEventListener("click", function () {
    const newMessage = document.createElement("p");
    newMessage.textContent = "oh hi";
    document.getElementById("about").appendChild(newMessage);
});
