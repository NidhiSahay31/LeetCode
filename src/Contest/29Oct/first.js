/**
 * You are given an array of equal-length strings words. Assume that the length of each string is n.

Each string words[i] can be converted into a difference integer array difference[i] of length n - 1 where difference[i][j] = words[i][j+1] - words[i][j] where 0 <= j <= n - 2. Note that the difference between two letters is the difference between their positions in the alphabet i.e. the position of 'a' is 0, 'b' is 1, and 'z' is 25.

For example, for the string "acb", the difference integer array is [2 - 0, 1 - 2] = [2, -1].
All the strings in words have the same difference integer array, except one. You should find that string.

Return the string in words that has different difference integer array.
 */

/**
 * @param {string[]} words
 * @return {string}
 */
 var oddString = function(words) {
    const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
    let dictionary=[]

    for(let i=0;i<words.length;i++){
        let n= words[i].length;
        // console.log(`n is ${n}`)
        let topush=[];
        for(let j=0;j<=n-2;j++)
        {
            let first= words[i][j+1];
            let second= words[i][j];
            let ind1=alphabet.findIndex(obj=> obj==first);
            let ind2=alphabet.findIndex(obj=> obj==second);
            topush.push(ind2-ind1);


        }
        dictionary.push(topush.toString())
    }

    console.log(`printing dictionary`);
    console.log(dictionary);

    let freq = dictionary.reduce((acc, curr) =>
    {        
        acc.set(curr, acc.has(curr) ? acc.get(curr) + 1 : 1);
        return acc;
    }, new Map());

    console.log(freq);

    return words[dictionary.findIndex(word => freq.get(word) === 1)];

    
};


console.log(oddString(["aaa","bob","ccc","ddd"]));