/*
 * Write a function that counts the number of times each letter occurs in a given string. It should return an object containing the count for each letter.
 * @param word {string} Word to count letters in.
 * @returns characterCount {Object} Count of each character in the word.
 * @example
 * // returns {"a": 1, "p": 2, "l": 1, "e": 1}
 * letterCount("apple");
 **/
function letterCount(word) {
  // Create a placeholder object to fill.
  var characterCount = {};
  // Lowercase the word, remove any non-"word" characters and then convert to a list of characters.
  // NOTE WHAT IS \W?! It is a regular expression, checkout regular expression syntax.
  var characters = word.replace(/\W/g, "").toLowerCase().split('');

  // Iterate over the characters. Can you do this with another type of for loop? PROVE IT I DARE YOU!
  characters.forEach(function(character){
    // If we don't have a count for this character, we initialize it as 0.
    if (!(character in characterCount)) {
      characterCount[character] = 0;
    }

    // Increment the character count.
    characterCount[character]++;
  });

  return characterCount;
}
