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

const pokemon3 = pokemon1.concat(pokemon2);
console.log(pokemon3);

//Mezcla de cartas (fisher yates)
const mix = pokemon3.sort(() => {
  //ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado. La ordenación no es necesariamente estable. El modo de ordenación por defecto responde a la posición del valor del string de acuerdo a su valor Unicode
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
  <section class="carta" id="carta${index}">    
    <section class="cara cardCyD">
      <img src="${"../MM/back.png"}">
    </section>
    <section class="cara detras cardCyD" id="cara detras${index}">
      <img src="${mix[index].image}"> <h3> ${mix[index].id} </h3> 
    </section>    
  </section>
</section>
  `;
  print.innerHTML = showCards;
}


//funcion para voltear la tarjeta con un click
const card= document.getElementsByClassName("carta");
for(let i = 0; i < card.length; i++){
  card[i].addEventListener( 'click', function() {
  card[i].classList.toggle('is-flipped');
});
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
console.log(selectCard)

//El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.

//Para que se queden las que coinciden
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
