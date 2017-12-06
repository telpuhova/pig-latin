var translateToPigLatin = function (sentence) {
    var pigLatinArray = sentence.split("");

    var vowels = ["a", "e", "i", "o", "u"];

    //
    var regex = /[^a-z]/;
    if (sentence.match(regex)) {
      return sentence;
    }

    else if (sentence.length === 1) { //check if sentence is one letter word
      return (sentence + "ay"); // if above is true: execute; and leave the func
    }
    //if above is false; it goes to the next "else if"
    //we check if the first letter (pigLatinArray[0]) is a vowel
    else if ((pigLatinArray[0] === "a") || (pigLatinArray[0] === "e") || (pigLatinArray[0] === "i") || (pigLatinArray[0] === "o") || (pigLatinArray[0] === "u")) {
      return (sentence + "way"); // if above is true: execute and leave the func
    }
    // if above is false: go to next "else if"
    //we check if the SECOND letter (pigLatinArray[1]) is a vowel
    else if ((pigLatinArray[1] === "a") || (pigLatinArray[1] === "e") || (pigLatinArray[1] === "i") || (pigLatinArray[1] === "o") || (pigLatinArray[1] === "u")){
      var result = ""; // index begins at 1 which pulls the second letter and on into the variable result. Empty string in this case.
      for (var i = 1; i < pigLatinArray.length; i += 1) {
        result += pigLatinArray[i] //we loop starting from the second letter to the last; and each time add a letter to "result" string
      }
      result += pigLatinArray[0] + "ay"; // after the loop is done, we add the first letter and "ay"
      return result; // we return result and leave the func;
    }

    else if ((pigLatinArray[2] === "a") || (pigLatinArray[2] === "e") || (pigLatinArray[2] === "i") || (pigLatinArray[2] === "o") || (pigLatinArray[2] === "u")){
      var result = "";
      for (var i = 2; i < pigLatinArray.length; i += 1) {
        result += pigLatinArray[i]
      }
      result += pigLatinArray[0] + pigLatinArray[1] + "ay";
      return result;
    }

    else {
      var result = "";
      for (var i = 3; i < pigLatinArray.length; i += 1) {
        result += pigLatinArray[i]
      }
      result += pigLatinArray[0] + pigLatinArray[1] + pigLatinArray[2]+ "ay";
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
