let boxNumber = 100;
 // 2. bottone trigger
btnOne.addEventListener('click', function(){
  console.log('start!')

  // 1. creare l aggiunta dei box
  const container = document.getElementById('my_container')
  // reset
  container.innerHTML ='';
// ciclo d aggiunta
  for (let i = 1; i < boxNumber + 1; i++) {
    
  idBox = `<div id="${i}" class="box">${i}</div>`
  container.innerHTML += idBox;
}








  
  console.log('and!')
})