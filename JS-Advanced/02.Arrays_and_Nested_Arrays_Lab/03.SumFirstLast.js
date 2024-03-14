function SumFirstLast(arr){

    return Number(arr.pop()) + Number(arr.shift());
}

/*
{   const first = Number(arr[0]);
    const last = Number(arr[arr.length-1]);
    return first + last;
}
*/

console.log(SumFirstLast(['20', '30', '40']))