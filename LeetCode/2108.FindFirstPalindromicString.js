const firstPalindrome = (words) => {
    // loop through words
    for(let i = 0;  i < words.length; i++) {
       if(isPalindrome(words[i])) {
         return words[i];
       }
    }

    return ""

    // check palindrome function
    function isPalindrome(str) {
      let reversed = str.split("").reverse().join("");

      return reversed === str;
    }

}

console.log(firstPalindrome(["abc","car","ada","racecar","cool"]));