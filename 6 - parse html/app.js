
document.body.onload = parseHTML;

function parseHTML () {
  // Substitute the variables in html (enclosed in {}) with the values in the object below.
  var obj = {
    name: "Kevin",
    color: "Green",
    team: "Lakers"
  }
  // your code here
  let parsed = document.querySelector("#parse-me");
  let text = parsed.textContent;
  for (let key in obj) {
    text = text.replace("{" + key + "}", obj[key]);
  }
  parsed.textContent = text;
}
