// 1. Write code so that the colour inputs match the background generated on the first page load. 

// 2. Display the initial CSS linear gradient property on page load.

// 3. BONUS: Add a random button which generates two random numbers for the colour inputs.

var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var gradient = document.getElementById("gradient");
var h3 = document.querySelector("h3")
var colourgenerator = document.getElementById("colourgenerator")

function setGradient() {
    gradient.style.background = 
    "linear-gradient(to right, "
     + color1.value 
     + ", " 
     + color2.value
     + ")";

     h3.textContent = gradient.style.background + ";";
}

setGradient()

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);


colourgenerator.addEventListener("click", function() {
    color1.value = '#'+Math.random().toString(16).substr(2,6);
    color2.value = '#'+Math.random().toString(16).substr(2,6);
    setGradient();
}) 