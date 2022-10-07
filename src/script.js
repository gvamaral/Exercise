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
    {name: 'Arctic Monkeys', image:'images/am-sound.gif'},
    {name: 'Ludo', image:'images/ludo.jpg'}
];
let newHTML = '';

function showBands(bandItem) {
    return `
    <li>
        <div>Band name is ${bandItem.name}</div>
        <img src="${bandItem.image}" width="200" length="200">
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
// ------------------------------------------------------------------------------------ //
// OOP Exercise
function Car(make, model, year, engine) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.engine = engine;
};
function Engine(cylinders, liters, hp) {
    this.cylinders = cylinders;
    this.liters = liters;
    this.hp = hp;
};
let v6turbo = new Engine(6, 3.8, 565);
let myCar = new Car('nissan', 'GT-R', 2015, v6turbo);

// making an input get list items

let array = [];
let inputItem = document.querySelector('#listInput');
function addListItems() {
    array.push(inputItem.value);
}
function displayItems() {
    let itemOutput = document.querySelector('#items');
    itemOutput.innerHTML = ''
    addListItems();
    array.forEach(function(item){
        itemOutput.innerHTML += `<li>${item}</li>`
    });
}
inputItem.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("btnList").click();
    }
});
// ------------------------------------------------------------------------------------ //
// Classes

class List {
    constructor(name, id, tasks) {
        this.name = name;
        this.id = id;
        this.active = false;
        this.complete = false;
        this.tasks = tasks;
    }
    addTask(task) {
        this.tasks.push(task);
    }
    rename(name) {
        this.name = name;
    }
    deleteTask(taskId) {

    }
    complete() {
        this.complete = true;
    }
}

class taskItem {
    constructor(id, text) {
        this.id = id;
        this.text = text;
        this.completed = false;
    }
    complete(id) {

    }
    rename(id) {

    }
}
// ------------------------------------------------------------------------------------ //
// this is synchronous (Delete commenting to see)
/*
const myName = 'Gabriel';
console.log(myName);
// this is asynchronus, done only after 5 seconds (5000)
window.setTimeout(function() {
    console.log('5 seconds has passed');
}, 5000);

function runThis(doSomethingWithName) {
    return new Promise(function(resolve, reject) {
        const name = prompt('Input your name');
        resolve(name)
    })

    // doSomethingWithName(name)
}
function consoleTheName(name) {
    runThis().then(function(name) {
        console.log(name);
    });
}

function consoleTheNameUppercase(name) {
    runThis().then(function (name) {
        console.log(name.toUpperCase())
    });
}
consoleTheName();
consoleTheNameUppercase();
// runThis(consoleTheName);
// runThis(consoleTheNameUppercase);
// runThis(function(name) {console.log(name.toLowerCase())});
*/
// Another asynchronus (Delete commenting to see)
/*
async function getNameFromAsyncFunction() {
    const name = prompt('Name please?');
    return name;
}
async function consoleLogName() {
    const name = await getNameFromAsyncFunction();
    console.log(name)
}
async function consoleLogNameToUpperCase() {
    const name = await getNameFromAsyncFunction();
    console.log(name.toUpperCase());
}
consoleLogName();
consoleLogNameToUpperCase();
*/
// Make background color change randomly on the body (Delete commenting to see)
/*
function makeBackgroundDifferentColor(color) {
    window.document.body.style.background = color;
}
function getRandomColorNumber(){
    return Math.random() * 255;
};
setInterval(function() {
    const red = getRandomColorNumber();
    const green = getRandomColorNumber();
    const blue = getRandomColorNumber();
    const color = `rgb(${red}, ${green}, ${blue})`
    makeBackgroundDifferentColor(color)
}, 2000)
*/
// ------------------------------------------------------------------------------------ //
// Show cat Image through

async function getImageUrls() {
    const data = await new Promise((resolve, reject) => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
        .then((response) => response.json())
        .then((data) => resolve(data))
        });
    const imageUrls = data.map((dataItem) => dataItem.url)
    return imageUrls
}
function makeImages(imageUrls) {
    const images = document.querySelector('#popup')
    const html = imageUrls.reduce((accum, imageUrlItem) => {
        return `
        <button onclick="closeModal()">&times;</button>
        <img src="${imageUrlItem}" width="480" height="280">`
    }, '')
    images.innerHTML = html
}
async function displayCat() {
    document.getElementById('modal').style.display = "flex";
    document.getElementById('popup').style.height = "300px";
    document.getElementById('popup').style.width = "500px";
    const imageUrls = await getImageUrls();
    makeImages(imageUrls);
}
function closeModal() {
    document.getElementById('modal').style.display = "none";
}

// ------------------------------------------------------------------------------------ //
//Bidding app with Local Storage

let bids = [{name:1, bid:[]}, {name:2, bid:[]}];
let storedBids = JSON.parse(localStorage.getItem('bids'));
if (storedBids) {
    bids = JSON.parse(localStorage.getItem('bids'));
}
function addBid(which) {
    let input = document.querySelector(`#bidInput${which}`);
    bids[which].bid.push(input.value);
    displayBids(which);
    saveBid();
}
function displayBids(which) {
    let display = document.querySelector('#bidDisplay');
    display.innerHTML = ``;
    for (let i = 0; i < bids[which].bid.length; i++) {
        display.innerHTML += `<li>$${bids[which].bid[i]} by ${bids[which].name}</li>`
    };
}
function saveBid() {
    localStorage.setItem('bids', JSON.stringify(bids));
}
// ------------------------------------------------------------------------------------ //
// Create Regex that will check the validity of a phone number
// Examples of which reges you can use
// [0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]
// ^\d{3}-\d{3}-\d{4}$
// ^[0-9]{3}-[0-9]{3}-[0-9]{4}$
// ^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$           <--- Matches very well posibilities
// (?:\d{3})|\(\d{3}\))([-\/\. ])\d{3}\1\d{4}

let re = /(?:\+?\d{1,3})?(?:\d{3}|\(\d{3}\))([-\/\. ])\d{3}\1\d{4}/;
function testInfo(phoneInput) {
    let OK = re.exec(phoneInput.value);
    if (!OK) {
        console.error(phoneInput.value + ' isn\'t a phone number with area code!');
    }
    else {
        console.log('Thanks, your phone number is ' + OK[0]);
    }
}
function add(x, y){
    return x + y
}
// ------------------------------------------------------------------------------------ //
// - Create a webpage
// - Create a 'carousel' of pictures displayed will change to the next image
//   - When you click on the left arrow the im
//   - Display on picture.
//     - Have a left arrow to the left of the picture
//     - Have a right arrow to the right of the picture
//   - When you click the right arrow the image age displayed will go to the previous image



// ------------------------------------------------------------------------------------ //
// Create a Tic Tac Toe game
// Grid will be 3 * 3
// - When the first user clicks on an empty square that square will become X
// - When the second user clicks on an empty square that square will become O
// - The user will alternate every turn, so first click will be X, then second click will be O the third click C, etc...
// - Don't worry about checking if someone has won. We will discuss that later.
let change = true
function changeXO(number) {
    let square = document.querySelector(`#a${number}`);
    square.innerHTML = change? 'X':'O';
    change = !change;
}

function runWhenPageLoads() {
    displayBids(0);
    displayBirthday();
    displayHour();
};

window.onload = runWhenPageLoads;