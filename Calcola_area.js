var base = 5;
var altezza = 5;
function CalcolaAreaRettangolo(base, altezza) {
    return base * altezza;
}
function èQuadrato(base, altezza) {
    return base === altezza;
}
console.log("L'area del rettangolo è: " + CalcolaAreaRettangolo(base, altezza));
console.log("è un quadrato:" + èQuadrato(base, altezza));
