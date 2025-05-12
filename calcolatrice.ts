import inquirer from "inquirer";
async function calcolatrice() {
 const num1 = number (prompt("Inserisci il primo numero: "));
 const num2 = number (prompt("Inserisci il secondo numero: "));
 const operazione = prompt("Scegli l'operazione da eseguire (+, -, *, /): ");
}
if (isNaN(num1) || isNaN(num2)) {
 console.log("Non valido.");
}
else if (operazione === "+") {
 console.log("Il risultato è: " + (num1 + num2));
}
else if (operazione === "-") {
 console.log("Il risultato è: " + (num1 - num2));
}
else if (operazione === "*") {
 console.log("Il risultato è: " + (num1 * num2));
}
else if (operazione === "/") {
 if (num2 !== 0) {
     console.log("Il risultato è: " + (num1 / num2));
 } else {
     console.log("Divisione per zero non consentita.");
 }
}
else {
 console.log("Operazione non valida.");
}
start ();
async function start() {
 const { start } = await inquirer.prompt({
     name: "start",
     type: "confirm",
     message: "Vuoi eseguire un'operazione?",
 });
 if (start) {
     calcolatrice();
 } else {
     console.log("Operazione terminata.");
 }
}
// calcolatrice();