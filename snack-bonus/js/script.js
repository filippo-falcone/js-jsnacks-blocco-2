/* --------------------------------------------------------------------------------------------------------
   Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.
-------------------------------------------------------------------------------------------------------- */
/*
// Chiedo all'utente un numero composto da 4 cifre
// Creo un ciclo for
// - Converto gli indici in numero
// - Sommo i numeri
// Stampo la somma in un allert
*/
// Variabili
const userNumber = prompt('Inserisci un numero di 4 cifre');
// Funzionalità
let sum = 0;
for (let i = 0; i < userNumber.length; i++) {
    const thisNumber = parseInt(userNumber[i]);
    console.log(thisNumber);
    sum += thisNumber;
}
// Output
alert(sum);