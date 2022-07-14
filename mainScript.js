

let userSelectedTime = 5;
let userSound;


// function to load the full html page BEFORE the javascript file
window.onload=function(){
     
const goButton = document.getElementById("okButton").addEventListener("click",function() {setTime()})
const firstCircle = document.getElementById("backgroundTimer")
const carouselContainer = document.getElementById("carouselContainer")
const carouselWindow = document.querySelector(".carousel")
const counterWindow = document.getElementById("counterWindow")

const startButton = document.getElementById("goButton").addEventListener("click", function(){startSession()})


//seconds of the timer
let minutes = document.getElementById("userMinutes");
let seconds = document.getElementById("userSeconds");



// blockScrolling()







//--------------------TRANSITION TO NEXT ELEMENT-------------------//



function transitionToNextElement(element1, element2){

element1.classList.add("transitionedOut")
setTimeout(() => {
element1.style.display = "none"
element2.classList.add("transitionedIn")
element2.classList.remove("hidden")
},1000)


}




//get the time from user input
const setTime =()=>{
        userSelectedTime = document.getElementById("inputTime").value
        console.log("userTime : "+ userSelectedTime)
        
        transitionToNextElement(firstCircle,carouselContainer)
}







       
    
//-------------------------------------------------------------------------------------//
//----------------------!!!-------------CAROUSEL-------------!!!-----------------------//
//-------------------------------------------------------------------------------------//
 
//CAROUSEL BUTTON NAVIGATION

//array from buttons
const buttonArray = Array.from(document.querySelectorAll(".carousel-button"))

console.log("buttonArray :"+ buttonArray)

//array from items

const itemArray = Array.from(document.querySelectorAll(".carousel-item"))


//remove actual selection and replace by user selection
const changeSelectionCarousel = (n) => {

        for(i=0;i<buttonArray.length;i++){
        buttonArray[i].classList.remove("carousel-button-selected")
        itemArray[i].classList.remove("carousel-item-selected")
         }


        console.log(n)
        buttonArray[n].classList.add("carousel-button-selected")
        itemArray[n].classList.add("carousel-item-selected")


        }


//add EventListener on buttons

buttonArray.forEach(function callback(button, i){
        button.addEventListener("click", function(){
                changeSelectionCarousel(i)}) 
        
                console.log("buttonArray index : " + i)
})


//add Eventlistener on images and scroll user into next window
itemArray.forEach(function callback(item, i){
        item.addEventListener("click", function(){
        userSound = itemArray[i]
        console.log("user sound selection : " + userSound)
        transitionToNextElement(counterWindow)}); 
        
})


//-------------------------------------------------------------------------------------//
//-----------------------!!!----------SECTION TIMER----------!!!-----------------------//
//-------------------------------------------------------------------------------------//


let readyMessageCircle = document.getElementById("readyMessageCircle")
let counterCircle = document.getElementById("counterCircle")
let finalTimer = document.getElementById("finalTimer")
let c = document.getElementById("countdownNumber")




//countdown window until 0
let countdownFunction = () => {
        
        var interval = setInterval(countdown,1000)

        function countdown(){
                c.innerHTML --;
                console.log("countdown : " + c.innerHTML)
                if(c.innerHTML == 0){
                        clearInterval(interval)
                        changeWindow()
                }
                
        }
}


//when user click on Go button, remove first blue circle and start the timer
const startSession = () => {


readyMessageCircle.classList.add("hidden")
counterCircle.classList.remove("hidden")


countdownFunction()


}

//makes the Timer window slowly disappear and final timer appears
const changeWindow =()=>{

        console.log("changeWindow function")
        counterCircle.style.cssText = "opacity : 0; transition-duration : 2.5s"

        setTimeout(finalTimerWindow, 2500)

        function finalTimerWindow(){
                console.log("Final Timer Window")
                counterCircle.classList.add("hidden")
                finalTimer.classList.remove("hidden")
                meditationTimer()
        }


}




const meditationTimer = () =>{

        minutes.innerText = userSelectedTime -1;
       var interval = setInterval(decreaseTimer,1000)


       function decreaseTimer(){
        seconds.innerText --;

        if(seconds.innerText == 0){
        seconds.innerText += 59
        minutes.innerText --;
        console.log("seconds = 0 !")
       }
        if(minutes.innerText < 0){
                clearInterval(interval)
                console.log("timer finished")
                document.getElementsByClassName("timer").classList.add("hidden")
                document.getElementsByClassName("finalMessage").classList.remove("hidden")
        }

}
}




//faire une fonction pour afficher countdown comme ceci :  9 : 59
//le chiffre de gauche est le userSelectedTime - 1, à droite sont les secondes
//chaque 60 secondes écouléees, userSelectedTime --; et seconds += 59 ( reset les secondes )
//if userSelectedTime < 0, arrêt du timer.


}    












