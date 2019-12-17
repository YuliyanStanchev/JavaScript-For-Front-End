function Fruit(Fruit, Grams, PriceKg) {
    let Kg = Grams / 1000;
    let Money = Kg * PriceKg;
    console.log(`I need $${Money.toFixed(2)} to buy ${Kg.toFixed(2)} kilograms ${Fruit}.`);
}