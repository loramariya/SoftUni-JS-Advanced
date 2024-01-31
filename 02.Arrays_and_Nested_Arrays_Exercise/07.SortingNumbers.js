function sortingNumbers(arrofNums){

    const sortedNumbers = arrofNums.sort((a,b) => a-b);
    const result = [];

    while (sortedNumbers.length !== 0) {
        const firstEl = sortedNumbers.shift();
        const lastEl = sortedNumbers.pop();
        result.push(firstEl,lastEl);
    }

    return result ;
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])
sortingNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18])