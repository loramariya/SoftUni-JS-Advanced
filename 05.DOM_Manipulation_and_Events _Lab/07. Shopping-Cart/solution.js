function solve() {
   const addButtons = document.querySelectorAll(".add-product");
   const checkoutButton = document.querySelector(".checkout");
   const textareaElement = document.querySelector("textarea");

   let products = [];
   let totalPrice = 0;

   for (const button of addButtons) {
      button.addEventListener("click", addProduct);
   }

   checkoutButton.addEventListener("click", checkout);

   function addProduct(event) {
      const productElement = event.target.parentElement.parentElement;
      const productTitle = productElement.querySelector(".product-title");
      const productPrice = productElement.querySelector(".product-line-price");

      printMessage(productTitle, productPrice);

      if (!products.includes(productTitle.textContent)) {
         products.push(productTitle.textContent);
      }

      totalPrice += Number(productPrice.textContent);
   }

   function printMessage(productTitle, productPrice) {
      textareaElement.textContent +=
         `Added ${productTitle.textContent} for ${productPrice.textContent} to the cart.\n`;
   }

   function checkout(event) {
      textareaElement.textContent +=
         `You bought ${products.join(', ')} for ${totalPrice.toFixed(2)}.`;
      disableButtons();
   }

   function disableButtons() {
      let buttons = Array.from(document.querySelectorAll("button"));
      buttons.forEach(button => button.disabled = true);
   }
}