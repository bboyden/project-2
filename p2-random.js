/*
  CIT 281 Project 2
  Name: Ben Boyden
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let result = "";
  
  // It will return a single random lowercase letter
function getRandomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    return alphabet[getRandomInteger(1, alphabet.length - 1)];
  }  
  
  // It will return a random string of random length between minLength and maxLength
function getRandomString(minLength, maxLength) {
    const length = getRandomInteger(minLength, maxLength);
    let result = "";
    for (let i = 0; i < length; i++) {
      result += getRandomLetter();
    }
    return result;
  }
  
  for (let i = 0; i < getRandomInteger(5, 26); i++) {
    result += getRandomLetter();
  }
  
  console.log(result);
  
  
