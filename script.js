function showDOMLoadedMessage(params) {
	var textNode = document.createTextNode("DOM load success");
	document.body.appendChild(textNode);
}

document.addEventListener("DOMContentLoaded", showDOMLoadedMessage);