let input;
const numbers = [];
let total = 0;


while (input !== null) {
  input = prompt("Введите число");
  const turnNumber = Number(input);
  if (input === null) {
    break;
  } 
  if(!Number.isNaN(turnNumber)){
    numbers.push(turnNumber)}
   else { 
    alert('Было введено не число, попробуйте еще раз')
}}



if(numbers.length !==0){
  for(let i =0; i<numbers.length; i+=1){
    total +=numbers[i];
  }
}
console.log(numbers)
console.log(`Общая сумма чисел равна ${total}`)

