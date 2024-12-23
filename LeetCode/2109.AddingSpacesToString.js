var addSpaces = function(s, spaces) {
    let result = [];
    let prevIndex = 0;
 
    for(let i = 0; i < spaces.length; i++) {
        let spaceIndex = spaces[i];
 
        result.push(s.slice(prevIndex, spaceIndex));
        result.push(" ");
        prevIndex = spaceIndex;
 
    }
 
     result.push(s.slice(prevIndex));
 
     return result.join("");
 };
 
 console.log(addSpaces("LeetcodeHelpsMeLearn", [8,13,15]))