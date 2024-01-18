function fruitCalculator(fruit, weigth, price) {
    let weightInKg = weigth / 1000;
    let money = weightInKg * price;

    console.log(`I need $${money.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`)

}

fruitCalculator('orange', 2500, 1.80);