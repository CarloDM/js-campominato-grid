// ELEMENTI GLOBALI
const difficolta = document.getElementById('level').value;
const btnStart = document.getElementById('btnOne');
const container = document.getElementById('my_container');
container.append(singleBox())
let boxNumber = 100;

//  bottone start
btnStart.addEventListener("click", function(){generatoreBoxs(container)});







// -------------- boxs generator-------------
function generatoreBoxs(container) {
  console.log('generatore box start!')
    //    svuota container
        container.innerHTML ='';
  // ciclo d aggiunta dei div al container
    for (let i = 1; i < boxNumber + 1; i++) {  
    container.append(singleBox(i));
  }
  console.log('generatore box and!')
  }

// ---------- single box generator------------
function singleBox(id) {
  box = document.createElement('div');
  box.className = 'box';
  box.id = id;
  box.innerHTML = id;
  box.addEventListener('click', function(){clickBox(id,this); })
  return box;
}

// ---------- box click------------
function clickBox(id,ths) {
  console.log('box',id,'clicked')
  ths.classList.add('active')
}








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
