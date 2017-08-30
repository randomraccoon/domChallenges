
document.body.onload = changeColors;

function changeColors () {
  // Change the color of the header text to red and change the color of the p tags to blue and the font size of the p tags to 10px.
  // your code here
  document.querySelector("h4").style.color = "red";
  let pArr = document.querySelectorAll("p");
  for (let p of pArr) {
    p.style.color = "blue";
    p.style.fontSize = "10px";
  }
}
