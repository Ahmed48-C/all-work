let popupCounter = 5;
var popupTimer = document.getElementById("popup-timer");
var popup = document.querySelector(".popup");

function popupBox(){
    popup.style.display = "flex";
    setInterval(function(){
        popupCounter--;
        if(popupCounter >= 0) {
            popupTimer.innerHTML = popupCounter;
        }

        if(popupCounter < 0){
            popup.style.display = "none";
        }
    },1000);
}
window.onload=popupBox()

let counter = 15;
var button = document.getElementById("button");

var element = document.querySelector(".score span b");
var value = 0;

var highScore = document.querySelector(".highscore span b");
var valueHS = 0;

timer = document.getElementById("count");

var restartBtn = document.getElementById("restart-button");
var gameSpace = document.getElementsByClassName("game-space");

button.addEventListener("click", function(event){
    if(!button.classList.contains("started")){
        setInterval(function(){ 
            if(value > 0)
            counter--;
            
            if(counter >= 0) {
                timer.innerHTML = counter;
            }
            
            if(counter <= 0){
                button.style.opacity = "0.6"
                button.style.pointerEvents = "none"
            }

            if(value >= valueHS){
                valueHS = value;
                highScore.innerHTML = valueHS;
            }
        }, 1000);
    }

    if(valueHS == 0){
        setInterval(function(){ 
            if(value >= valueHS){
                valueHS = value;
                highScore.innerHTML = valueHS;
            }
            localStorage.setItem('hs', valueHS);
            console.log(localStorage.getItem("hs"));
        }, 10);
    }

    if(!button.classList.contains("started")){
        valueHS = localStorage.getItem("hs");
        highScore.innerHTML = localStorage.getItem("hs");
    }
    
    const i=Math.floor(Math.random()*1100 )+1 ;
    const j=Math.floor(Math.random()*500)+1 ;

    button.style.left=i+"px"
    button.style.top=j+"px"    

    button.classList.add("started");


    ++value;
    document.querySelector(".score span b").innerHTML = value;
})

// function increaseScr() {
//     ++value;
//     document.querySelector(".score span b").innerHTML = value;
// }

restartBtn.addEventListener("click", function(event){
    value = 0
    element.innerHTML = 0;
    counter = 15;
    timer.innerHTML = 15; 
    button.style.opacity = "1"
    button.style.pointerEvents = "all"
    button.style.left = "633px"
    button.style.top = "311px"
})
// var restartBtn = document.getElementById("restart-button");
// restartBtn.addEventListener("click", function(event){
    
// })

// button.addEventListener("click", moveClick)

// function moveClick(){
//     const i=Math.floor(Math.random()*500)+1 ;
//     const j=Math.floor(Math.random()*500)+1 ;

//     button.style.left=i+"px"
//     button.style.top=j+"px"
// }
