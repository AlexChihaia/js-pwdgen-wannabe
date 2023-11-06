'use strict';


/* 1) Chiedi all’utente il suo nome,
2) Chiedi il suo cognome,
3) Chiedi il suo colore preferito
4) Scrivi sulla pagina nomecognomecolorepreferito21


Bonus 1: visualizzate le informazioni anche nella console del browser;
Bonus 2: provate a generare un numero casuale con Javascript; */

const passwordElement = document.getElementById('password')

const firstName = prompt('Inserisci il tuo nome');
const lastName = prompt('Inserisci il tuo cognome')
const favColor = prompt('Inserisci il tuo colore preferito')

/* bonus */
console.log('La password è: ', firstName + lastName + favColor + '21');

passwordElement.innerHTML = (firstName + lastName + favColor + '21');

