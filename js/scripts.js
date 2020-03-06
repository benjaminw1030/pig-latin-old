// business logic
var pigLatinTranslation = function(sentence) {
  var sentenceSplit = sentence.split(" ");
  var pigLatinize = sentenceSplit.forEach(function(word) {
    if (word.charAt(0) === "a" || word.charAt(0) === "e" || word.charAt(0) === "i" || word.charAt(0) === "o" || word.charAt(0) === "u") {
      console.log("vowel")
    } else {
      console.log("consonant");
    };
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