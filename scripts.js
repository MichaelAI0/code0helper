var textElement;
var documentBody;
window.onload = function () {
  document
    .getElementById("changeColorButton") // Corrected here
    .addEventListener("click", function () {
      textElement = document.getElementById("mainText");
      if (textElement !== null) {
        textElement.style.color = "black";
        textElement.style.color =
          textElement.style.color == "blue" ? "black" : "blue";
      }
    });

  document
    .getElementById("bgColorButton")
    .addEventListener("click", function () {
      documentBody = document.body;
      if (documentBody !== null) {
        documentBody.style.backgroundColor =
          documentBody.style.backgroundColor == "blue" ? "green" : "blue";
      }
    });
};
