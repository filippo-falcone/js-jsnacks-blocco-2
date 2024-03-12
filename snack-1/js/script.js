/* -----------------------------------------------------------------------
   L'utente inserisce un numero nel prompt, se è pari stampa il numero,
    - se è dispari stampa il numero successivo
----------------------------------------------------------------------- */
/*
// Chiedo all'utente di inserire un numero
// Verifico se pari o dispari
// - Se è pari stampo il numero
// - Altrimenti stampo il numero aumentato di uno
*/
// Variabili
const userNumber = parseInt(prompt('Inserisci un numero'));
const evenOrOdd = document.querySelector('#even-or-odd');
// Funzionalità
if (userNumber % 2 == 0) {
    evenOrOdd.innerHTML = `Il tuo numero è ${userNumber}`;
} else {
    evenOrOdd.innerHTML = `Il tuo numero è ${userNumber + 1}`;
}