//Definindo o array ingressos que começa vazio
const ingressos = []; 
function addBorder(element){ 
  var card = document.querySelector(element);
  card.classList.toggle("cardChanges");
}
function selectCard(selector){
    var element = document.querySelector(selector); 
    element.classList.toggle("card-selected");
    if(ingressos.includes(selector)){
        ingressos.splice(ingressos.indexOf(selector), 1); 
        //aqui estou declarrando que o elemento apagado será o correspondente selector
    }else{
        ingressos.push(selector);
    }
}
function showSelectedCards(){
    if(ingressos.length > 0){
        alert("Os ingressos selecionados foram:"+ ingressos);
    }else{
        alert("Por favor, selecione algum dos ingressos!")
    }
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

