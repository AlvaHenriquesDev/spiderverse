function handleMouseEnter() {
	this.classList.add("s-card--hovered");
	document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave() {
	this.classList.remove("s-card--hovered")
	document.body.id = "";
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

function selectCarouselItem(selectedButtonElement) {
	const selectedItem = selectedButtonElement.id;
	const carousel = document.querySelector(".s-cards-carrousel");
	const transform = carousel.style.transform;
	const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i); //regEx
	const rotateYDeg = -120 * (Number(selectedItem) - 1); //Calculando os graus baseado no card selecionado
	const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`); 

	carousel.style.transform = newTransform

	const activeButtonElement = document.querySelector(".s-controller__button-active");
	activeButtonElement.classList.remove("s-controller__button-active");
	selectedButtonElement.classList.add("s-controller__button-active")
}
