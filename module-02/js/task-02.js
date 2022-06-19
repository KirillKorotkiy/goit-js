const calculateEngravingPrice = function (message, pricePerWord) {
  const splitMessage = message.split(" ").length;
  return splitMessage * pricePerWord;
};

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
);

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
);
