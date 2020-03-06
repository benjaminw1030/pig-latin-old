// business logic
var pigLatinTranslation = function(sentence) {
  var sentenceSplit = sentence.split(" ");
  var pigLatinize = sentenceSplit.forEach(function(word) {
    var letters = word.split("");
    if (letters[0] === "a" || letters[0] === "e" || letters[0] === "i" || letters[0] === "o" || letters[0] === "u") {
      letters.push("way");
      letters.join();
    } else {
      letters.push(letters[0])
      letters.shift();
      letters.push("ay")
    }     

    if (letter === "a" || word.charAt(0) === "e" || word.charAt(0) === "i" || word.charAt(0) === "o" || word.charAt(0) === "u") {
      word = word + "way";
    } else {
      word = wor
    };
    console.log(word);
  });
  return pigLatinize;
};

// user interface logic
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var sentence = $("input#sentence").val();
    var translation = pigLatinTranslation(sentence);
    console.log(translation);
    $("#translation").text(translation);
    $("#translation").show();
  });
});