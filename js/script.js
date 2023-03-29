console.log('ciao capominato')

// 1. creare l aggiunta dei box
// 2. bottone trigger

// __ sistema d aggiunta
const container = document.getElementById('my_container')

console.log(container);
// ciclo d aggiunta
for (let i = 1; i < 101; i++) {
  idBox = `<div id="${i}" class="box">${i}</div>`
  container.innerHTML += idBox;
  // console.log(idBox)
}


function boxGeneretor(nBox){

}