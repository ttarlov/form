function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  var totalScore = 0;

  // Calculate the total score
  var inputs = document.querySelectorAll("input[type='radio']:checked");
  for (var i = 0; i < inputs.length; i++) {
    totalScore += parseInt(inputs[i].value);
  }

  // Create a result block to display the total score
  var resultBlock = document.createElement("div");
  resultBlock.className = "result-block"; // Assign a class for styling
  resultBlock.innerHTML =
    "<h2>Total Score: " +
    totalScore +
    "</h2><button type='button' class='resetButton' id='resetButton'>Reset</button>";

  // Replace the form with the result block
  var form = document.querySelector("form");
  form.parentNode.replaceChild(resultBlock, form);

  // Add an event listener to the reset button to reload the page
  document.getElementById("resetButton").addEventListener("click", function () {
    location.reload(); // Reload the page to reset the form
  });
}
