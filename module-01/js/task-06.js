let total = 0;
let input;
while (input !== null) {
  input = prompt("Введите число");

  if (input === null) {
    break;
  }

  input = Number(input);
  total += input;
}

console.log(`Общая сумма ${total}`);
