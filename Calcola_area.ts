const base: number = 5;
const altezza: number = 5; 

function CalcolaAreaRettangolo(base: number, altezza: number): number {
    return base * altezza;
}
function èQuadrato(base: number, altezza: number): boolean {
    return base === altezza;
}

console.log("L'area del rettangolo è: " + CalcolaAreaRettangolo(base, altezza));
console.log("è un quadrato:" + èQuadrato(base, altezza));