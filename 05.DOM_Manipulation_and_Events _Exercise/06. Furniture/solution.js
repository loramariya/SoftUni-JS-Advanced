function solve() {
  const [inputTextAreaRef, resultTextAreaRef] = document.querySelectorAll("textarea");
  const [generateBtnRef, buyBtnRef] = document.querySelectorAll("button");
  const tableBodyRef = document.querySelector("tbody");

  generateBtnRef.addEventListener("click", generateInputHandler);
  buyBtnRef.addEventListener("click", buyHandler);

  function generateInputHandler(e) {
    let data = JSON.parse(inputTextAreaRef.value);

    for (let item of data) {
      createRowandAppend(item);
    }
  }

  function createRowandAppend(item) {
    const tr = document.createElement("tr");
    tr.innerHTML += createTableData(`<img src=${item.img}>`);
    tr.innerHTML += createTableData(`<p>${item.name}</p>`);
    tr.innerHTML += createTableData(`<p>${item.price}</p>`);
    tr.innerHTML += createTableData(`<p>${item.decFactor}</p>`);
    tr.innerHTML += createTableData(`<input type='checkbox'>`);
    tableBodyRef.appendChild(tr);
  }

  function createTableData(item) {
    return `<td>${item}</td>`
  }

  function buyHandler(e) {
    let name = [];
    let price = 0;
    let sumDecFac = 0;
    let selectedRows = document.querySelectorAll("input[type='checkbox']:checked");

    for (let checkbox of selectedRows) {
      let [imgRef, nameRef, priceRef, decFacRef] = Array.from(checkbox.parentElement.parentElement.children);
      let nameValue = nameRef.children[0].textContent;
      let priceValue = Number(priceRef.children[0].textContent);
      let decFactorValue = Number(decFacRef.children[0].textContent);

      name.push(nameValue);
      price += priceValue;
      sumDecFac += decFactorValue;
    }

    let result = "Bought furniture: ";
    result += name.join(", ");
    result += "\n";
    result += `Total price: ${price.toFixed(2)}\n`;
    result += `Average decoration factor: ${sumDecFac / name.length}`;
    resultTextAreaRef.value = result;
  }
}