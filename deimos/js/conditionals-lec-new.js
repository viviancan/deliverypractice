"use strict";

console.log("hello from conditionals lec.js!");

// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar 
// If weather is rainy, show rain icon
// If number of lives is 0, game is over


// ================ IF STATEMENT SYNTAX ================

if(condition){
    // code here runs if condition evaluates to true
}
    

// ================ IF STATEMENT EXAMPLES ================
//Together: Show a specific navbar if user is admin
//Together: Send a 20% off coupon if its users birthday
//Together: Write an if statement that alerts "It's raining" if isRainy is true





//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0
//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"
//TODO: Write an if statement that alerts true if numberInput is greater than 10




//TODO: EXTRA BONUS - Refactor each of the previous statements as functions.





// =============== IF / ELSE SYNTAX ================

if(condition){
    // code here runs if condition evaluates to true
} else {
    // code here runs if condition evaluates to false
}
    
    

// =============== IF / ELSE STATEMENT EXAMPLES ================
//Together: Show a specific navbar if user is admin, else show a different navbar
//Together: Write an if statement that alerts "It's raining" if isRainy is true, else return "have a nice day!"




//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"
//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"
//TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"
//TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!. 



//TODO: EXTRA BONUS - Refactor todo#2 from above as a function.

    
    
// SHOULD WE DELETE STUFF EXAMPLE

// var weShouldDeleteStuff = confirm('Are you sure you want to delete everything?');
//
// console.log("The value of the confirm is: " + weShouldDeleteStuff);
//
// if (weShouldDeleteStuff) {
//     // delete all the things...
//     alert("We are deleting everything...");
// } else {
//     alert("Operation Canceled!");
// }


//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"

// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
if(condition1){
    // code here runs if condition evaluates to true
}else if (condition2){
    // code here runs if condition1 is false *and* condition2 evaluates to true
}else {
    // code here gets executed if condition1 nor condition2 evaluate to true
}

    

// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases



// Together: PIZZA PREFERENCE EXAMPLE *

// var pizzaPreference = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaPreference);
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// }  else if (pizzaPreference === "ham"){
//     alert("Ham is easy to spell and awesome!");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }

//TODO: Write a function that accepts a string that is a traffic light color as an input. When this function is called, it should return a message informing the user what to do when approaching that color light at an intersection.


// function intersectionDecision(lightColor){
//     if(lightColor === "green"){
//         return "Keep going";
//     } else if (lightColor === "yellow"){
//         return "Slow down";
//     } else if (lightColor == "red"){
//         return "Stop";
//     } else {
//         return "Proceed with caution.";
//     }
// }
// console.log(intersectionDecision("blinking"));


// function evaluateTrafficLight(lightColor){
//     if(lightColor === "green"){
//         return "Keep driving... go go go!";
//     } else if (lightColor === "yellow"){
//         return "Slow down";
//     } else if (lightColor === "red"){
//         return "Stop!";
//     } else {
//         return "Proceed with caution";
//     }
// }

// console.log(evaluateTrafficLight(userInput));


// ================ NESTED STATEMENTS ===============
//Together: If user is under 15, they are not eligible for a learners permit, else they are. If they are eligible, check age. If they are 15 they are eligible for a learners permit, if they are 16 or older and have a permit, they are eligible for license, if they are 16 or older and do not have a permit, they are not eligble for a license. 




// ================ TERNARY STATEMENT ================

//Together: Regular way

// var message;
// var success = true;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
// console.log(message);


// var success = true;
// var message = (success) ? "Operation was successful from tern." : "Oops, something went wrong from tern.";
// console.log(message)


//TODO: Refactor the following conditional as a ternary

// var weather = "sunny";
// var weatherMessage;

// if(weather === "rainy"){
//    weatherMessage = "It's raining!";
// } else {
//     weatherMessage = "Have a nice day!";
// }

//WRITE YOUR TERNARY STATEMENT HERE!



// =============== SWITCH STATEMENT ================
//Together:
// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// switch(pizzaPreference) {
//     case "pineapple and hot sauce":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "cheese":
//         alert("Just plain cheese? Okay...");
//         break;
//     default:
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
//         break;
// }


//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.
// switch(weather) {
//     case "rainy":
//         // show cloud/rain icon
//         alert("Make sure to take an umbrella!");
//         break;
//     case "sunny":
//         alert("It’s a hot day today!!");
//         break;
//     case "snow":
//         alert("Brrr… it’s cold today!");
//         break;
//     default:
//         alert("Have a great day!");
//         break;
//  }
 

//TODO: Rewrite the intersection function from earlier as a switch statement.
// function intersectionDecision(lightColor){
//     switch (lightColor) {
//         case "green":
//             return "Keep going";
//         case "yellow":
//             return "Slow down";
//         case "red":
//             return "Stop";
//         default:
//             return "Proceed with caution";
//     }
// }
// console.log(intersectionDecision("yellow"));


// function intersectionDecision(lightColor){
//     var intersectionMessage;
//
//     switch (lightColor) {
//         case "green":
//             intersectionMessage = "Keep going";
//             break;
//         case "yellow":
//             intersectionMessage = "Slow down";
//             break;
//         case "red":
//             intersectionMessage = "Stop!!! ";
//             break;
//         default:
//             intersectionMessage =  "Proceed with caution";
//     }
//
//     return intersectionMessage;
// }
// console.log(intersectionDecision("red"));



// ================ REVERSE ENGINEERING =================
// Visit each of these links, outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


// https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html
//Checkbox is clicked
//Checkbox clicked, set shoppingDone to True
// if(shoppingDone === true) {
//     set childsAllowance to 10;
// } else {
//     set childsAllowance to 5;
// }

// https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html
//user makes weather selection
// var choice = the value of the select

// if(choice === 'sunny') {
//     //Display sunny text
// } else if(choice === 'rainy') {
//     //display rainy text
// } else if(choice === 'snowing') {
//     //display snow text
// } else if(choice === 'overcast') {
//      //display overcast
// } else {
//      //display ""
// }

// https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html
//user selects theme
// (selectValue === 'black') ? updateToBlack() : updateToWhite();




