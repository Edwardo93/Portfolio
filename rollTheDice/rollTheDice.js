// Create an array of images to use them by the index
let images = ["images/dice-01.svg",
"images/dice-02.svg",
"images/dice-03.svg",
"images/dice-04.svg",
"images/dice-05.svg",
"images/dice-06.svg"];
let dices = document.querySelectorAll("img");
const button = document.querySelector("button")

// Generate animations and random numbers for the dices
button.addEventListener("click", ()=>{
   for (let dice of dices){
    dice.classList.add("shake")
   }
   setTimeout(() => {
    for (let dice of dices){
        dice.classList.remove("shake")
       }
   }, 2000);

// Generate the random numbers
    let diceOneValue = Math.ceil(Math.random()*6);
    let diceTwoValue = Math.ceil(Math.random()*6);
// Select each dice so we can assign a number
    let diceOne = document.querySelector("#dice-1")
    let diceTwo= document.querySelector("#dice-2")

// Update the corresponding dice img according to the random number
setTimeout(() =>{
   diceOne.setAttribute("src", `${images[diceOneValue-1]}`)
   diceTwo.setAttribute("src", `${images[diceTwoValue-1]}`)

   document.querySelector("#total").innerHTML = `You rolled ${diceOneValue + diceTwoValue}`
}, 2000)
})  






