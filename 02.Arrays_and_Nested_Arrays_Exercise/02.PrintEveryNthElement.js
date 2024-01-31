function printNthElement(arr, step) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        if (i % step === 0) {
            result.push(element);
        }
    }

    return result;
}
console.log(printNthElement(['5','20','31','4','20'],2))
console.log(printNthElement(['dsa', 'asd', 'test', 'tset'], 2))