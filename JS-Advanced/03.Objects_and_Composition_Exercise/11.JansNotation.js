function jansNotation(input) {
    let result = [];

    function applyOperation(firstOperand, secondOperand, operator) {
        switch (operator) {
            case '+':
                return firstOperand + secondOperand;
            case '-':
                return firstOperand - secondOperand;
            case '*':
                return firstOperand * secondOperand;
            case '/':
                return firstOperand / secondOperand;
        }
    }

    for (let element of input) {
        if (typeof element === 'number') {
            result.push(element);
        }
        else {
            if (result.length < 2) {
                return 'Error: not enough operands!';
            }
            let secondOperand = result.pop();
            let firstOperand = result.pop();
            result.push(applyOperation(firstOperand, secondOperand, element));
        }
    }

    if (result.length > 1) {
        return 'Error: too many operands!'
    }

    return result[0].toString();

}

console.log(jansNotation([3, 4, '+']));
console.log(jansNotation([5, 3, 4, '*', '-']));
console.log(jansNotation([7, 33, 8, '-']));
console.log(jansNotation([15, '/']));