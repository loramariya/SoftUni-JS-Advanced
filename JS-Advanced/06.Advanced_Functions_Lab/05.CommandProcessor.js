function solve() {
    let result = "";
    return { 
        append: (x) => result += x,
        removeStart: (n) => result = result.substring(n),
        removeEnd: (n) => result = result.substring(0, result.length - n),
        print: () => console.log(result)
    }
}