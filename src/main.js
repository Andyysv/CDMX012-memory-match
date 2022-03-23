import App from './components/App.js';
import pokemones from './data/pokemon/pokemon.js';

console.log(pokemones.items);

//Duplicado de data
const pokemon1 = pokemones.items.slice();
const pokemon2 = pokemones.items.slice();

const pokemon3 = pokemon1.concat(pokemon2);
console.log(pokemon3); 



//Mezcla de cartas (fisher yates)
const mix = pokemon3.sort(() => { //ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado. La ordenación no es necesariamente estable. El modo de ordenación por defecto responde a la posición del valor del string de acuerdo a su valor Unicode
    return Math.random() - 0.5; //Math. random() retorna un punto flotante, un número pseudo-aleatorio dentro del rango [0, 1). Esto es, desde el 0 (Incluido) hasta el 1 pero sin incluirlo (excluido), el cual se puede escalar hasta el rango deseado. random() devuelve un número aleatorio entre 0.0 y 1.0, excluido este último valor
});
/*function fisherYatesShuffle(pokemon3){
    for(let i =pokemon3.length-1 ; i>0 ;i--){
        let j = Math.floor( Math.random() * (i + 1) ); //random index
        [pokemon3[i],pokemon3[j]]=[pokemon3[j],pokemon3[i]]; // swap
    }
}
let tmpArray = [pokemon3];
fisherYatesShuffle(tmpArray);
console.log(tmpArray);*/
//var tmpArray = [1, 3, 5];
//fisherYatesShuffle(tmpArray);


/*function mix () { 
    for (let i= pokemon3.length -1; i>0; i--){
    let r = Math.floor(Math.random() * (i + 1));
    pokemon3 [i], pokemon3 [r] = [pokemon3[r], pokemon3[i]];
}
console.log(pokemon3)
}

mix ([pokemon3]);*/
//Random
/*const randomCard = () =>{
    const cardData = getData ();

}*/
/*const section = document.querySelector("section");
//Función de las cartas
const pokemonCard = () => {
    const cardData = mix();
    //HTML
cardData.forEach((item) => {
    const card = document.createElement("div");
    const face = document.createElement ("img");
    const back = document.createElement("div");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";
    //info de las cartas
    face.src=item.image;
    //Cards section
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

});
}; 
inner.HTML= pokemonCard();*/
export let showCards = "";
for (let index = 0; index < 18; index++) {
  const print = document.getElementById("marginNeon");
  showCards += ` <section class="cardPrueba esconder">
  <img id="image" src = "${mix[index].image}"> 
</section> `;

  print.innerHTML = showCards;
}