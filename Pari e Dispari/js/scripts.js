/*
1.L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
2.Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
3.Sommiamo i due numeri
4.Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
5.Dichiariamo chi ha vinto.
*/


//faccio scegliere all'utente se vuole Pari o Dispari
const UserOddorEven = prompt('scegli tra Pari o Dispari');
console.log('UserOddorEven', UserOddorEven, typeof UserOddorEven);

//faccio inserire un numero random da 1 a 5 compresi all'utente
const UserNumber = parseInt(prompt('Inserisci un numero da 1 a 5 compresi'));
console.log('UserNumber', UserNumber, typeof UserNumber);

//genero un numero random da 1 a 5 compresi
function generaNumeroRandom() {
    return Math.floor(Math.random() * 5) + 1;
}

//calcolo il numero del computer
const PcNumber = generaNumeroRandom();
console.log('PcNumber', PcNumber , typeof PcNumber);

//faccio la somma dei due numeri
const somma = UserNumber + PcNumber;
console.log('somma', somma, typeof somma);

//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) e dico se ha vinto o no
if(UserOddorEven == 'Pari' && Pari(somma) == 'pari'){
    alert('Hai vinto!')
}
else if(UserOddorEven == 'Dispari' && Pari(somma) == 'dispari'){
    alert('Hai vinto!')
}
else{
    alert('Hai perso')
}

//funzione del calcolo se il numero è pari o dispari
function Pari(numero){
    if(numero % 2 == 0){
      return 'pari';
    }
    else{
      return 'dispari';
    }
  }