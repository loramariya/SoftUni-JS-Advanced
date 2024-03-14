function biggestElement(matrix) {
    let biggest = Number.MIN_SAFE_INTEGER;

    for (const element of matrix) {
        for (const number of element) {
            if (number > biggest) {
                biggest = number;
            }
        }
    }
    console.log(biggest);
}
biggestElement([[20, 50, 10],
[8, 33, 145]])