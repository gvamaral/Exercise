import { getSum, getDifference } from "./calculator.js";

function displaySum() {
    let inputOne = document.querySelector('#firstNumberPlus').value;
    let inputTwo = document.querySelector('#secondNumberPlus').value;
    let result = document.querySelector('#resultPlus');
    result.innerHTML = getSum(+inputOne, +inputTwo);
}
function displayDifference() {
    let inputOne = document.querySelector('#firstNumberMinus').value;
    let inputTwo = document.querySelector('#secondNumberMinus').value;
    let result = document.querySelector('#resultMinus');
    result.innerHTML = getDifference(+inputOne, +inputTwo);
}
window.displaySum = displaySum;
window.displayDifference = displayDifference;