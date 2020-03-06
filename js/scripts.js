// business logic
var pigLatinTranslation = function(word) {
  
};

// user interface logic
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var sentence = $("input#sentence").val();
    var translation = pigLatinTranslation(sentence);
    $("#translation").text(translation)
    $("#translation").show();
  });
});