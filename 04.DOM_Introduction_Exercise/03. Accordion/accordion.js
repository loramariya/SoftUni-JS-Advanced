function toggle() {
    const buttonRef = document.querySelector(".button");
    const divWrapperText = document.querySelector("#extra");

    buttonRef.textContent = buttonRef.textContent === "More" ? "Less" : "More";

    divWrapperText.style.display = 
    divWrapperText.style.display === "none" ||
    divWrapperText.style.display === ""
    ?  "block" 
    : "none";
} 