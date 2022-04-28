const redRange = document.getElementById("red");
const greenRange = document.getElementById("green");
const blueRange = document.getElementById("blue");
const html = document.querySelector("html");
const colorCode = document.getElementById("colorCode");
let red = redRange.value;
let green = greenRange.value;
let blue = blueRange.value;

redRange.addEventListener("input", function () {
  red = redRange.value;
  html.style.setProperty("--red", red);
  colorCode.innerText = "rgb(" + red + "," + green + "," + blue + ")";
});
blueRange.addEventListener("input", function () {
  blue = blueRange.value;
  html.style.setProperty("--blue", blue);
  colorCode.innerText = "rgb(" + red + "," + green + "," + blue + ")";
});
greenRange.addEventListener("input", function () {
  green = greenRange.value;
  html.style.setProperty("--green", green);
  colorCode.innerText = "rgb(" + red + "," + green + "," + blue + ")";
});
