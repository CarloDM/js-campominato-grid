
let boxNumber = 100;
 // 2. bottone trigger
btnOne.addEventListener('click', function(){
  console.log('trig start!')

  // 1. creare l aggiunta dei box
  const container = document.getElementById('my_container')
  // reset
  container.innerHTML ='';
// ciclo d aggiunta
  for (let i = 1; i < boxNumber + 1; i++) {
    // generare disposizione i a random      <-------------------
    
  idBox = `<div id="${i}" class="box">${i}</div>`
  container.innerHTML += idBox;
}



console.log('trig and!')
})


// devo sentire il click in se eseguito sopra ogni div 
// prendo i div e mi metto ad ascoltarli
const boxs = document.getElementsByClassName("box");
console.log(boxs.length)

      boxs.addEventListener("click", function() {
        console.log('click div ');
      });