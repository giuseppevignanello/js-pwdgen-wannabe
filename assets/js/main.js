
// per ogni passaggio JS faccio un console.log

// 1. Chiedo all'utente il suo nome con un prompt e lo salvo in un const firstName

const firstName = prompt('Inserisci il tuo nome');

console.log(firstName);


// 2. Chiedo all'utente il suo cognome con un prompt e lo salvo in un const lastName

const lastName = prompt('Inserisci il tuo cognome');

console.log(lastName);

// 3. Chiedo all'utente il suo colore preferito con un prompt e la salvo in un const color

const color = prompt('Inserisci il tuo colore');

console.log(color);

// 4. creo un h1 nell'html 

// 5. seleziono l'h1 con getElementById e lo salvo in una variabile

const password = document.getElementById( 'password' )

console.log(password);

// 6. assegno all'innerHTML un nuovo valore di "23" interpolando prima le tre variabili firstName lastName e age

password.innerHTML= `${firstName}${lastName}${color}23`




