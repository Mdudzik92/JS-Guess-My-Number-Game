// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number!";
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

// Math.trunc cuts off the decimals
// Adding +1 to make sure it includes 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", () => {
	const guess = Number(document.querySelector(".guess").value);

	// When there is no input
	if (!guess) {
		document.querySelector(".message").textContent = "⛔ No number!";

		// When player wins
	} else if (guess === secretNumber) {
		document.querySelector(".message").textContent = "🎉 Correct Number!";

		document.querySelector(".number").textContent = secretNumber;

		document.querySelector("body").style.backgroundColor = "#60b347";

		document.querySelector(".number").style.width = "30rem";

		if (score > highscore) {
			highscore = score;
			document.querySelector(".highscore").textContent = highscore;
		}

		// When guess is wrong
	} else if (guess !== secretNumber) {
		if (score > 1) {
			document.querySelector(".message").textContent =
				guess > secretNumber ? "📈 Too high!" : "📉 Too low!";
			score--;
			document.querySelector(".score").textContent = score;
		} else {
			document.querySelector(".message").textContent = "💥 You lost the game!";
			document.querySelector(".score").textContent = 0;
		}
	}
});

document.querySelector(".again").addEventListener("click", (e) => {
	secretNumber = Math.trunc(Math.random() * 20) + 1;
	score = 20;

	// Resetting initial values of the message, score, number and guess
	document.querySelector(".message").textContent = "Start guessing...";
	document.querySelector(".score").textContent = score;
	document.querySelector(".number").textContent = "?";
	document.querySelector(".guess").value = "";

	// Resetting background color and number width
	document.querySelector("body").style.backgroundColor = "#222";
	document.querySelector(".number").style.width = "15rem";
});
