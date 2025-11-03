function handleMouseEnter(){
	this.classList.add("s-card--hovered");
}

function handleMouseLeave(){
	this.classList.remove("s-card--hovered");
}

function cardHoverAnimation() {
	const cardElement = document.getElementsByClassName("s-card");

	for (let i = 0; i < cardElement.length; i++) {
		const card = cardElement[i];
		card.addEventListener("mouseenter", handleMouseEnter);
		card.addEventListener("mouseleave", handleMouseLeave);
	}
}

	document.addEventListener("DOMContentLoaded", cardHoverAnimation(), false)