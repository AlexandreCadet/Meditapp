

let userSelectedTime;
let userSound;


// function to load the full html page BEFORE the javascript file
window.onload=function(){
     
const goButton = document.getElementById("okButton").addEventListener("click",function() {setTime()})
const carouselWindow = document.querySelector(".carousel")
const counterWindow = document.getElementById("counterWindow")

const startButton = document.getElementById("goButton").addEventListener("click", function(){startSession()})


// blockScrolling()







//--------------------SCROLLING FUNCTIONS-------------------//

//block or allow user to scroll, following every step.
function allowScrolling(){
        document.body.classList.remove("stop-scrolling")
}

function blockScrolling(){
        document.body.classList.add("stop-scrolling")
}


// automatic scroll to the specified element
function scrollIntoNextElement(element){

element.scrollIntoView({behavior:"smooth", block:"center"})
}




//get the time from user input
const setTime =()=>{
        userSelectedTime = document.getElementById("inputTime").value
        console.log("userTime : "+ userSelectedTime)
        scrollIntoNextElement(carouselWindow)
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
        scrollIntoNextElement(counterWindow)}); 
        
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
        }


}

}    












