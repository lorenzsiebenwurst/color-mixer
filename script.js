const redRange = document.getElementById("red");
const greenRange = document.getElementById("green");
const blueRange = document.getElementById("blue");
const html = document.querySelector("html");
const colorCode = document.getElementById("colorCode");
let red = redRange.value;
let green = greenRange.value;
let blue = blueRange.value;
const btn = document.querySelector("button");

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

btn.addEventListener("click", () => {
  fetch("https://dummy-apis.netlify.app/api/color")
    .then((Response) => {
      return Response.json();
    })
    .then((data) => {
      colorCode.innerText =
        "rgb(" + data.rgb.r + "," + data.rgb.g + "," + data.rgb.b + ")";
      html.style.setProperty("--red", data.rgb.r);
      html.style.setProperty("--green", data.rgb.g);
      html.style.setProperty("--blue", data.rgb.b);
      redRange.value = data.rgb.r;
      greenRange.value = data.rgb.g;
      blueRange.value = data.rgb.b;
    });
});
