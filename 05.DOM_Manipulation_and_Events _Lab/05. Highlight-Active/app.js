function focused() {
    const inputFields = document.getElementsByTagName('input');

    for (let input of inputFields) {
        input.addEventListener('focus', inputFocus);
        input.addEventListener('blur', inputBlur);
    }

    function inputFocus(event) {
        const selectionElement = event.target.parentNode;
        selectionElement.classList.add('focused');
    }

    function inputBlur(event) {
        const selectionElement = event.target.parentNode;
        selectionElement.classList.remove('focused');
    }
}