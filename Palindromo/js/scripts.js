/*
Chiedere all'utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

function isPalindrome(word) {
    // Converto la parola a minuscole per rendere il controllo case insensitive
    word = word.toLowerCase();
    // Invertire la parola
    const reversedWord = word.split('').reverse().join('');
    // Controllo se la parola originale è uguale alla parola invertita
    return word === reversedWord;
}
const button = document.getElementById('checkbutton');
button.addEventListener('click',
    function checkPalindrome() {
        // Chiedo all'utente di inserire una parola
        const userInput = prompt("Inserisci una parola:");
        if (userInput) {
            // Verificare se la parola è palindroma
            if (isPalindrome(userInput)) {
                alert("La parola " + userInput + " è palindroma!");
            } 
            else {
                alert("La parola " + userInput + " non è palindroma.");
            }
        } 
        else {
            alert("Non hai inserito nessuna parola.");
        }
    }

)