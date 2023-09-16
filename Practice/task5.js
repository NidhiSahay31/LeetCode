/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {

    let arr=[];
    for(let i=0;i<letters.length;i++)
    {
        arr.push({ diff: letters[i].charCodeAt(0)-target.charCodeAt(0), index: i})
    }
    console.log(arr);
    let obj= arr.find(obj=> obj.diff>0)
    return letters[obj.index]
    
};

let ans= nextGreatestLetter(["c","f","j"],'b');
console.log(ans)