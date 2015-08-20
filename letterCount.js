function letterCount(word) {
  //convert word to an array of lowercased letters ignoring spaces
  var letters = word.toLowerCase().replace(/ /g, "").split('');
  //create a placeholder object to fill and return
  var countIndex = {};
  //iterate through the letters
  letters.forEach(function(letter){
    //if the letter is defined increment it by one, otherwise set it equal to 1
    if(countIndex[letter]) {
      countIndex[letter] = countIndex[letter] + 1;
    } else {
      countIndex[letter] = 1;
    }
  });
  return countIndex;
}

//we need this to `require` this file in another file (our tests)
module.exports = letterCount;