// 1.Chieda il nome e l’età dell’utente (come variabili)
var nome = "salvatore";
var età = 23;
var isstudente = true;
// 2. 2.Stabilisca se è minorenne o maggiorenne
var isMaggiorenne = età >= 18;
// 3. stampi un messaggio personalizzato
if (isMaggiorenne) {
    console.log("Sei maggiorenne");
}
else if (età > 13) {
    console.log("Sei un adolescente");
}
// 4. Chieda un numero n e stampi tutti i numeri da 1 a n
var n = 10;
for (var i = 1; i <= n; i++) {
    console.log(i);
}
// 5.Se il numero è > 10, mostrare anche se è pari o dispari
if (n > 10) {
    if (n % 2 === 0) {
        console.log(n + "è pari");
    }
    else {
        console.log(n + "è dispari");
    }
}
