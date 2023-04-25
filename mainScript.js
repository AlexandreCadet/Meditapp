


let userSelectedTime;
let userSound;


// function to load the full html page BEFORE the javascript file
window.onload=function(){

 //get the time from user input
const setTime =()=>{
        userSelectedTime = document.getElementById("inputTime").value

        if(userSelectedTime === null || !/^[0-9]+$/.test(userSelectedTime) ){
                alert("Please enter a numeric value ( 1 to 120 )")
              }
        console.log("userTime : "+ userSelectedTime)
        
        transitionToNextElement(pickTime,pickMusic)
}



document.getElementById("goButton").addEventListener("click",function() {setTime()})
const pickTime = document.getElementById("pickTime")
const pickMusic = document.getElementById("pickMusic")
const finalMessageDiv = document.getElementById("finalMessageDiv")

const goAgainMessage = document.getElementById("goAgainMessage").addEventListener("click",function(){transitionToNextElement(finalMessageDiv,pickTime)})

// const startButton = document.getElementById("goButton").addEventListener("click", function(){startSession()})


//seconds of the timer
let minutes = document.getElementById("userMinutes");
let seconds = document.getElementById("userSeconds");



//--------------------TRANSITION TO NEXT ELEMENT-------------------//


function transitionToNextElement(element1, element2){

element1.style.animation = "moveOut 1s ease-in-out"
setTimeout(() => {
element1.style.display = "none"
element2.style.animation = "moveIn 1s ease-in-out"
element2.style.display = "flex"
},1000)

//also start the countdown 
if(element2 == countdown){
setTimeout(countdownFunction, 1000)
        
}

if(element2 == finalTimer){
        setTimeout(meditationTimer, 1000)  
}
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


//add Eventlistener on images

itemArray.forEach(function callback(item, i){
        item.addEventListener("click", function(){
        userSound = itemArray[i]
        console.log("user sound selection : " + userSound)

//when sound is chosen by user, go to the next window
        transitionToNextElement(pickMusic,countdown)}); 
        
})


//-------------------------------------------------------------------------------------//
//-----------------------!!!----------SECTION TIMER----------!!!-----------------------//
//-------------------------------------------------------------------------------------//


let countdown = document.getElementById("countdown")
let finalTimer = document.getElementById("finalTimer")
let countdownNumber = document.getElementById("countdownNumber")




//countdown window until 0
let countdownFunction = () => {
        
        var interval = setInterval(countdownTimer,1000)

        function countdownTimer(){
                countdownNumber.innerHTML --;
                console.log("countdown : " + countdownNumber.innerHTML)
                if(countdownNumber.innerHTML == 0){
                        clearInterval(interval)
                        transitionToNextElement(countdown,finalTimer)

                        
                }
                
        }
}







const meditationTimer = () =>{

        minutes.innerText = userSelectedTime;
        seconds.innerText = 0
        var interval = setInterval(decreaseTimer,1000)


        function decreaseTimer(){

                var timerHasFinished = false;

                if(minutes.innerText == 0 && seconds.innerText == 0){
                        clearInterval(interval)
                        console.log("timer finished")
                        timerHasFinished = true;
                        
                } else if(seconds.innerText == 0 && minutes.innerText > 0){
                        seconds.innerText += 60
                        minutes.innerText --;
                        console.log("seconds = 0 !")
                }

                if(timerHasFinished){
                        transitionToNextElement(finalTimer,finalMessageDiv)
                        timerHasFinished = false;
                }else{
                        seconds.innerText --;
                        console.log("seconds = " + seconds.innerText);
                }
                





}
}


}    












