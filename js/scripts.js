$(document).ready(function() {
  $("#pig-latin").submit(function(event) {
    var sentence = $("input#sentence").val();

    var result = translateToPigLatin(sentence);

    $("#result").text(result);
  });
});
