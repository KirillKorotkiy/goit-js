const country = prompt("Укажите страну доставки");
let price;

const normolizedCountry = country.toLowerCase();

switch (normolizedCountry) {
  case "китай":
    price = 100;
    console.log(`Доставка в ${normolizedCountry} будет стоить ${price}`);
    break;

  case "чили":
    price = 250;
    console.log(`Доставка в ${normolizedCountry} будет стоить ${price}`);
    break;

  case "австралия":
    price = 170;
    console.log(`Доставка в ${normolizedCountry} будет стоить ${price}`);
    break;

  case "индия":
    price = 80;
    console.log(`Доставка в ${normolizedCountry} будет стоить ${price}`);
    break;

  case "ямайка":
    price = 110;
    console.log(`Доставка в ${normolizedCountry} будет стоить ${price}`);
    break;

  default:
    alert("В вашей стране доставка не доступна");
}
