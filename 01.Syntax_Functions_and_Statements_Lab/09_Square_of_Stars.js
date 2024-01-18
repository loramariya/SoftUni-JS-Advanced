function solve(size=5) {

    for(let i = 0; i < size; i++){
        const row = '* '.repeat(size-1) + '*';
        console.log(row);
    }

}
solve(2);