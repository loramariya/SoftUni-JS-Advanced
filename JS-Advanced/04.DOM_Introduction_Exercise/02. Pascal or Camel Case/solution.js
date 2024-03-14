function solve() {
  const resultRef = document.getElementById("result");
  let textArea = document.getElementById("text").value;
  let convention = document.getElementById("naming-convention").value;
  textArea = textArea.toLowerCase();
  let result = "";
  let input = textArea.split(" ");

  switch (convention) {
    case "Camel Case":
      result = input.shift();

      input.forEach(word => {
        result += word[0].toUpperCase() + word.substring(1).toLowerCase();
      });
      break;
    case "Pascal Case":
      input.forEach(word => {
        result += word[0].toUpperCase() + word.substring(1);
      });
      break;

    default:
      result = "Error!"
      break;
  }
  resultRef.textContent = result;
}