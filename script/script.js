/*
let names = "Alice"; // String
const age = 30; // Integer
let isStudent = true; // Boolean
const grades = [85,90,92]; //array
console.log(names, age, isStudent, grades)
*/

/*
let price = 50;
let quantity = 3;
let total = price * quantity;

let age = 100;
let isAdult = age >= 18;

let citizen = true;
let canVote = (isAdult) && (citizen === true);

let stats = (canVote) ? "Eligible to vote" : "Not eligible to vote";
console.log("Judging by your status, you are",stats, "Also, you owe R",total)
*/

/* 
//if else example-----------------------------
let day = "Monday";

if (day === "Monday"){
    console.log("Start of the workweek");
}

else if (day === "Friday"){
    console.log("Almost the weekend");
}

else {console.log("Midweek grind");}
*/


// switch example--------------------------------------
/*
let day = "Friday";

switch(day){
    case "Monday": console.log("Start of the workweek");
        break;
    case "Wednesday": console.log("Midweek already");
        break;
    case "Friday": console.log("Almost weekend");
        break;
    default: console.log("Just another day.");
}
*/

// Functions example-----------------------------------
/*
function greet(name){
    return "Hello there, " + name + "!";
}

console.log(greet("Alice"));
*/

// Scope example----------------------------------
/*
let globalVar = "I am inside a global variable";

function scopeCheck(){
    let localVar = "I am inside a local variable";
    console.log(globalVar)
    console.log(localVar)
}

scopeCheck()

console.log(globalVar)
console.log(localVar) // error because not accessible globally
*/

// DOM manipulation ------------------------------------------
/*
// get an element and then change text and color
let heading = document.getElementById("heading");
heading.textContent = "I changed the heading and background color using Javascript";
heading.style.color = "blue";

// target a selector from in css
let body = document.querySelector("body")
body.style.backgroundColor ="grey";

// add a class to an element
body.classList.add("addedClass");
let bodyClass = document.getElementsByClassName("addedClass");
body.classList.textContent = "text added via new class name";

// create a new element and nest it inside a specified element
let newDiv = document.createElement("newDiv");
newDiv.textContent = "This is a new div added with Javascript.";
newDiv.style.backgroundColor = "green";
document.body.appendChild(newDiv);
*/

// Event Listeners -------------------------------------------------
/*
// targeting the button element
let button = document.querySelector("#testButton");

// add click event listener to the button
button.addEventListener("click", function(event){
    button.textContent = " You clicked me!";
    //log event details into console
    console.log("Event type:", event.type);
    console.log("Button text:", event.target.textContent);
});

//adding a mouseover event listener to change background color
button.addEventListener("mouseover", function(event){
    let body = document.querySelector("body");
    body.style.backgroundColor = "yellow"
    button.style.backgroundColor = "lightblue";
});

//adding mouseout event to reset background color
button.addEventListener("mouseout",function(){
    button.style.backgroundColor = "";
    let body = document.querySelector("body");
    body.style.backgroundColor = "";
});
*/

// creating elements ---------------------------------------
/*
// creating a new paragraph element
let newParagraph = document.createElement("p");
newParagraph.textContent = "This is a dynamically added paragraph.";
newParagraph.id = "dynamic-paragraph";

//Appending the new element to the body
document.body.appendChild(newParagraph);

//Creating a button to remove the paragraph
let removeButton = document.createElement("button");
removeButton.textContent = "Remove paragraph";
document.body.prepend(removeButton);

//adding event listener to the new button
removeButton.addEventListener("click", function(){
    newParagraph.remove();
});
*/
