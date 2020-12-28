setInterval(setClock, 1000);

const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

function setClock() {
	const currentDate = new Date();
	const secondsRatio = currentDate.getSeconds() / 60;
	const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
	const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
	setRotation(secondHand, secondsRatio);
	setRotation(minuteHand, minutesRatio);
	setRotation(hourHand, hoursRatio);
	const greet = document.getElementById("greet");
	const node =
		currentDate.getHours() >= 0 && currentDate.getHours() < 12
			? "Hey there, Good morning."
			: currentDate.getHours() >= 12 && currentDate.getHours() < 16
			? "Hey there, Good afternoon."
			: "Hey there, Good evening.";
	greet.innerHTML = node;
}

function setRotation(element, rotationRatio) {
	element.style.setProperty("--rotation", rotationRatio * 360);
}

setClock();
