// api link
const url = "https://api.adviceslip.com/advice";

// button
const button = document.querySelector("figure");

// ID & Quote
const adviceTextConent = document.querySelector(".advice-number");
const quoteTextContent = document.querySelector(".quote");

let adviceID = "";
let adviceQuote = "";

const generateAdvice = () => {
	fetch(url).then((res) =>
		res.json().then((data) => {
			adviceID = data.slip.id.toString();
			adviceQuote = data.slip.advice;
			adviceTextConent.innerHTML = `Advice # ${adviceID}`;
			quoteTextContent.innerHTML = `"${adviceQuote}"`;
		})
	);
};

button.addEventListener("click", generateAdvice);

generateAdvice();
