function reverse(word) {
  return word.split("").reverse().join("");
}


function isPalindrome(word) {
  // Write your algorithm here
  // Reverse the input word/string
  // Check whether the reversed string is equal to the original string
  // If reversed word is equla to the initial string, return true, else return false

  const reversedWord = reverse(word);

  if (reversedWord === word) {
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here
*/
  // reverse the input string
  // if the reversed string is the same as the input
  //   return true
  // else
  //   return false

/*
  Add written explanation of your solution here
  A palindrome is a word that is spelt bthe same way in reverse/backwards.
  The isPalindrome function takes in the string and reverses it, the checks if its the same as the original string.
  */

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
