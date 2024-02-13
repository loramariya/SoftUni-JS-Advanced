function argumentInfo(...data) {
    let result = {};

    for (let el of data) {
        let type = typeof(el);
        console.log(`${type}: ${el}`);
        if (!result.hasOwnProperty(type)) {
            result[type] = 0;
        }

        result[type] += 1;
    }
}