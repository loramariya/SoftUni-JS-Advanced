function encodeAndDecodeMessages() {
    const [firstInputRef, secondInputRef] = document.querySelectorAll("textarea");
    const [encodeBtnRef, decodeBtnRef] = document.querySelectorAll("button");

    encodeBtnRef.addEventListener("click", encodeMessage);
    decodeBtnRef.addEventListener("click", decodeMessage);
    let encodedMessage = "";

    function encodeMessage(e) {
        let message = firstInputRef.value;
        let result = "";

        for (let index in message) {
            result += String.fromCharCode(message.charCodeAt(index) + 1);
        }

        firstInputRef.value = "";
        secondInputRef.value = result;
        encodedMessage = result;
    }

    function decodeMessage(e) {
        let message = encodedMessage;
        let decodedMessage = "";

        for (let index in message) {
            decodedMessage += String.fromCharCode(message.charCodeAt(index) - 1);
            secondInputRef.value = decodedMessage;
        }
    }
}