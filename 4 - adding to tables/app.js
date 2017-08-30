
document.body.onload = ()=>{addPokemon(pokemonToAdd)};

let pokemonToAdd = [
  {
    id:10,
    name:"Caterpie",
    type:"Bug"
  },
  {
    id:25,
    name:"Pikachu",
    type:"Electric"
  },
  {
    id:27,
    name:"Sandshrew",
    type:"Ground"
  },
]

function addPokemon (data) {
  // Use the data that you take in and itterate through it and add each pokemon to the table.
  let tbody = document.querySelector("tbody");
  for(let obj of data) {
    let row = document.createElement("tr");
    for (let key in obj) {
      let td = document.createElement("td");
      let text = document.createTextNode(obj[key]);
      td.appendChild(text);
      row.appendChild(td);
    }
    tbody.appendChild(row);
  }
}
