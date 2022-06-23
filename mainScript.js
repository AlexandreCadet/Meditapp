


let time;








// function to load the full html page BEFORE the javascript file
window.onload=function(){
     
const goButton = document.getElementById("buttonOk").addEventListener("click",function() {setTime()})
const pickMusicWindow = document.getElementById("slide")
const counterWindow = document.getElementById("counter")



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
        time = document.getElementById("inputTime").value
        console.log("userTime : "+ time)
        counterFunction()
        scrollIntoNextElement(pickMusicWindow)
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


       
    

 


async function userMeditationTimer () {
        let result = await counterFunction()
        console.log("counterFunction finished")
        
 }



}    












