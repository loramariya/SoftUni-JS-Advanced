function add(num) {
    let sum = 0;
    sum += num;

    function calc(num2) {
        sum += num2;
        return calc;
    }

    calc.toString = () => sum;

    return calc;
}