var translateToPigLatin = function (sentence) {
    var pigLatinArray = sentence.split("");

    var vowels = ["a", "e", "i", "o", "u"];

    var regex = /[^a-z]/;
    if (sentence.match(regex)) {
      return sentence;
    } else if (sentence.length === 1) {
      return (sentence + "ay");
    } else if ((pigLatinArray[0] === "a") || (pigLatinArray[0] === "e") || (pigLatinArray[0] === "i") || (pigLatinArray[0] === "o") || (pigLatinArray[0] === "u")) {
      return (sentence + "way");
    } else if ((pigLatinArray[1] === "a") || (pigLatinArray[1] === "e") || (pigLatinArray[1] === "i") || (pigLatinArray[1] === "o") || (pigLatinArray[1] === "u")){
      var result = ""; // index begins at 1 which pulls the second letter and on into the variable result. Empty string in this case.
      for (var i = 1; i < pigLatinArray.length; i += 1) {
        result += pigLatinArray[i]
      }
      result += pigLatinArray[0] + "ay";
      return result;
    } else {
      var result = "";
      for (var i = 2; i < pigLatinArray.length; i += 1) {
        result += pigLatinArray[i]
      }
      result += pigLatinArray[0] + pigLatinArray[1] + "ay";
      return result;
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
