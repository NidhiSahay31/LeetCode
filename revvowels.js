/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {

    let vowels= [];
    for(let i=0;i<s.length;i++)
    {
        let ch= s[i];
        if(ch.toLowerCase()=='a'||ch.toLowerCase()=='e'||ch.toLowerCase()=='i'||ch.toLowerCase()=='o'||ch.toLowerCase()=='u')
        {
            vowels.unshift(ch);
        }
    }
    console.log(vowels);
    let result="";
    let j=0;

    for(let i=0;i<s.length;i++)
    {
        let ch= s[i];
         if(ch.toLowerCase()=='a'||ch.toLowerCase()=='e'||ch.toLowerCase()=='i'||ch.toLowerCase()=='o'||ch.toLowerCase()=='u')
        {
            result= result+vowels[j];
            j++;
           
        }
        else{
            result= result+ch;
        }

    }
    return result;
    
};

console.log(reverseVowels('aA'));