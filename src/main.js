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

let timerTime= 30;
let countdownTime = null;
let initialTimerTime= 30;
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
    let oneBlockedCard= document.getElementById(i);
    oneBlockedCard.innerHTML= mix[i];
    oneBlockedCard.disabled= true;
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
  //savePokemon.disabled= false;
  //savePokemon2.disabled= false;
  //eventFire (idCardOne,'click');
  //eventFire (idCardTwo,'click');
  
  //contadorDeTarjetas= 0;

  }
} 

}
  )}

//La función toogle actúa como un interruptor, de manera que acepta dos parámetros, que serán dos funciones, una para cuando actives el interruptor y otra para cuando lo desactives

/*let selections = [];
//Para que puedas dar click sobre la tarjeta
function selectCard(index) {
  let carta = document.getElementById("carta" + index)
  if (carta.style.transform != "rotateY(180deg)") {
    carta.style.transform = "rotateY(180deg)"
    selections.push(index);
  }
  if (selections.length == 2) {
    deselect(selections);
      selections = [];
  }
}
console.log(selectCard)*/

//El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.

//Para que se queden las que coinciden
/*let selections = [];
function deselect(selections) {
  setTimeout(() => {
      let trasera1 = document.getElementById("cara detras" + selections[0])
      let trasera2 = document.getElementById("cara detras" + selections[1])
      if (trasera1.innerHTML != trasera2.innerHTML) {
          let tarjeta1 = document.getElementById("cara detras" + selections[0])
          let tarjeta2 = document.getElementById("cara detras" + selections[1])
          tarjeta1.style.transform = "rotateY(0deg)"
          tarjeta2.style.transform = "rotateY(0deg)"
      }else{
          trasera1.style.background = "plum"
          trasera2.style.background = "plum"
      }
  }, 1000);
}*/

/*let cardChosenId= []

function checkForMatch(){
  let cards = document.querySelectorAll("id");
  const optionOneId= cardChosenId[0];
  const optionTwoId= cardChosenId[1]

}*/

//Para que veamos si coinciden las cartas
/*const checkCards = (card) => {
  const clickedCard= card.target;
  const flippedCards= document.querySelectorAll(".is-flipped")
  clickedCard.classList.add("is-flipped");

if (flippedCards.length ===2){
  if (flippedCards[0].getAttribute("id")===flippedCards[1].getAttribute("id"))
  }
}*/

/*let selections = [];
const card= document.getElementsByClassName("carta");
for(let index = 0; index < card.length; index++){
  card[index].addEventListener( 'click', function() {
  card[index].classList.toggle('is-flipped');
  selections.push(index);
});
if (selections.length == 2) {
  deselect(selections);
    selections = [];
}
}

//El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.

function deselect(selections) {
  setTimeout(() => {
      let trasera1 = document.getElementByClassName("carta" + selections[0])
      let trasera2 = document.getElementByClassName("carta" + selections[1])
      if (trasera1.innerHTML != trasera2.innerHTML) {
          let tarjeta1 = document.getElementByClassName("carta" + selections[0])
          let tarjeta2 = document.getElementByClassName("carta" + selections[1])
          tarjeta1.style.transform = "rotateY(0deg)"
          tarjeta2.style.transform = "rotateY(0deg)"
      }else{
          trasera1.style.background = "plum"
          trasera2.style.background = "plum"
      }
  }, 1000);
}*/
/*let score = document.getElementById("score");
let flips= 0;*/


//Savepokemon para guardar la información de la primera carta a la que le diste click

// let selectCard= document.getElementsByClassName("cara");
// console.log(document.getElementsByClassName("is-flipped"))
//manipulación de cartas

//funcion para voltear sino son iguales despues del click
 /*function eventFire(el, etype){
  if (el.fireEvent) {
    el.fireEvent("on" + etype);
  } else {
    var evObj = document.createEvent("Events");
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}*/




/*let movements = document.getElementById("movements");
  for(let index = 0; index < card.length; index++) function uncover (index){
    card[index].addEventListener( 'click', function(){
uncoveredCards++;
if (uncoveredCards==1){
  card.classList.toggle("is-flipped");
}

    });
*/
