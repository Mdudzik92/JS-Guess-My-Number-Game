// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number!";
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

// Math.trunc cuts off the decimals
// Adding +1 to make sure it includes 20
const number = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = number;

document.querySelector(".check").addEventListener("click", () => {
	const guess = Number(document.querySelector(".guess").value);
	console.log(guess, typeof guess);

	if (!guess) {
		document.querySelector(".message").textContent = "⛔ No number!";
	}
});
