var translateToPigLatin = function (sentence) {
  sentence=sentence.trim();
  var finalResult = "";

  var words = sentence.split(" ");
  for (var j = 0; j < words.length; j += 1) {

    var pigLatinArray = words[j].split("");

    var vowels = ["a", "e", "i", "o", "u"];

    //
    var regex = /[^a-z, A-Z]/;
    if (words[j].match(regex)) {
      result += sentence;
    }

    else if (words[j].length === 1) { //check if sentence is one letter word
      result = (words[j] + "way"); // if above is true: execute; and leave the func
    }
    //if above is false; it goes to the next "else if"
    //we check if the first letter (pigLatinArray[0]) is a vowel
    else if (pigLatinArray[0].match(/[a,e,i,o,u,A,E,I,O,U]/)) {
      debugger;
      result = (words[j] + "way"); // if above is true: execute and leave the func
    }
    else if (pigLatinArray[0].match(/[q,Q]/) || (pigLatinArray[1].match(/[u,U]/))) {
      var result = ""
      for (var i = 2; i < pigLatinArray.length; i += 1) {
        result += pigLatinArray[i]
      }
      result += pigLatinArray[0] + pigLatinArray[1] + "ay"
    }
    else if (pigLatinArray[1].match(/[q,Q]/) || (pigLatinArray[2].match(/[u,U]/))) {
      var result = ""
      for (var i = 3; i < pigLatinArray.length; i += 1) {
        result += pigLatinArray[i]
      }
      result += pigLatinArray[0] + pigLatinArray[1] + pigLatinArray[2] + "ay"

    }
    // if above is false: go to next "else if"
    //we check if the SECOND letter (pigLatinArray[1]) is a vowel
    else if (pigLatinArray[1].match(/[a,e,i,o,u,A,E,I,O,U]/)) {
      var result = ""; // index begins at 1 which pulls the second letter and on into the variable result. Empty string in this case.
      for (var i = 1; i < pigLatinArray.length; i += 1) {
        result += pigLatinArray[i] //we loop starting from the second letter to the last; and each time add a letter to "result" string
      }
      result += pigLatinArray[0] + "ay"; // after the loop is done, we add the first letter and "ay"
      // return result; // we return result and leave the func;
      // finalResult += result + " ";

    }

    else if (pigLatinArray[2].match(/[a,e,i,o,u,A,E,I,O,U]/)) {
      var result = "";
      for (var i = 2; i < pigLatinArray.length; i += 1) {
        result += pigLatinArray[i]
      }
      result += pigLatinArray[0] + pigLatinArray[1] + "ay";
    }

    else {
      var result = "";
      for (var i = 3; i < pigLatinArray.length; i += 1) {
        result += pigLatinArray[i]
      }
      result += pigLatinArray[0] + pigLatinArray[1] + pigLatinArray[2]+ "ay";

    }
    finalResult += result + " ";

  }

  return finalResult;




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
