
document.body.onload = startDance;

var colorArr = ["red", "blue", "green", "purple", "pink", "black"]

function startDance () {
  // Every .2 seconds change the colors of all the divs with the "color" class.
  // stretch goal - randomly change the size of them as well!
  window.setInterval(()=> {
    let divs = document.querySelectorAll(".color");
    for (let div of divs) {
      let rColor = colorArr[Math.floor(Math.random() * colorArr.length)];
      div.style.backgroundColor = rColor;
      let size = Math.floor(Math.random() * 200) + "px";
      div.style.width = size;
      div.style.height = size;
    }
  },200);
}
