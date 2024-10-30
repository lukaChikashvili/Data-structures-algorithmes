// valid anagram
const isAnagram = (s, t) => {
    if(s.length !== t.length) return false;

    const counter = {};

    for(const char of s) {
        counter[char] = (counter[char] || 0) + 1;

    }

    for(const char of t) {
        if(!counter[char]) return false;
    } 

    return true;
}


console.log(isAnagram("anagram", "nagaram"))