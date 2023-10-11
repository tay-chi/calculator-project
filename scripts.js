
//HTML Variables

let screenVariable = document.querySelector(".screen");
let numbers = document.querySelectorAll(".number-button");
let additionButton = document.querySelector("#add");
let subtractionButton = document.querySelector("#subtract");
let multiplicationButton = document.querySelector("#multiply");
let divisionButton = document.querySelector("#divide"); 
let clearButton = document.querySelector(".clear-button");
let equalButton = document.querySelector("#equals");
let goBack = document.querySelector("#go-back");

// Variables from User Input

let valueOneFromUser = "";
let valueTwoFromUser = "";
let currentOperator = "";

//Event Listeners

//add event listeners to all math operators

additionButton.addEventListener("click", function() {
    let content = additionButton.textContent;
    currentOperator = content;
});

subtractionButton.addEventListener("click", function() {
    let content = subtractionButton.textContent;
    currentOperator = content;
    });

multiplicationButton.addEventListener("click", function() {
    let content = multiplicationButton.textContent;
    currentOperator = content;
        });   

divisionButton.addEventListener("click", function() {
    let content = divisionButton.textContent;
    currentOperator = content;
            });           

equalButton.addEventListener("click", function(){
    let answer= doMath(valueOneFromUser, currentOperator, valueTwoFromUser);
    screenVariable.textContent = answer;

});

clearButton.addEventListener("click", function(){
    valueOneFromUser = "";
    valueTwoFromUser = "";
    currentOperator = "";
    screenVariable.textContent = "0";
});

goBack.addEventListener("click", function(){
    if (valueTwoFromUser.length > 1) {
        valueTwoFromUser = valueTwoFromUser.slice(0, -1)
        screenVariable.textContent = valueTwoFromUser
    } else if (valueTwoFromUser.length === 1) {
        valueTwoFromUser = ""
        screenVariable.textContent = "0"
    } else if (currentOperator !== "") {
        currentOperator = ""
    } else if (valueOneFromUser.length > 1) {
        valueOneFromUser = valueOneFromUser.slice(0, -1)
        screenVariable.textContent = valueOneFromUser
    } else if (valueOneFromUser.length === 1) {
        valueOneFromUser = ""
        screenVariable.textContent = 0
    };
})

//adding event listeners to all buttons that are numbers

for (let i = 0; i < numbers.length; i++ ) {
        numbers[i].addEventListener("click", function() {
            let content = numbers[i].textContent; 
            if (currentOperator === "") {
            valueOneFromUser += content;
            console.log(valueOneFromUser, "FIRST")
            screenVariable.textContent = valueOneFromUser
        } else {
            valueTwoFromUser += content;
            console.log(valueTwoFromUser, "SECOND")
           screenVariable.textContent = valueTwoFromUser

        }
    })
       


};



//Functions

function doMath(value1, operator, value2) {
    if (operator === "+") {
       return Number(value1) + Number(value2)
    } else if (operator === "-") {
        return Number(value1) - Number(value2)
    } else if (operator === "×") {
    return Number(value1) * Number(value2)
    } else if (operator === "÷") {
        return Number(value1) / Number(value2)
    }

};

