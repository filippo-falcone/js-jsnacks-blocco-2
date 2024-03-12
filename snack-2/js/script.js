/* ----------------------------------------------------------------------------
   L’utente inserisce due parole in successione, con due prompt.
    - Il software stampa prima la parola più corta, poi la parola più lunga.
---------------------------------------------------------------------------- */
/*
// Chiedo all'utente di inserire due parole
// Verifico la lunghezza delle parole
// - Se la prima parola è più lunga la stampo per prima
// - Altrimenti la stampo per seconda
*/
// Variabili
const firstWord = prompt('Inserisci una parola');
const secondWord = prompt('Inserisci una seconda parola');
const maxLengthWord = document.querySelector('#max-length');
const minLengthWord = document.querySelector('#min-length');
// Funzionalità
if (firstWord.length > secondWord.length) {
    maxLengthWord.innerHTML = `La parola più lunga è: ${firstWord}`;
    minLengthWord.innerHTML = `La parola più corta è: ${secondWord}`;
} else {
    maxLengthWord.innerHTML = `La parola più lunga è: ${secondWord}`;
    minLengthWord.innerHTML = `La parola più corta è: ${firstWord}`;
}
