// business logic
var pigLatinTranslation = function(sentence) {
  var sentenceSplit = sentence.split(" ");
  return sentenceSplit;
};

// user interface logic
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var sentence = $("input#sentence").val();
    var translation = pigLatinTranslation(sentence);
    console.log(translation)
    $("#translation").text(translation)
    $("#translation").show();
  });
});