const credits = 23500;
const pricePerDroid = 3000;

const amount = prompt("Укажите количество дройдов");
let totalPrice = amount * pricePerDroid;

if (amount === null) {
  console.log("Отменено пользователем!");
} else if (totalPrice > credits) {
  console.log("Недостаточно средств на счету!");
} else if (totalPrice <= credits) {
  console.log(totalPrice);
  console.log(
    `Вы купили ${amount} дройдов, на счету осталось ${credits - totalPrice}`
  );
} else {
  console.log(totalPrice);
}
