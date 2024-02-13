function solve() {
    const formRef = document.querySelector("form");
    const [addTask, openTask, inProgress, complete] = document.querySelectorAll("section");

    btnHandlerEnum = {
        start: function (e) {
            let currentArticle = e.target.parentElement.parentElement;
            removeBtn(e.target.parentElement);
            currentArticle.innerHTML += getBtnPartial({classes: "red", text: "Delete" }, {classes: "orange", text: "Finish" })
            let btns = currentArticle.querySelectorAll("button");
            addEventListenerToButton(btns);
            inProgress.children[1].appendChild(currentArticle);
        },
        finish: function (e) {
            let currentArticle = e.target.parentElement.parentElement;
            removeBtn(e.target.parentElement);
            complete.children[1].appendChild(currentArticle);
        },
        delete: function (e) {
            e.target.parentElement.parentElement.remove();
        }
    }

    formRef.addEventListener("submit", OnSubmitHandler);

    function OnSubmitHandler(e) {
        e.preventDefault();
        let formElements = e.target.elements;
        let taskName = formElements[0].value;
        let description = formElements[1].value;
        let date = formElements[2].value;

        if (!taskName || !description || !date) {
            return;
        }
        createArticle(taskName, description, date);
        clearForm(formElements);
    }
 
    function clearForm(formElements) {
        formElements[0].value = "";
        formElements[1].value = "";
        formElements[2].value = "";
    }

    function createArticle(name, description, date) {
        let newArticle = document.createElement("article");
        newArticle.innerHTML = getArticleTemp(name, description, date);
        openTask.children[1].appendChild(newArticle);
        let btns = newArticle.querySelectorAll("button");
        addEventListenerToButton(btns);
    }

    function clickHandler(e) {
        let currentAction = e.target.innerText.toLowerCase();
        btnHandlerEnum[currentAction](e);
    }

    function addEventListenerToButton(btns) {
        Array.from(btns).forEach(btn => btn.addEventListener("click", clickHandler));
    }

    function getArticleTemp(name, description, date) {
        return `<h3>${name}</h3>` +
            `<p>Description: ${description}</p>` +
            `<p>Due Date: ${date}</p>` +
            getBtnPartial({ classes: "green", text: "Start" }, { classes: "red", text: "Delete" })
    }

    function getBtnPartial(btn1, btn2) {
        return `<div class = "flex">` +
                  `<button class =${btn1.classes}>${btn1.text}</button>` +
                  `<button class =${btn2.classes}>${btn2.text}</button>` +
                `</div>`
    }

    function removeBtn(target) {
        target.remove();
    }
}