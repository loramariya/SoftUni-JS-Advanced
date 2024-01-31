function extractSubsetFromArray(arr) {
    let biggest = Number.MIN_SAFE_INTEGER;
    const output = [];

    for (let i = 0; i < arr.length; i++) {
        const currentElement = arr[i];

        if (currentElement >= biggest) {
            output.push(currentElement);
            biggest = currentElement;
        }
    }
    return output;
}

extractSubsetFromArray([1, 2, 3, 4]);
extractSubsetFromArray([20, 3, 2, 15, 6, 1]);
