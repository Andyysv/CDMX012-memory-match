import App from './components/App.js';
import pokemones from './data/pokemon/pokemon.js';
document.getElementById('root').appendChild(App());

console.log(pokemones.items);

//Duplicado de data
const pokemon1 = pokemones.items.slice();
const pokemon2 = pokemones.items.slice();

const pokemon3 = pokemon1.concat(pokemon2);
console.log(pokemon3); 



//Mezcla de cartas (array)
function mix () { 
    for (let i= pokemon3.length -1; i>0; i--){
    let r = Math.floor(Math.random() * (i + 1));
    pokemon3 [i], pokemon3 [r] = [pokemon3[r], pokemon3[i]];
}
console.log(pokemon3)
}

mix ([pokemon3]);
//Random
/*const randomCard = () =>{
    const cardData = getData ();

}*/

//Mostrar las cartas
/*const pokemonCard = (pokemon) => {
const card = document.createElement("div");
pokemon.forEach (pokemon => { 
const face = document.createElement ("img");
const back = document.createElement("div");
card.classList = "card";
face.classList = "face";
back.classList = "back";
face.src = pokemon.image;
const name = document.createElement("caption");
name.textContent= pokemon.id;
pokemonCards.appendChild(card);
card.appendChild(face);
card.appendChild(back);
})
return pokemonCards;
}*/
