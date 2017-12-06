var translateToPigLatin = function (sentence) {
    // var pigLatinArray = sentence.split("");
    if (sentence !== /[^a-z]/) {
      return sentence;
    }

}




//Front End
$(document).ready(function() {
  $("#pig-latin").submit(function(event) {
    event.preventDefault();
    var sentence = $("input#sentence").val();

    var result = translateToPigLatin(sentence);

    $("#result").text(result);
  });
});
