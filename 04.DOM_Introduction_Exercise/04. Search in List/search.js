function search() {
   const listItems = document.querySelectorAll("#towns li");
   let inputValue = document.querySelector("input").value;
   let result = document.getElementById("result");

   let matches = 0;

   for (const li of listItems) {
      const inputToLower = inputValue.toLowerCase();
      const liTextToLower = li.textContent.toLowerCase();

      if (liTextToLower.includes(inputToLower)) {
         li.style.fontWeight = "bold";
         li.style.textDecoration = "underline";
         matches++;
      }
      else {
         li.style.fontWeight = "";
         li.style.textDecoration = "";
      }
   }

   result.textContent = `${matches} matches found`;
}
