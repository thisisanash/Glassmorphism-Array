let mode = true; // true for light , false for dark

let body = document.getElementById("body");
let frame = document.getElementById("frame");
let field = document.getElementsByClassName("field");

const sun = "sun.svg";
const moon = "moon.svg";

var btn = document.getElementsByClassName("btn");


const themeIcon = document.getElementById("theme-icon");

let modeBtn = () => {
    if (mode == true) {
        // Dark theme chnages
        body.style.backgroundImage = "url('backgroundDark.png')";
        body.style.color = "#ffffff";

        for (i = 0; i < btn.length; i++) {
            btn[i].style = "background: #010815; color: #fff;";
        }//btn change

        for (i = 0; i < field.length; i++) {
            field[i].style = "background: linear-gradient(137.42deg, rgba(255, 255, 255, 0.1) -2.91%, rgba(255, 255, 255, 0) 107.27%); backdrop-filter: blur(10px);";
        }//Field Background and backdrop change

        btn.style = "background: #010815; color: #fff;";

        themeIcon.src = moon;
        themeIcon.style.animation = "change 0.3s ease-in";

        mode = false;
    }
    else if (mode == false) {
        // light theme changes
        body.style.backgroundImage = "url('background.png')";
        body.style.color = "#0E4E72";

        for (i = 0; i < btn.length; i++) {
            btn[i].style = "background: #fff; color: #0E4E72;";
        }//btn change

        for (i = 0; i < field.length; i++) { 
            field[i].style = "background: linear-gradient(137.42deg, rgba(255, 255, 255, 0.372) -2.91%, rgba(255, 255, 255, 0.138) 107.27%); backdrop-filter: blur(25px);";
        }//Field Background and backdrop change

        btn.style = "background: #fff; color: #0E4E72;";
        
        themeIcon.src = sun;
        themeIcon.style.animation = "change2 0.3s ease-in";

        mode = true;
    }
}

// Menu 

let menuButton = document.querySelector('.menu-button'); //menu-button
let links = document.querySelector('.links');// links section


// Function to toggle the class
menuButton.addEventListener('click', function(){
    menuButton.classList.toggle('active');
    links.classList.toggle('active');
})

// class toggle change the state of menu-button and links section