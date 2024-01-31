function addAndRemoveElements(data) {
    let n = 0;
    let result = [];

    data.forEach((x) => {
        n++;
        if (x === "add") {
            return result.push(n);
        }
        return result.pop();
    })

    result.length > 0 ? console.log(result.join("\n")) : console.log("Empty")
}

addAndRemoveElements(['add','add','add','add'])
addAndRemoveElements(['add', 'add', 'remove', 'add', 'add'])