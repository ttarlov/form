document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var totalScore = 0;
    var inputs = document.querySelectorAll("input[type='radio']:checked");
    for (var i = 0; i < inputs.length; i++) {
      totalScore += parseInt(inputs[i].value);
    }
    var resultBlock = document.createElement("div");
    resultBlock.innerHTML =
      "<h2>Total Score: " +
      totalScore +
      "</h2><button type='button' id='resetButton'>Reset</button>";
    form.parentNode.replaceChild(resultBlock, form);
    document
      .getElementById("resetButton")
      .addEventListener("click", function () {
        resultBlock.parentNode.replaceChild(form, resultBlock);
      });
  });
});
