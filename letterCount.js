/*
 * Write a function that counts the number of times each letter occurs in a given string. It should return an object containing the count for each letter.
 * @param word {string} Word to count letters in.
 * @returns characterCount {Object} Count of each character in the word.
 * @example
 * // returns {"a": 1, "p": 2, "l": 1, "e": 1}
 * letterCount("apple");
 * @todo Implement this function then remove this todo.
 **/
function letterCount(word) {
  var characterCount = {};
  var arr = word.split("");
  var count=1;
  	arr.sort();
  	for(; arr.length >= 1;){		
  			if(arr[0]===arr[1]){
  				count+=1;
  			}
  			else{
  				characterCount[arr[0]] = count;
  				count = 1;
  			}
  			arr.shift(arr[0]);
     
  }

  return characterCount;
}

