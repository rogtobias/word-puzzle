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
        var arrayToSearch = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];

        if (arrayToSearch.indexOf(characterArray[i]) > -1) {
          console.log(16);
        }
      }
    }

    event.preventDefault();
  });
});
