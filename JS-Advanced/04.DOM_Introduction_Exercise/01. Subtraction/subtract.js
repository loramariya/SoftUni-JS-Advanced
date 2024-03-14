function subtract() {
    const result = document.getElementById("result");
    const firstNum = document.getElementById("firstNumber").value;
    const secondNum = document.getElementById("secondNumber").value;

    result.textContent = Number(firstNum) - Number(secondNum);
}