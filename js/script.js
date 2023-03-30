// ELEMENTI GLOBALI
const difficolta = document.getElementById('level').value;
const btnStart = document.getElementById('btnOne');
const container = document.getElementById('my_container');
container.append(singleBox())
let boxNumber = 100;

// 2. bottone trigger
btnStart.addEventListener("click", function(){generatoreBoxs(container)});

function generatoreBoxs(container) {
  console.log('generatore box start!')
    // 1. prendere container
    //    svuota container
        container.innerHTML ='';
  // ciclo d aggiunta dei div al container
    for (let i = 1; i < boxNumber + 1; i++) {  
    container.append(singleBox(i));
  }
  console.log('generatore box and!')
  }

function singleBox(id) {
  box = document.createElement('div');
  box.className = 'box';
  box.id = id;
  box.innerHTML = id;
  box.addEventListener('click', function(){console.log('box',id,'clicked'),this.classList.add('active') })
  return box;
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