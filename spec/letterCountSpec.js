describe("letterCounter", function() {
  var letterCount = require('../letterCount.js');

  it("count all the letters in a word", function() {
    var word = "banana";
    expect(letterCount(word)).toEqual({
      b: 1,
      a: 3,
      n: 2
    });
  });

  it("should count upper and lowercase words the same", function() {
    var word = "bAnaNa";
    expect(letterCount(word)).toEqual({
      b: 1,
      a: 3,
      n: 2
    });
  });

  it("should ignore spaces", function() {
    var sentence = "banana slug";
    expect(letterCount(sentence)).toEqual({
      b: 1,
      a: 3,
      n: 2,
      s: 1,
      l: 1,
      u: 1,
      g: 1
    });
  });

});