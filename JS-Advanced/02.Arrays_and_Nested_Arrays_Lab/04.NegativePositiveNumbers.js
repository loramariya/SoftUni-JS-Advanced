function NegativePositiveNumber(arr) {
    let result = [];

    for (let num of arr) {
        if (num < 0) { result.unshift(num); }
        else { result.push(num); }
    }

    console.log(result.join('\n'));
}
NegativePositiveNumber([7, -2, 8, 9])
NegativePositiveNumber([3, -2, 0, -1])