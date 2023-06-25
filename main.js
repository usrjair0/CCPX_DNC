function addBorder(element){
    element.style.border = "1px solid black";
    element.style.transition = 'transform 0.4s ease-in'; 
    element.style.transform = 'scale(1.3)';
}
function removeBorder(element){
    element.style.border = "none";
    element.style.transition = 'transform 0.4s ease-out'; 
    element.style.transform = 'scale(1.0)';
}
