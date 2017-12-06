var translateToPigLatin = function (sentence) {
    // var pigLatinArray = sentence.split("");

    var regex = /[^a-z]/;
    if (sentence.match(regex)) {
      return sentence;
    } else if (sentence.length === 1) {
      return (sentence + "ay");
    } else {
      return (sentence + "way");
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
