function lockedProfile() {
    let buttons = Array.from(document.querySelectorAll("button"));

    buttons.forEach(x => x.addEventListener("click", onClick));

    function onClick(e) {
        let hiddenInfo = e.currentTarget.parentElement.querySelector("div");
        let currentRadioButton = e.target.parentElement.querySelector("input[type='radio']:checked");

        if (currentRadioButton.value === "unlock") {
            if (e.currentTarget.textContent === "Show more") {
                e.currentTarget.textContent = "Hide it";
                hiddenInfo.style.display = "block";
            } else {
                e.currentTarget.textContent = "Show more";
                hiddenInfo.style.display = "none";
            }
        }
    }
}