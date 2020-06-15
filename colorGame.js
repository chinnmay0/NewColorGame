var numSquares = 6;
var colors = [];
var squares = document.querySelectorAll(".square");
var pickedColor; //The color you have to picked
var colorDisplay = document.getElementById("colorDisplay"); //To change the color appreaing in h1
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    //mode Buttons event listeners
    for(var i=0;i<modeButtons.length;i++){
        modeButtons[i].addEventListener("click",function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent === "Easy"){
                numSquares = 3;
            }else{
                numSquares = 6;
            }
            reset();
        });
    }

    for(var i=0;i<squares.length;i++){
    
        //add quick listeners to squares
        squares[i].addEventListener("click",function(){
            //grab color of clicked color
            var clickedColor = this.style.backgroundColor;
            //compare color to pickedColor
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again!"
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!";
            }
        });
    }
    reset();
}


function reset(){
    colors = generateRandomColors(numSquares);
//pick a new random color from array
pickedColor = pickColor();
resetButton.textContent = "New Colors";
//chane colorDisplay to match pickedColor
colorDisplay.textContent = pickedColor;
messageDisplay.textContent = "";
//change colors of squares
for(var i=0;i<squares.length;i++){
    if(colors[i]){
        squares[i].style.display = "block";
        squares[i].style.backgroundColor = colors[i];
    }else{
        squares[i].style.display = "none";
    }
}
    h1.style.backgroundColor = "steelblue";
}

// easyBtn.addEventListener("click",function(){
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares); //When we click the easy button we need to generate 3 random colors
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i=0;i,squares.length;i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         }else{
//             squares[i].style.display = "none";
//         }
//     }
// });
// hardBtn.addEventListener("click",function(){
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares); //When we click the hard button we need to generate 6 random colors
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i=0;i,squares.length;i++){
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//     }
// });



resetButton.addEventListener("click",function(){
//generate all new colors
   reset();
});
colorDisplay.textContent = pickedColor; // update colorDisplay content by picked color

//loop through every sqaure and assign each one of them a color from colors[] array

function changeColors(color){                     // function to change the color of all squares when we guess correctly!
    //loop through all squares
    //change each color to match given color
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor = color;
    }
}
function pickColor(){                            //function to randomly pick a color that appear in our h1 messageDisplay
  var random =  Math.floor(Math.random() * colors.length);
  return colors[random]; 
}
function generateRandomColors(num){              //function to generate automatically random colors in our sqaures
    // make an array
    var arr = [];
    //repeat num times
    for(var i=0;i<num;i++){
        //get random color and push it into the array
        arr.push(randomColor());
    }
    // return the array
    return arr;

}
function randomColor(){                              //function to generate a single random Color
    //pick a red from 0-255
    var r = Math.floor(Math.random() * 256);
    //pick a green from 0-255
    var g = Math.floor(Math.random() * 256);
    //pick a blue from 0-255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r +", " + g + ", " + b + ")";
}