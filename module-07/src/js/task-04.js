const btnRefUp = document.querySelector('[data-action ="increment"]');
const btnRefDown = document.querySelector('[data-action="decrement"]');
const counterValue  = document.querySelector('#value');


const increment = () =>
btnRefUp.addEventListener('click',() =>{
    counterValue.textContent++;
} );

const decrement = () =>
btnRefDown.addEventListener('click', ()=>{
    counterValue.textContent--;
})

increment();
decrement();