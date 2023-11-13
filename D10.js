/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let a = 10;
let b = 20;
let sum = a+b;

console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random = Math.floor(Math.random()*21);

console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

let me = {
  name : "Trixia",
  surname : "Lorenzana",
  age : 25
}

console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ["none"];
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

let skillsNuove = ["1","2"];
me.skills = me.skills.concat(skillsNuove);
console.log(me)

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop();
console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

function dice() {
  let random = Math.floor(Math.random()*6)+1;
  return random;
}

console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/


function whoIsBigger(x,y) {
  if(x>y){
    return x;
  } else if (x<y) {
    return y;
  }
}

console.log(whoIsBigger(4,7));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

function splitMe(x) {
  return x.split(' ');
}

console.log(splitMe("Io sono Trixia"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

function deleteOne(x,y) {
  if(y === true){
    return x.slice(1);
  } else if (y === false){
    return x.slice(0,-1);
  }
}

console.log(deleteOne("ciao", true));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

function onlyLetters(x) {
  let parole = x.split(' ');
  for(let i=0; i<parole.length; i++){
    if (!isNaN(parseFloat(parole[i]))){
      parole[i] = parole[i].replace(/[^a-zA-Z]/g,'');
    }
  }
  return parole.join(' ');
}

console.log(onlyLetters("Io ho 4 cani"));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

function isThisAnEmail(x) {
  let chiocciola = x.indexOf('@');
  let punto = x.lastIndexOf('.');

  if (chiocciola > 0 && punto > chiocciola + 1 && punto < x.length - 1) {
    console.log("L'email è valida");
    return true;
  } else {
    console.log("L'email non è valida");
    return false;
  }
}

isThisAnEmail("trixia@trixia.ciao");


/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
let oggi = new Date().getDay()

function whatDayIsIt(x) {
  switch (x) {
    case 1: console.log("Oggi è Lunedì");
      break;
    case 2: console.log("Oggi è Martedì");
      break;
    case 3: console.log("Oggi è Mercoledì");
      break;
    case 4: console.log("Oggi è Giovedì");
      break;
    case 5: console.log("Oggi è Venerdì");
      break;
    case 6: console.log("Oggi è Sabato");
      break;
    case 7: console.log("Oggi è Domenica");
      break;
  }
}

whatDayIsIt(oggi);

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

function rollTheDices(x) {
  oggetto={};
  let numeriEstratti=[];

  for(let i = 0; i<x;i++){
   numeriEstratti.push(dice());
  }

  oggetto.values= numeriEstratti;

  let sum = numeriEstratti.reduce((x, y )=> x+y, 0);
  oggetto.sum = sum;

  /*return numeriEstratti*/

  console.log(oggetto)

}

rollTheDices(9);

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

function howManyDays(x) {
  let dataAttuale = new Date();
  let dataInserita = new Date(x);
  
  let differenzaInMillisecondi = dataAttuale - dataInserita;
  let millisecondiInGiorni = 1000 * 60 * 60 * 24;
  let giorniTrascorsi = Math.floor(differenzaInMillisecondi / millisecondiInGiorni);

  return giorniTrascorsi;
}

let giorniDa = howManyDays ('2023-11-12');
console.log(giorniDa);

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

function isTodayMyBirthday(x){
  let mioCompleanno = new Date('1998-01-05');

  let month = x.getMonth() + 1;
  let day = x.getDate();
  
  let isBirthday = mioCompleanno.getMonth() === month && mioCompleanno.getDate() === day;
  return isBirthday;
}

let giornoCompleanno = isTodayMyBirthday(new Date());
console.log(giornoCompleanno);

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]


/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

function deleteProp(x,y) {
  let obj = delete x[y];
  return obj
}

deleteProp(movies[0],'Type');
console.log(movies[0]);

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

function newestMovie() {
  let filmPiuNuovo= null;
  movies.forEach((x) => {
    if(x.Year>0){
      filmPiuNuovo = "'" + x.Title + "'" + " uscito nel " + x.Year;
    }
  }
  )
  return filmPiuNuovo;
}

let filmRecente = newestMovie(movies);
console.log("il film più recente è " + filmRecente);

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

function countMovies(x) {
  return x.length
}

let numeroFilm = countMovies(movies);
console.log("in movies ci sono " + numeroFilm + " film")

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

function onlyTheYears() {
  let anniFilm= movies.map((x) => {
    return x['Year'];
  }
  )
  return anniFilm;
}

let anniFilm= onlyTheYears(movies);
console.log(onlyTheYears())

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

function onlyInLastMillennium() {
  let newMillenio = 2000;
  let soloMillenioScorso= movies.filter((x) => {
    if(x.Year<newMillenio){
      return x['Title'];
    }
  }
  ) 
  return soloMillenioScorso;
}

let nuovoMillenio = onlyInLastMillennium(movies);
console.log(nuovoMillenio);

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

function sumAllTheYears(){
  let sumAnni = movies.reduce((x, y) => {
  let annoComeNumero = Number(y.Year);
  return x + annoComeNumero;
}, 0);
  return sumAnni;
}

let sommaAnni= sumAllTheYears(movies);
console.log(sommaAnni);

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

function searchByTitle(y){
  let trova = movies.filter(x => x.Title.includes(y));
  return trova;
}

let trovaTitolo = searchByTitle('Lord');
console.log(trovaTitolo)

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

function searchAndDivide(y) {
  let obj = {
    match: [],
    unmatch: []
  }

  movies.forEach(x => {
    if(x.Title.includes(y)) {
      obj.match.push(x);
    } else {
      obj.unmatch.push(x);
    }
  });

  return obj;
}

let trovaEDividi = searchAndDivide('Lord');
console.log(trovaEDividi)

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

function removeIndex(x) {
  movies.splice(x, 1);
  return movies;
}

let arrsenzaX = removeIndex(0);
console.log(arrsenzaX);

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

function selezionaId() {
  let id = document.querySelector("#container")
  return id;
}

console.log(selezionaId());

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

function selezionaTag() {
  let tag = document.querySelectorAll("td");
  for (let i = 0; i < tag.length; i++) {
    return tag;
  }
}

console.log(selezionaTag())

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

function stampaTestoTd() {
   let tag = document.querySelectorAll("td");
  let testo = [];
  for (let i = 0; i < tag.length; i++) {
    testo.push(tag[i].innerText);
  }
  return testo;
}

console.log(stampaTestoTd());

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

function cambiaColoreBg() {
  let link = document.querySelectorAll('a');

  for (let i = 0; i < link.length; i++) {
  link[i].style.backgroundColor = "red"
  }
}

cambiaColoreBg();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

function aggiungiElemento() {
  let lista = document.querySelector('#myList');
  let elementoul= document.createElement('li');
  elementoul.innerText = "Ciao";
  lista.appendChild(elementoul);
}

aggiungiElemento();

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

function svuotaLista() {
  let lista = document.querySelector('#myList');
  lista.innerHTML = '';
}

svuotaLista();

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

function aggiungiClasse(){
  let tr = document.querySelectorAll('tr');
  
  for(i=0; i <tr.length;i++){
    tr[i].className = "test";
  }
  
}

aggiungiClasse();


// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

function halfTree(x) {
  for (let i = 1; i <= x; i++) {
    let linea = '';
    for (let j = 1; j <= i; j++) {
      linea += '*';
    }
    console.log(linea);
  }
}

halfTree(10); 

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

function tree(x) {

  for (let i = 1; i <= x; i++) {
    let spazi = '';
    let asterischi = '';
    
    for (let j = 0; j < x - i; j++) {
      spazi += ' ';
    }

    for (let k = 0; k < 2 * i - 1; k++) {
      asterischi += '*';
    }
    
    console.log(spazi+asterischi);
  }
}

tree(10);


/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

let divisori = 0;
function isItPrime(x){
  for(let i = 1; i<=x;i++){
    if(x % i === 0){
      divisori++;
    }
  }
  if(divisori>2){
    console.log(x + ' non è un numero primo');
  }else{
    console.log(x + ' è un numero primo');
  }
}

isItPrime(29);
isItPrime(6);