//Back End
var translateToPigLatin = function (sentence) {
  sentence=sentence.trim();
  var finalResult = "";

  var words = sentence.split(" ");
  for (var j = 0; j < words.length; j += 1) {

    var pigLatinArray = words[j].split("");

    var tmpPrev = "";
    if (pigLatinArray[0].match(/[(\"\[{\'@]/)) {
      tmpPrev = pigLatinArray[0];
      pigLatinArray.splice(0,1);
    }

    if (words[j].length === 1) { //check if sentence is one letter word
      result = (words[j] + "way"); // if above is true: execute; and leave the func
    }
    //if above is false; it goes to the next "else if"
    //we check if the first letter (pigLatinArray[0]) is a vowel

    else if (pigLatinArray[0].match(/[aeiouAEIOU]/)) {
      var tmp = "";
      var wordWithoutPunctuation = words[j];
      for (var i = 0; i < pigLatinArray.length; i += 1){
        if (pigLatinArray[i].match(/[^a-z A-Z]/)) {
          wordWithoutPunctuation = words[j].slice(0, words[j].length-1)
          tmp += pigLatinArray[i];
        }
      }
      result = (wordWithoutPunctuation + "way" + tmp); // if above is true: execute and leave the func
    }
    else if (pigLatinArray[0].match(/[qQ]/) || (pigLatinArray[1].match(/[uU]/))) {
      var result = ""
      var tmp = "";
      for (var i = 2; i < pigLatinArray.length; i += 1) {
        if (pigLatinArray[i].match(/[^a-z A-Z]/)) {
          tmp += pigLatinArray[i];
        } else {
          result += pigLatinArray[i];
        }
      }
      result += pigLatinArray[0] + pigLatinArray[1] + "ay" + tmp;
    }

    // if above is false: go to next "else if"
    //we check if the SECOND letter (pigLatinArray[1]) is a vowel
    else if (pigLatinArray[1].match(/[aeiouAEIOU]/)) {
      var result = "";
      var tmp = ""; // index begins at 1 which pulls the second letter and on into the variable result. Empty string in this case.
      for (var i = 1; i < pigLatinArray.length; i += 1) {
        if (pigLatinArray[i].match(/[^a-z A-Z]/)) {
          tmp += pigLatinArray[i];
        } else {
          result += pigLatinArray[i];
        }//we loop starting from the second letter to the last; and each time add a letter to "result" string
      }
      result += pigLatinArray[0] + "ay" + tmp; // after the loop is done, we add the first letter and "ay"
      // return result; // we return result and leave the func;
      // finalResult += result + " ";

    }
    else if (pigLatinArray[1].match(/[q,Q]/) || (pigLatinArray[2].match(/[u,U]/))) {
      var result = ""
      var tmp = "";
      for (var i = 3; i < pigLatinArray.length; i += 1) {
        if (pigLatinArray[i].match(/[^a-z, A-Z]/)) {
          tmp += pigLatinArray[i];
        } else {
          result += pigLatinArray[i];
        }
      }
      result += pigLatinArray[0] + pigLatinArray[1] + pigLatinArray[2] + "ay"+ tmp;
    }

    else if (pigLatinArray[2].match(/[a,e,i,o,u,A,E,I,O,U]/)) {
      var result = "";
      var tmp = "";
      for (var i = 2; i < pigLatinArray.length; i += 1) {
        if (pigLatinArray[i].match(/[^a-z, A-Z]/)) {
          tmp += pigLatinArray[i];
        } else {
          result += pigLatinArray[i];
        }
      }
      result += pigLatinArray[0] + pigLatinArray[1] + "ay" + tmp;
    }

    else {
      var result = "";
      var tmp = "";
      for (var i = 3; i < pigLatinArray.length; i += 1) {
        if (pigLatinArray[i].match(/[^a-z, A-Z]/)) {
          tmp += pigLatinArray[i]
        } else {
          result += pigLatinArray[i];
        }
      }
      result += pigLatinArray[0] + pigLatinArray[1] + pigLatinArray[2]+ "ay" + tmp;

    }
    finalResult += tmpPrev + result + " ";

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
