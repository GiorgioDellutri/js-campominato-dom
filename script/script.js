// RECUPERO IL TASTO PLAY DALLA SUA CLASSE
let play = document.querySelector('div.play');

    // RECUPERO IL PARENT
    const wrapperContainer = document.querySelector('div.grid-container');
    // INIZIALIZZO LA GRIGLIA
    wrapperContainer.innerHTML= "";
    
// AGGIUNGO AL BOTTONE PLAY UN EVENTO. ESSO CONTERRA' TUTTO L'ALGORITMO
play.addEventListener('click', function(){

    // CREO IL QUADRATO 100 VOLTE
    for (let i = 1; i <= 100; i++){
        const newSquare = squareCreation(i);
        // AGGIUNGO IL DIV AL PARENT
        wrapperContainer.appendChild(newSquare);
    }
}, {once : true});

// BOMBE###########################
let bombs = [];

for (let i = 0; i <= 16; i++){
    // GENERO UN NUMERO RANDOMICO TRA 1 E 100
    const randomBombIndex = randomNumber(1, 100);
    // console.log(randomBombIndex);
    // CONTROLLO SE IL NUMERO E' GIA' PRESENTE ALL'INTERNO DELL'ARRAY . SE NON E' PRESENTE LO AGGIUNGO
    if (! bombs.includes(randomBombIndex)){
        bombs.push(randomBombIndex)
    }
    console.log(bombs);
}

// FUNZIONE PER CREARE IL QUADRATO
function squareCreation (content){
    // CREO IL DIV
    const newSquare = document.createElement('div');
    // ATTRIBUISCO LE PROPRIETA CHE VOLUTE
    newSquare.classList.add('square', 'd-flex');
    // AGGIUNGO IL NUMERO DELLA CASELLA
    newSquare.innerHTML = `<span class="m-auto"> ${content} </span>`;
    // TRA CUI UN COMPORTAMENTO AL CLICK
    newSquare.addEventListener("click", function(){
        // aggiungo la classe per colorarlo di azzurro
        newSquare.classList.toggle('clicked');
        console.log(content);
    });

    return newSquare;
} 
// FUNZIONE PER GENERARE NUMERI RANDOMICI
function randomNumber (numMin , numMax){
    if (numMin === numMax){
        return numMax;
    }
    return Math.floor(Math.random() * (numMax - numMin + 1) + numMin);
}

