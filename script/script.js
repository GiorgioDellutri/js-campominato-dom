//! RECUPERO I TASTO PLAY DALLE LORO CLASSI
let play = document.querySelector('a.play');
let reset = document.querySelector('a.reset');
let gameOver = false;

//* COLLEGO IL TAG P DEL PUNTEGGIO
const score = document.getElementById('score');
let scorePoint = 0;

//! AGGIUNGO AL BOTTONE PLAY RESET
reset.addEventListener('click', function(){
    wrapperContainer.innerHTML= "";
    scorePoint = 0;
});

    //* RECUPERO IL PARENT
    const wrapperContainer = document.querySelector('div.grid-container');

    //* INIZIALIZZO LA GRIGLIA
    wrapperContainer.innerHTML= "";
    
//! AGGIUNGO AL BOTTONE PLAY UN EVENTO. ESSO CONTERRA' TUTTO L'ALGORITMO
play.addEventListener('click', function(){

    //* CREO IL QUADRATO 100 VOLTE
    for (let i = 1; i <= 100; i++){
        const newSquare = squareCreation(i);

        //* AGGIUNGO IL DIV AL PARENT
        wrapperContainer.appendChild(newSquare);
    }
}, );


//! BOMBS ###########################
let bombs = [];

for (let i = 0; i < 16; i++){
    //* GENERO UN NUMERO RANDOMICO TRA 1 E 100
    let randomBombIndex = randomNumber(1, 100);

    // console.log(randomBombIndex);
    //* CONTROLLO SE IL NUMERO E' GIA' PRESENTE ALL'INTERNO DELL'ARRAY . SE NON E' PRESENTE LO AGGIUNGO
    if (! bombs.includes(randomBombIndex)){
        bombs.push(randomBombIndex)
    }
}
console.log(bombs);


//! FUNZIONE PER CREARE IL QUADRATO
function squareCreation (content){
    
    //* CREO IL DIV
    const newSquare = document.createElement('div');
    
    //* ATTRIBUISCO LE PROPRIETA CHE VOLUTE
    newSquare.classList.add('square', 'd-flex');
    
    //* AGGIUNGO IL NUMERO DELLA CASELLA
    newSquare.innerHTML = `<span class="m-auto"> ${content} </span>`;
    
    //* TRA CUI UN COMPORTAMENTO AL CLICK
    newSquare.addEventListener("click", function(){
        
        //* AGGIUNGO LA CLASSE PER COLORARLO DI AZZURRO
        newSquare.classList.add('clicked');
        console.log(content);
        
        if (!gameOver){
            if (bombs.includes(content)){
                newSquare.classList.replace('clicked', 'red');
                window.alert(`GAME OVER! \n \n Your score : ${scorePoint} `);
                gameOver = true;
            } else{
                if (newSquare.classList.contains('clicked')){
                    scorePoint += 1;
                    score.innerHTML =`Punteggio : ${scorePoint}`;
                    if (scorePoint === 84){
                        window.alert('HAI VINTO!1!1!1')
                    }
                }
            }
        }

        //! VERIFICA ESPLOSIONE
    } ,{once:true});
    return newSquare;
} 

//! FUNZIONE PER GENERARE NUMERI RANDOMICI
function randomNumber (numMin , numMax){
    if (numMin === numMax){
        return numMax;
    }
    return Math.floor(Math.random() * (numMax - numMin + 1) + numMin);
}

