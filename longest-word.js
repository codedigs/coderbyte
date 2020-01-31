function LongestWord(sen) {
  var REGEX_ALPHANUM = /[a-zA-Z0-9]+/g;

  var words = sen.split(" ")
    .map(function(word) {
      var matches = word.match(REGEX_ALPHANUM); // filter alphabet only
      return matches[0].toString();
    });

  var maxIndex = 0;
  for (var i = 1; i < words.length; i++) {
    if (words[i].length > words[maxIndex].length) {
      maxIndex = i;
    }
  }

  return words[maxIndex];
}

// keep this function call here
console.log(LongestWord("12345 23456780 12 hfdskja"));
