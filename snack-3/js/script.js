/* --------------------------------------------------------------------------------------------------------
   Crea due tag div con due id diversi:
    - un div avrà il testo colorato di rosso mentre l’altro di verde.
    - Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.
-------------------------------------------------------------------------------------------------------- */
/*
// Richiamo il container in cui andranno i div
// Creo un array
// Scorro l'array per controllare se i numeri sono pari o dispari
// - Se pari creo un div con id rosso e stampo
// - Altrimenti creo un div con id verde e stampo in numero
*/
// Variabili
const textContainer = document.querySelector(".text-container");
const numberList = [2, 4, 5, 12, 34, 78, 90, 12, 33, 56, 223, 77, 1, 49, 12];
// Funzionalità
for (let i = 0; i < numberList.length; i++) {
    const thisNumber = numberList[i];
    if (numberList[i] % 2 == 0) {
        textContainer.innerHTML += `<div id="red">${thisNumber}</div>`;
    } else {
        const greenDiv = document.createElement("div");
        greenDiv.setAttribute("id", "green");
        greenDiv.innerHTML = `${thisNumber}`;
        textContainer.append(greenDiv);
    }
}
