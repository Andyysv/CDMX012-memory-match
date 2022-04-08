import App from "./components/App.js";
import pokemones from "./data/pokemon/pokemon.js";

console.log(pokemones.items);


//Variables principales de las tarjetas de click 
let contadorDeTarjetas= 0;
let savePokemon= null;
let savePokemon2= null;
let idCardOne = null;
let idCardTwo = null;

//OTRO VIDEO
let movements= 0;
let score= 0;
let showMovements= document.getElementById("movements");
let showHits= document.getElementById("score");
let tempo= false;

//Duplicado de data
const pokemon1 = pokemones.items.slice();
const pokemon2 = pokemones.items.slice();
// slice: Slice, como su nombre indica, toma un “trozo” de un array, indicado por un índice de inicio y un índice final (no incluido) Slice no modifica el array original y hace una copia “superficial” con lo que si el array contiene referencias a objetos, slice no clonará esos objetos, sino solo la referencia

const pokemon3 = pokemon1.concat(pokemon2);
// concat: El método concat() se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.
console.log(pokemon3);

//Mezcla de cartas (fisher yates)
const mix = pokemon3.sort(() => {
  // sort: ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado. La ordenación no es necesariamente estable. El modo de ordenación por defecto responde a la posición del valor del string de acuerdo a su valor Unicode
  return Math.random() - 0.5; //Math. random() retorna un punto flotante, un número pseudo-aleatorio dentro del rango [0, 1). Esto es, desde el 0 (Incluido) hasta el 1 pero sin incluirlo (excluido), el cual se puede escalar hasta el rango deseado. random() devuelve un número aleatorio entre 0.0 y 1.0, excluido este último valor
});

//Imprimir data en pantalla y la creación de cartas
export let showCards = "";
for (let index = 0; index < 18; index++) {
  const print = document.getElementById("marginNeon");
  showCards += `
  <section class="carta-box">
  <div id="carta${index}" class="carta" >    
    <div class="cara adelante">
      <img src="${"../MM/back.png"}">
    </div>
    <div id="${index}" class="cara detras">
      <img src="${mix[index].image}"> <h3> ${mix[index].id} </h3> 
    </div>    
  </div>
</section>
  `;
  print.innerHTML = showCards;
}

//funcion para voltear la tarjeta con un click
const card= document.getElementsByClassName("carta");
// for(let index = 0; index < card.length; index++){
//   card[index].addEventListener( 'click', function() {
//   card[index].classList.toggle('is-flipped');
// });
// }

let timerTime=  80;
let countdownTime = null;
let initialTimerTime= 80;
let time = document.getElementById("time");

export function countTime(){
  countdownTime= setInterval(()=>{
  timerTime--;
  time.innerHTML = `Time: ${timerTime} seconds`
  if(timerTime ==0){
    clearInterval(countdownTime);
    targetBlock()
  }  
  },1000)
}

//aquí deberían voltearse todas las tarjetas porque el tiempo se termino
export function targetBlock(){
  for(let i = 0; i <=17; i++){
    let oneBlockedCard= document.getElementById(`carta${i}`);
    oneBlockedCard.className = "carta is-flipped";
    /*let oneBlockedCard= document.getElementById(i);
    oneBlockedCard.innerHTML= mix[i];
    oneBlockedCard.disabled= true;*/
  }
}


for (const cartas of card) {
  cartas.addEventListener('click',function (){

    if(tempo == false){
      countTime();
    tempo=true;
    }

  contadorDeTarjetas++;
  console.log({contadorDeTarjetas});
  if (contadorDeTarjetas ==1){ //== igualdad
    cartas.classList.toggle("is-flipped");
    savePokemon = cartas; //firstElementChild: viene toda la información almacenada
    idCardOne= cartas.innerText;
    console.log({idCardOne})
    
  //innerText es donde la información que se va a comparar pero en general todo lo que contiene la carta
    //compararInfoDeId1= true;
  } else {
  if (contadorDeTarjetas==2){
    cartas.classList.toggle("is-flipped");
    savePokemon2 = cartas;
    idCardTwo= cartas.innerText;
    console.log({idCardTwo})
    //compararInfoDeId2= true; //compara que hagan el match
  movements++;
  showMovements.innerHTML=  `Movements: ${movements} `;

  if (idCardOne===idCardTwo){
    console.log("son iguales")
    contadorDeTarjetas = 0; 
    score++;
    showHits.innerHTML=  `Hits: ${score} `;

    if (score==9) {
      clearInterval(initialTimerTime)
      showHits.innerHTML=  `Hits: ${score} 😈🤘🏻`;
      time.innerHTML = `That is awesome! You did it in: ${initialTimerTime-timerTime} seconds✨`
      showMovements.innerHTML=  `Movements: ${movements} 😎🙀🎉`;

    }
    //Aqui entra cuando las cartas son iguales
    //
  } else {
    //Aqui entra cuando las cartas no son iguales
    //if (idCardOne != idCardTwo)
    setTimeout(() => { savePokemon.classList.toggle("is-flipped"), 
        savePokemon2.classList.toggle("is-flipped");}, 1300);
        contadorDeTarjetas = 0;   

    
      }
    }
  } 
}
)}

//La función toogle actúa como un interruptor, de manera que acepta dos parámetros, que serán dos funciones, una para cuando actives el interruptor y otra para cuando lo desactives
