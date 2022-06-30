

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

//makes the Timer window slowly disappear
// const changeWindow =()=>{

//         console.log("changeWindow function")
//         document.getElementById("timer").style.cssText = "opacity : 0; transition-duration : 2.5s"
//         counterFunction()     
// }


//countdown window until 0
let counterFunction = async () => {

        
        let c = document.getElementById("counterNumber")
        console.log("counter : " + c.innerHTML)

        
                      
        
         //every second, decrease c, and allow scrolling back after end of the timer

        return new Promise((resolve) => {

                let decreaseTimer = () =>{
                if(c.innerHTML > 0){
                        c.innerHTML--;
                        console.log("counter : " + c.innerHTML);
                }}

                if(c.innerHTML === 0){
                        resolve("Done !")
                        // allowScrolling()
                }


                setInterval(decreaseTimer,1000)
                

        })
       

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

//when user click on Go button, remove first blue circle and start the timer
const startSession = () => {


readyMessageCircle.classList.add("hidden")
counterCircle.classList.remove("hidden")


counterFunction()


}




async function userMeditationTimer () {
        let result = await counterFunction()
        console.log("counterFunction finished")
        
 }



}    












