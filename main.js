function addBorder(element){ //essa função recebe como parametro um element que no caso é o "#id"
  var card = document.querySelector(element); //o #id entra aqui e com isso seleciono o card que quero
  card.classList.toggle("cardChanges"); //não colocar o . do class apenas o nome.
}

