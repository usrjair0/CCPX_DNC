const ingressos = []; 
function addBorder(element){ //essa função recebe como parametro um element que no caso é o "#id"
  var card = document.querySelector(element); //o #id entra aqui e com isso seleciono o card que quero
  card.classList.toggle("cardChanges"); //não colocar o . do class apenas o nome.
}
function selectCard(selector){
    var element = document.getElementsByClassName('cards-ingressos');
    element.classList.toggle(".card-selected");
    if(ingressos.includes(selector))
}
//Desafio alternar entre eventos de teclado
/* 
function checkKeyboardCode(){
    document.addEventListener('keydown', (event) => { //o evento keydown é quando pressiono uma tecla
        var name = event.key;
        var code = event.code;
        alert(`Key pressed ${name} \r\n key code value ${code}`);
    }, false);
}
*/
//checkKeyboardCode();
function addKeyboardEventListeners(){
    document.addEventListener('keydown', (event)=>{

        var quinta = document.getElementById('quinta');
        var sexta = document.getElementById('sexta');
        var sabado = document.getElementById('sabado');
        var domingo = document.getElementById('domingo');

        var code = event.code;
        if(code == 'Digit1'){
            quinta.classList.toggle('cardChanges');
            sexta.classList.remove('cardChanges');
            sabado.classList.remove('cardChanges');
            domingo.classList.remove('cardChanges');
        }

        if(code == 'Digit2'){
            quinta.classList.remove('cardChanges');
            sexta.classList.toggle('cardChanges');
            sabado.classList.remove('cardChanges');
            domingo.classList.remove('cardChanges');
        }

        if(code == 'Digit3'){
            quinta.classList.remove('cardChanges');
            sexta.classList.remove('cardChanges');
            sabado.classList.toggle('cardChanges');
            domingo.classList.remove('cardChanges');
        }

        if(code == 'Digit4'){
            quinta.classList.remove('cardChanges');
            sexta.classList.remove('cardChanges');
            sabado.classList.remove('cardChanges');
            domingo.classList.toggle('cardChanges');
        }
    }, false);
}
addKeyboardEventListeners();

