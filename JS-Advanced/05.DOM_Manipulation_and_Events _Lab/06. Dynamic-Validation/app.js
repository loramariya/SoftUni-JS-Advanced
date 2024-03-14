function validate() {
    const inputElement = document.getElementById("email");
    const regex = new RegExp("[a-z]+@[a-z]+.[a-z]+");

    inputElement.addEventListener("change", validateEmail);

    function validateEmail(event) {
        if (regex.test(inputElement.value)) {
            inputElement.className = "";
        }
        else {
            inputElement.className = "error";
        }
    }

}