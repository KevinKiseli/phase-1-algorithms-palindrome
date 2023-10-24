function isPalindrome(word) {
  
const backwardWord = backwardString(word);

if (word === backwardWord) {
  return true;
}
else {
  return false;
}

}
// Write your algorithm here

function backwardString(word) {
  const wordArray = word.split ("");
  const reversedWordArray = wordArray.reverse();
  const backwardWord = reversedWordArray.join("");

  return backwardWord;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));



  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));


}

module.exports = isPalindrome;
