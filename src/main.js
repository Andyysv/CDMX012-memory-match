import App from "./components/App.js";
import pokemones from "./data/pokemon/pokemon.js";

console.log(pokemones.items);

//Duplicado de data
const pokemon1 = pokemones.items.slice();
const pokemon2 = pokemones.items.slice();

const pokemon3 = pokemon1.concat(pokemon2);
console.log(pokemon3);

//Mezcla de cartas (fisher yates)
const mix = pokemon3.sort(() => {
  //ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado. La ordenación no es necesariamente estable. El modo de ordenación por defecto responde a la posición del valor del string de acuerdo a su valor Unicode
  return Math.random() - 0.5; //Math. random() retorna un punto flotante, un número pseudo-aleatorio dentro del rango [0, 1). Esto es, desde el 0 (Incluido) hasta el 1 pero sin incluirlo (excluido), el cual se puede escalar hasta el rango deseado. random() devuelve un número aleatorio entre 0.0 y 1.0, excluido este último valor
});

//mostrar data en pantalla + carta de frente y atrás por medio de interpolación de variables
export let showCards = "";
for (let index = 0; index < 18; index++) {
  const print = document.getElementById("marginNeon");
  showCards += `
  <section class="carta-box">
  <section class="carta">    
    <section class="cara">
      <img src="${"../MM/back.png"}" width="200" height="250px">
    </section>
    <section class="cara detras">
      <img src="${mix[index].image}" width="200" height="250px"> <h3> ${mix[index].id} </h3> 
    </section>    
  </section>
</section>
  `;

  /*<section class="cardPrueba hidden">
<section class="front" id="front"> <img id="image" src = "" <h3> ${mix[index].id} </h3> 
</div>
<div class= "back"> 
<img id=${index} src = "${"../MM/back.png"}" class=imagenBack>
</div>
</section>*/

  print.innerHTML = showCards;
}
//funcion para segun ocultar cartas
const showPokemon = document.getElementById("front");
showPokemon.addEventListener("click", () => {
  document.getElementById("cardPrueba").style.display = "none";
  document.getElementById("cardPrueba").style.display = "block";
});
