const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');



inputRef.addEventListener('input', event =>{
    spanRef.textContent = event.target.value
    if(event.target.value === ""){
        return spanRef.textContent = 'незнакомец';
    }
})