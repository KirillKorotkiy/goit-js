const credits = 23500;
const pricePerDroid = 3000;

const amount = prompt("Укажите количество дройдов");

if (amount === null) {
  console.log("Отменено пользователем!");
} else {
  let totalPrice = amount * pricePerDroid;
  if (totalPrice > credits) {
    console.log("Недостаточно средств на счету!");
  } else {
    console.log(totalPrice);
    console.log(
      `Вы купили ${amount} дройдов, на счету осталось ${credits - totalPrice}`
    );
  }
}
