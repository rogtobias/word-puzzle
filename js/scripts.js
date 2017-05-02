$(document).ready(function(event) {
  $("#playerOne").submit(function(event) {
    debugger;
    var originalSentence = $("input#originalSentence").val();

    if (originalSentence === "") {
      alert("Please enter at least one sentence.")
    } else {
      var characterArray = [];

      for (var i = 0; i < originalSentence.length; i++) {
        characterArray.push(originalSentence[i]);
      }
    }

    event.preventDefault();
  });
});
