function LastKNumbersSequence(length,k){
    const sequence = [1];
    for(let i = 1; i < length; i ++){
        let sum = 0;
        for(let j = Math.max(0, i - k); j< i; j++){
            sum += sequence[j];
        }
        sequence.push(sum);
    }
    return sequence;
}

console.log(LastKNumbersSequence(6, 3))
console.log(LastKNumbersSequence(8, 2))