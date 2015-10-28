/*
 * Write a function that counts the number of times each letter occurs in a given string. It should return an object containing the count for each letter.
 * @param word {string} Word to count letters in.
 * @returns characterCount {Object} Count of each character in the word.
 * @example
 * // returns {"a": 1, "p": 2, "l": 1, "e": 1}
 * letterCount("apple");
 **/
function letterCount(word) {
  // NOTE WHY WOULD YOU EVEN?! THIS IS HORRIBLE! But I'll explain what it does.
  // Question: Why is it so bad?
  return word.split("") // Same as before, we split the word.
    .filter(
        function(character) { return character.match(/[^\W]/); }) // Instead of doing an efficient replace, we filter on characters.
    .map(
        function(character) { return character.toLowerCase(); }) // Convert each character to a lowerCase version.
    .reduce(function(count, character) {
      count[character] = (count[character] || 0) + 1; // Sum the number of occurrences using a "Counter" object.
      return count;}, {});
}
