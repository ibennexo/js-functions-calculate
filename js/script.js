// Skriv "use strict" herunder

"use strict";

function beregnSum(number1, number2) {
    // Funktionen skal beregne summen af de to tal og udskrive resultatet i konsollen, fx: "Summen af 15 og 27 er 42"
    console.log(`Summen af ${number1} og ${number2} er ${number1 + number2}`);
}




// Skriv en funktion, der hedder beregnDifference, og som tager to parametre: number1 og number2
// Funktionen skal beregne forskellen mellem de to tal og udskrive resultatet i konsollen, fx: "Forskellen mellem 27 og 15 er 12"
function beregnDifference(number1, number2) {
    console.log(`Forskellen mellem ${number1} og ${number2} er ${number1 - number2}`);}

// Kald begge funktioner herunder med to selvvalgte tal, så du selv kan se i konsollen, om dine funktioner virker
beregnSum(15, 27);
beregnDifference(27, 15);
