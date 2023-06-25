function addBorder(element){
    element.style.border = "1px solid red";
    element.style.transition = 'transform 0.4s ease-in'; 
    element.style.transform = 'scale(1.3)';
}
function removeBorder(element){
    element.style.border = "none";
    element.style.transition = 'transform 0.3s ease-out'; 
    element.style.transform = 'scale(1.0)';
}
