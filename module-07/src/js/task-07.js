const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');
console.dir(spanRef)

inputRef.addEventListener('input', event =>{
    spanRef.style.fontSize = event.currentTarget.value + "px";
})
