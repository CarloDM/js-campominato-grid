// ELEMENTI GLOBALI
let boxNumber = 100;
let btn = document.getElementById('btnOne')

// 2. bottone trigger
btn.addEventListener("click", function(){generatoreBoxs()});

function generatoreBoxs() {
  console.log('generatore box start!')
  
    // 1. prendere container
  const container = document.getElementById('my_container')
    // reset
        container.innerHTML ='';
  // ciclo d aggiunta dei div al container
    for (let i = 1; i < boxNumber + 1; i++) {  
    idBox = `<div id="${i}" class="box">${i}</div>`
    container.innerHTML += idBox;
  }

  console.log('generatore box and!')
  }


// devo sentire il click in se eseguito sopra ogni div 
// prendo i div e mi metto ad ascoltarli
// const boxs = document.getElementsByClassName("box");
// console.log(boxs.length)


      // boxs.addEventListener("click", handleClickBox);


// CLICK CELLA
//  verifico se è una bomba
/**  si ---> fine gioco

    no ---> aggiungo classe active alla celle
            punteggio + 1 
            verificare se punteggio ha raggiunto il massimo --> fine gioco
 */
/*
// FINE GIOCO
- ACCENDERE TUTTE LE BOMBE
- stampare msg con punteggio se vinci o perdi
- congelo la griglia e l opacizzo

*/

// function handleClickBox (){
//   console.log(this.value)
// }