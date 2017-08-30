
document.body.onload = genBlocks;

function genBlocks() {
  // Create 10 divs with the classes 'red' and 'black'. Interchange these to create a checkerboard pattern.
  let isRed = true;
  for (let i = 0; i < 10; i++) {
    let color = isRed ?  "red" : "black";
    let el = document.createElement("div");
    el.classList.add(color);
    document.body.appendChild(el);
    isRed = !isRed;
  }

}
