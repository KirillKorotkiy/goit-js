let input;
const numbers = [];
let total = 0;


while (input !== null) {
  input = prompt("Введите число");
  let inputNumber= Number(input);
  numbers.push(inputNumber);
  if (input === null) {
    break;
  }
}

if(numbers.length !==0){
  for(let i =0; i<numbers.length; i+=1){
    total +=numbers[i];
  }
}
console.log(`Общая сумма чисел равна ${total}`)

