
document.body.onload = ()=>{displayData(person)};

let person = {
  name:"race",
  age:25,
  city:"Phoenix"
}

function displayData(data) {
  // Use the data that you take in to create an unordered list containing the persons information.
  let ul = document.createElement("ul");
  for (let key in data) {
    let text = document.createTextNode(key + " - " + data[key]);
    let li = document.createElement("li");
    li.appendChild(text);
    ul.appendChild(li);
  }
  document.body.appendChild(ul);
}
