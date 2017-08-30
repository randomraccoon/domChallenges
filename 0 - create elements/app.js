
document.body.onload = addElement;

function addElement () {
  // Create a div with js and put some placeholder text in it
  let el = document.createElement("div");
  let text = document.createTextNode("I'm Woody! Howdy howdy howdy.");
  el.appendChild(text);
  document.body.appendChild(el);
}
