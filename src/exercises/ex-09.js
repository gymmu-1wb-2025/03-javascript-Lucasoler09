// Definiert die Funktion f(x) = 4*x - 1, return, damit lösung freigegeben
function f(x) {
  return 4 * x - 1;
}

// x-Werte
const xWerte = [-2, -1, 0, 1, 2];

// Überschrift der Wertetabelle
console.log("x\tf(x)");

// Durchläuft alle x-Werte und gibt x und f(x) aus
xWerte.forEach(x => {
  console.log(x + "\t" + f(x)); // \t = abstand zwischen x und f(x)
});