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
        body.style.color = "#fff";
        body.style.backgroundImage = "url('backgroundDark.png')";

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

        for (i = 0; i < btn.length; i++) {
            btn[i].style = "background: #fff; color: #0E4E72;";
        }//btn change

        for (i = 0; i < field.length; i++) { 
            field[i].style = "background: linear-gradient(137.42deg, rgba(255, 255, 255, 0.372) -2.91%, rgba(255, 255, 255, 0.138) 107.27%); backdrop-filter: blur(25px);";
        }//Field Background and backdrop change

        btn.style = "background: #fff; color: #0E4E72;";
        
        body.style.color = "#0E4E72";
        body.style.backgroundImage = "url('background.png')";

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


// Array Function Code
let myArray = [1, 2, 3,];
    let ArrField = document.getElementById("ArrField");

    //Feilds declaration

    let shortestField = document.getElementById("shortestField");
    let largestField = document.getElementById("largestField");
    let largeTwoField = document.getElementById("largeTwoField");
    let sumField = document.getElementById("sumField");
    let reverseField = document.getElementById("reverseField");
    let EvenOddField = document.getElementById("EvenOddField");
    let frequencyField = document.getElementById("frequencyField");

    // Adding Function
    let adding = (arr) => {
        arr.push(Number(prompt("Enter an Element")));
        ArrField.innerHTML = arr;
    }

    // Deleting Function
    let deleting = (arr) => {
        arr.pop();
        ArrField.innerHTML = arr;
    }

    //more Function

    //shortest Array
    let shortest = (arr) => {
        let temp = arr[0];
        for (i = 0; i < arr.length; i++) {
            if (arr[i] <= temp) {
                temp = arr[i];
            }
        }
        shortestField.innerHTML = temp;
    }

    //Largest Array
    let largest = (arr) => {
        let temp = arr[0];
        for (i = 0; i < arr.length; i++) {
            if (arr[i] >= temp) {
                temp = arr[i];
            }
        }
        largestField.innerHTML = temp;
    }

    // Second Largest
    let largeTwo = (arr) => {
        let temp = arr[0];
        let temp1 = 0;
        for (i = 0; i < arr.length; i++) {
            if (arr[i] >= temp) {
                temp = arr[i];
            }
        }//this loop give largest array element
        for (i = 0; i < arr.length; i++) {
            if (arr[i] >= temp1 && arr[i] < temp) { //lesser than largest but larger than other
                temp1 = arr[i];
            }
        }
        largeTwoField.innerHTML = temp1;
    }

    //sum of array
    let sum = (arr) => {
        let result = 0;
        for (i = 0; i < arr.length; i++) {
            result = result + arr[i];
        }
        sumField.innerHTML = result;
    }

    //reverse of array
    let reverseArray = (arr) => {
        let temp;
        for (i = 0; i < arr.length / 2; i++) {
            temp = arr[i];
            arr[i] = arr[arr.length - 1 - i];
            arr[arr.length - 1 - i] = temp;
        }
        reverseField.innerHTML = arr;
    }

    //EvenOdd
    let EvenOdd = (arr) => {
        let Even = 0; let Odd = 0;
        for (i = 0; i < arr.length; i++) {
            if (arr[i] % 2 == 0) {
                Even++;
            }
            else if (arr[i] % 2 == 1) {
                Odd++;
            }
            else {
                oddEven.push("not a Character")
            }
        }
        let result = "Odd Elements = " + Odd + ",<br> Even Elements = " + Even;
        EvenOddField.innerHTML = result;
    }

    //frequency  of array 
    let frequency = (arr) => {
        var tmp = 0;
        var fre = [];
        for (i = 0; i < arr.length; i++) {
            for (j = 0; j < arr.length; j++) {
                if (arr[i] == arr[j]) {
                    tmp++;
                }
            }
            fre.push(tmp);
            tmp = 0;
        }

        let result = "";
        for(i=0; i<arr.length; i++){
            result = result + "Array Elenment " + i + " (" + arr[i] + ") is " + fre[i] + " times <br> ";
        }
        frequencyField.innerHTML = result;
    }

    // Final Excucation
    ArrField.innerHTML = myArray;