function LetterChanges(str) {
  // shift the letter only
  // capital the vowel

  var REGEX_ALPHABET = /^[a-zA-Z]$/;
  var REGEX_VOWEL = /^a|e|i|o|u|A|E|I|O|U$/;

  return str.split("")
    .map(function(character) {
      if (REGEX_ALPHABET.test(character)) { // shift it
        var newChar = shiftAlphabet(character);
        return REGEX_VOWEL.test(newChar) ? newChar.toUpperCase() : newChar;
      }

      return character;
    })
    .join("");
}

/*
  formula: (i + s) % l + f
  where:
    i is index of character
    s is the number of shift
    l is the number of alphabet which is 26
    f is the code of first character which is 'A' or 'a'
*/
function shiftAlphabet(character) {
  var ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");

  var is_capital = character === character.toUpperCase();

  var i = ALPHABET.indexOf(character.toLowerCase());
  var s = 1;
  var l = ALPHABET.length;
  var f = is_capital ? "A".charCodeAt() : "a".charCodeAt();

  return String.fromCharCode((i + s) % l + f);
}

// keep this function call here
console.log(LetterChanges("abcxyz!@#$%^&*123456 ABCXYZ!@#$%^&*123456"));