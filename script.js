


let time;


// function to load the full html page before the javascript file
window.onload=function(){

const goButton = document.getElementById("buttonOk").addEventListener("click",function() {setTime()})



}


//get the time from user input
const setTime =()=>{
        time = document.getElementById("inputTime").value
        console.log(time)
        changeWindow()
}

//makes the Timer window slowly disappear
const changeWindow =()=>{

        console.log("changeWindow function")
        document.getElementById("timer").style.cssText = "opacity : 0; transition-duration : 2.5s"
        counterFunction()     
}


//countdown window until 0
let counterFunction = async () => {

        +
        let c = document.getElementById("counterNumber")
        console.log("counter : " + c.innerHTML)

        
                      
        
         //every second, decrease c

        return new Promise((resolve) => {

                let decreaseTimer = () =>{
                if(c.innerHTML > 0){
                        c.innerHTML--;
                        console.log("counter : " + c.innerHTML);
                }}

                if(c.innerHTML === 0){
                        resolve("Done !")
                }


                setInterval(decreaseTimer,1000)
        })
       

}


       
    

 


async function userMeditationTimer () {
        let result = await counterFunction()
        console.log("counterFunction finished")
        
 }



    












