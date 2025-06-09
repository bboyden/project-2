/*
  CIT 281 Project 2
  Name: Ben Boyden
*/

// Returns a random number between min (inclusive) and max (exclusive)
const getRandomInteger = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  };
  
 // It will return a single random lowercase letter
  const getRandomLetter = function() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    return alphabet[getRandomInteger(0, alphabet.length)];
  };
  
  //A string of random lowercase letters of random length
  const getRandomString = function(minLength, maxLength) {
    let result = "";
    const targetLength = getRandomInteger(minLength, maxLength);
    for (let i = 0; i < targetLength; i++) {
      result += getRandomLetter();
    }
    return result;
  };
  
  //A string in alphabetical order
  const getSortedString = function(string) {
    return string.split("").sort().join("");
  };
  
  
const randomStr = getRandomString(10, 20);
console.log(randomStr);
console.log(getSortedString(randomStr));
