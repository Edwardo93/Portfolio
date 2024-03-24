const flip = document.querySelectorAll(".container div")
let count = 1
// document.querySelectorAll('.flip-card')
// Add event listener to trigger the function when clicked



for(let cardd of flip){

    //Starting the game with the cards revealed for 3 seconds
    //Starts the game with the classes added and removed after 3s
    cardd.classList.add("flip-card")
    setTimeout(() => {
     cardd.classList.remove("flip-card")},1000)

     // Click event that reveals the Cards
    cardd.addEventListener("click", function test(){
        cardd.classList.toggle("flip-card")
    
        // Get the number of elements with the class "flip-card"
        const flipCards = document.querySelectorAll('.flip-card');
        //The if that keeps the cards reveald for 2 sec as long as there are 2 active
        //if it's only 1, it stays active until a second one is pressed
        if (flipCards.length > 1) {
            setTimeout(() =>{
            for(let card of flipCards){
                card.classList.remove('flip-card');
            }}, 2000)
  
         }
         // The if that makes sure no more than 2 cards are revealed at the same time
         // 
         if(flipCards.length === 3){
            cardd.removeEventListener("click", test());
         }

         if(flipCards.length >1){
         for(let card of flipCards){
            if(flipCards.length>1){
            // card.style.transform = "scale(1.1)"
            setTimeout(() =>{
                    card.style.visibility = "hidden"

                }, 1000)
            }
         }
        }
          
})
}
