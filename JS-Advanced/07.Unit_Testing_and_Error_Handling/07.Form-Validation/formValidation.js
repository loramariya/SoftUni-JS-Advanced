function validate() {
    const html = {
        companyCheck: document.getElementById("company"),
        submit: document.getElementById("submit"),
        validDiv: document.getElementById("valid"),
        companyInfo: document.getElementById("companyInfo"),
    };

    const inputFields = {
        username: document.getElementById("username"),
        email: document.getElementById("email"),
        password: document.getElementById("password"),
        "confirm-password": document.getElementById("confirm-password"),
        companyNumber: document.getElementById("companyNumber"),
    };

    const checkLength = (inputValue, lowerLen, greaterLen) =>
        inputValue.length >= lowerLen && inputValue.length <= greaterLen;

    const checkPassword = (inputValue, lowerLen, greaterLen, field) => {
        return (
            checkLength(inputValue, lowerLen, greaterLen) &&
            /^\w+$/g.test(inputValue) &&
            inputValue === inputFields[field].value
        );
    };

    const validate = {
        username: (v) => checkLength(v, 3, 20) && /^[a-zA-Z0-9]*$/g.test(v),
        password: (v) => checkPassword(v, 5, 15, "confirm-password"),
        "confirm-password": (v) => checkPassword(v, 5, 15, "password"),
        email: (v) => /^.*@.*\..*$/g.test(v),
        companyNumber: (v, isChecked) =>{
            if (isChecked ) {
                return v >= 1000 && v <= 9999;
            }

            return true;
        },
    };

    const changeBorder = (isChecked, element) => {
        const style = isChecked ? "border: none" : "border-color: red";
        element.style = style;
    };

    html.companyCheck.addEventListener("change", onChange);
    html.submit.addEventListener("click", onClick);

    function onChange(e) {
        const displayStyle = e.target.checked === true ? "block" : "none";
        html.companyInfo.style.display = displayStyle;
    }

    function onClick(e) {
        e.preventDefault();

        const isChecked = html.companyCheck.checked;
        let oneInvalid = false;

        Object.entries(inputFields).forEach(([name, valueField]) => {
            const valid = validate[name](valueField.value, isChecked);
            changeBorder(valid, inputFields[name]);

            if (!valid) {
                oneInvalid = true;
            }
        });

        const displayStyled = oneInvalid ? "none" : "block";
        html.validDiv.style.display = displayStyled;
    };
}
