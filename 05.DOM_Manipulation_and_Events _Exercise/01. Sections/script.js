function create(words) {
   const contentRef = document.getElementById("content");
   for (let word of words) {
      let divEl = document.createElement("div");

      let paragraphEl = document.createElement("p");
      paragraphEl.textContent = word;
      paragraphEl.style.display = "none";

      divEl.addEventListener("click", clickHandler);

      divEl.appendChild(paragraphEl);
      contentRef.appendChild(divEl);
   }

   function clickHandler(event) {
      let target = event.currentTarget;
      let children = target.children;
      let p = children[0];
      p.style.display = "block";
   }
}