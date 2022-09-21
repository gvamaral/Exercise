// (a == 0 || a > 0 != a >= 0) && a != 0
// only true if a is null

// ------------------------------------------------------------------------------------ //
// FizzBuzz game

function fizzBuzz(numb) {
    if((numb % 3 == 0) && (numb % 5 == 0)) {
        return "FizzBuzz";
    }
    else if(numb % 5 == 0) {
        return "Buzz";
    }
    else if(numb % 3 == 0) {
        return "Fizz";
    }
    else {
        return numb;
    }   
};
function displayFizz() {
    let divResult = document.querySelector("#result");
    let inputDiv = document.querySelector('#fizz');

    divResult.innerHTML = fizzBuzz(Number(inputDiv.value));
}

let inputFizz = document.querySelector("#fizz");

inputFizz.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("btnFizz").click();
    }
});
// ------------------------------------------------------------------------------------ //
// Showing Good morning, afternoon, evening or night depending on the hour

function goodHour(hour) {
    let div = document.querySelector("#resultHour");
    if((hour >= 0) && (hour < 13)) {
        return "Good Morning!";
        div.style.backgroundImage = "url(../images/sunrise.jpg)";
    }
    else if((hour >= 13) && (hour < 17)) {
        return "Good Afternoon!";
    }
    else if((hour >= 17) && (hour < 20)) {
        return "Good Evening!";
    }
    else if((hour >= 20) && (hour <= 24)) {
        return "Good Night!";
    }
    else {
        return "That's not an hour of the day...DANGER!";
    }
};
function displayHour() {
    let divResult = document.querySelector("#resultHour");
    let span = document.querySelector("#time");
    let today = new Date();
    let currentHour = today.getHours();
    console.log (currentHour);
    divResult.innerHTML = goodHour(currentHour);
    span.innerHTML = today;
    if((currentHour >= 0) && (currentHour < 8)) {
        divResult.style.backgroundImage = "url(images/sunrise.jpg)";
        divResult.style.backgroundRepeat = "no-repeat";
        divResult.style.backgroundSize = "cover";
    }
    else if((currentHour >= 8) && (currentHour < 17)) {
        divResult.style.backgroundImage = "url(images/sunny.jpg)";
        divResult.style.backgroundRepeat = "no-repeat";
        divResult.style.backgroundSize = "cover";
    }
    else if((currentHour >= 17) && (currentHour < 20)) {
        divResult.style.backgroundImage = "url(images/sunset.jpg)";
        divResult.style.backgroundRepeat = "no-repeat";
        divResult.style.backgroundSize = "cover";
        divResult.style.backgroundPosition = "center";
    }
    else if((currentHour >= 20) && (currentHour <= 24)) {
        divResult.style.backgroundImage = "url(images/night.jpg)";
        divResult.style.backgroundRepeat = "no-repeat";
        divResult.style.backgroundSize = "cover";
    }
    else {
        divResult.style.backgroundImage = "url(images/warning.jpg)";
        divResult.style.backgroundRepeat = "no-repeat";
        divResult.style.backgroundSize = "cover";
    }
}
// ------------------------------------------------------------------------------------ //
// Check if it's my Birthday

function isMyBirthday() {
    const myBirthday = new Date('12/06/1999');
    const now = new Date();

    return myBirthday.getMonth() === now.getMonth() && myBirthday.getDate() === now.getDate();
}

function displayBirthday() {
    const birthdayElement = document.querySelector("#birthday");
    const birthdayPhrase = isMyBirthday() ? 'Happy Birthday!' : 'It\'s not your birthday yet!';

    birthdayElement.textContent = birthdayPhrase;
}
// ------------------------------------------------------------------------------------ //
// Interview question
// Check for palindrome
// Exemples: racecar, tacocat, bob

function revStrg(str) {
    let splitString = str.split('');
    let revArray = splitString.reverse();
    let joinArray = revArray.join('');
    return joinArray;
};
function isPalindrome(str) {
    noSpaceStr = str.replace(/\s/g, '');
    if (noSpaceStr.toUpperCase() == revStrg(noSpaceStr).toUpperCase()) {
        return `Congratulations, ${str} is a palindrome!`;
    }
    else {
        return `Sorry, try again.`;
    }
};
function displayPalindrome() {
    let divResult = document.querySelector("#palindrome");
    let inputDiv = document.querySelector('#palCheck');

    divResult.innerHTML = isPalindrome(inputDiv.value);
};
let inputPalindrome = document.querySelector("#palCheck");

inputPalindrome.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("btnPalindrome").click();
    }
});

// ------------------------------------------------------------------------------------ //
// Making Lists appear on HTML through JS

let bands = [
    {name: 'Arctic Monkeys', image:'images/am.jpg'},
    {name: 'Ludo', image:'images/ludo.jpg'}
];
let newHTML = '';

function showBands(bandItem) {
    return `
    <li>
        <div>Band name is ${bandItem.name}</div>
        <img src="${bandItem.image}" width="100" length="100">
    </li>
    `
};
for(let i = 0; i < bands.length; i++) {
    let currentItem = bands[i];
    let bandAsHTML = showBands(currentItem);

    newHTML = newHTML + bandAsHTML;
};

document.querySelector('#bands').innerHTML = newHTML;

// ------------------------------------------------------------------------------------ //
// Displaying alert from an input
function displayAlert(){
    let toBeDisplayed = document.querySelector('#toAlert').value;
    alert(toBeDisplayed);
}
let inputAlert = document.querySelector("#toAlert");

inputAlert.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("btnAlert").click();
    }
});
// ------------------------------------------------------------------------------------ //
// Function declaration vs function expression

functionDeclaration();

function functionDeclaration() {
    console.log('this is the function declaration')
};
const functionExpression = function() {
    console.log('this is a function expression')
};
let arrowFunction = () => console.log('this is an arrow function, also a function expression');

parameter => console.log(`This is an arrow function with the ${parameter} parameter`); //No way to call it needs variable

arrowFunction();
functionExpression();

// ------------------------------------------------------------------------------------ //
// School Exercise

let displayMyName = getDisplayMyName('Gabriel');
function getDisplayMyName(name) {
    return () => console.log('Hello, my name is ' + name);
};
displayMyName();

let doMath = getMathFunction('+');
console.log(doMath(1, 2));
doMath = getMathFunction('-')
console.log(doMath(1, 2))
function getMathFunction(mathSymbol) {
    if(mathSymbol === '+'){
        return (a, b) => a + b
    }
    else if(mathSymbol === '-'){
        return (a, b) => a - b
    }
    else {
        return () => {}
    }
};
// ------------------------------------------------------------------------------------ //
// add or subtract one with a button
let likes = 0
let display = document.querySelector('#number');
function adding(){
    likes += 1;
    display.innerHTML = likes;
}
function subtracting(){
    likes -= 1;
    display.innerHTML = likes;
}

function runWhenPageLoads() {
    displayBirthday();
    displayHour();
}

window.onload = runWhenPageLoads;