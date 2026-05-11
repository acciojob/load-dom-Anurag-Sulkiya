function showDOMLoadedMessage(params) {
	var message = document.createElement("p");
	message.textContent = "DOM load success"
	document.body.appendChild(message);
}

document.addEventListener("DOMContentLoaded", showDOMLoadedMessage);