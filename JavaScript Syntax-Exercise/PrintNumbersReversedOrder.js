function NumbersReversedOrder(arr) {
    let arrayOfNumbers = arr.map(Number);
    arrayOfNumbers.reverse();

    return arrayOfNumbers.join("\n");
}