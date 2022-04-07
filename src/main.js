import App from "./components/App.js";
import pokemones from "./data/pokemon/pokemon.js";

console.log(pokemones.items);

/*let uncoveredCards= 0;
let target1= null;
let target2= null;
let firstResult= null;
let secondResult= null;
let movements= 0;
let tempo= false;
let timerTime= 30;
let countdownTime = null;

let showMovements= document.getElementById("movements");
let time = document.getElementById("time");

function countTime(){
  setInterval(()=>{
timerTime--;
time.innerHTML = "Tiempo: ${timerTime} segundos"
if(timerTime ==0){
clearInterval(countdownTime);
}  
},1000)
}

//Destapar tarjetas
function uncover(id){
  if(tempo == false){
  countTime();
tempo=true;
  }
  uncoveredCards++;
  console.log(uncoveredCards);

  if(uncoveredCards ==1){
target1= document.getElementById(id);
firstResult= mix[id];
target1.innerHTML= firstResult;
target1.disabled=true;
  }else if(uncoveredCards ==2){
target2=document.getElementById(id);
secondResult=mix[id];
target2.innerHTML= secondResult;

target2.disabled=true;

movements++;
showMovements.innerHTML=  `Movements": ${movements} `;
  
if(firstResult == secondResult){
  uncoveredCards= 0;
} else {
  setTimeout(()=>{
    target1.innerHTML="";
    target2.innetHTML= "";
    target1.disabled= false;
    target2.disabled= false
    uncoveredCards =0
  },2000)

}
}
  }*/



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

//mostrar data en pantalla + carta de frente y atrás por medio de interpolación de variables
/*const print = document.getElementById("marginNeon");
mix.forEach((unoporuno, index)=>{
  
  const section = document.createElement('section');
  section.textContent='YA es viernes'
  section.id=index
  section.classList= 'detras'
  section.addEventListener('click', ()=>{
    section.classList.remove("detras")
  section.classList='cara'
  })
  print.appendChild(section)
})*/


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
for (const cartas of card) {
  cartas.addEventListener('click',function (){
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
    //compararInfoDeId2= true; //compara que hagan el match
  


  if (idCardOne===idCardTwo){
    console.log("son iguales")
    //Aqui entra cuando las cartas son iguales
    //
  } else {
    //Aqui entra cuando las cartas no son iguales
    setTimeout(() => {
      savePokemon.parentNode.classList.remove("is-flipped");  
      savePokemon2.parentNode.classList.remove("is-flipped");
    }, 1000);





  savePokemon.disabled= false;
  savePokemon2.disabled= false;
  eventFire (compararInfoDeId1,'click');
  eventFire (compararInfoDeId2,'click');
  
  

  contadorDeTarjetas= 0;

  }
} 

}
  })
}
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


//Variables principales de las tarjetas de click 
let contadorDeTarjetas= 0;
let savePokemon= null;
let savePokemon2= null;
let idCardOne = null;
let idCardTwo = null;



//Savepokemon para guardar la información de la primera carta a la que le diste click

// let selectCard= document.getElementsByClassName("cara");
// console.log(document.getElementsByClassName("is-flipped"))
//manipulación de cartas

//funcion para voltear sino son iguales despues del click
function eventFire(el, etype){
  if (el.fireEvent) {
    el.fireEvent("on" + etype);
  } else {
    var evObj = document.createEvent("Events");
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}




/*let movements = document.getElementById("movements");
  for(let index = 0; index < card.length; index++) function uncover (index){
    card[index].addEventListener( 'click', function(){
uncoveredCards++;
if (uncoveredCards==1){
  card.classList.toggle("is-flipped");
}

    });
*/