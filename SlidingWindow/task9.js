/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    let ans='';
    const k=10;
    const set = new Set();
    let res = new Set();
    for(let i=0;i<k;i++)
    {
        ans= ans+s[i];
    }
   set.add(ans);
    
    for(let i=k;i<s.length;i++)
    {
        ans= ans+s[i];
        let count= ans.substring((i-k+1));
        if(set.has(count))
        {
            res.add(count);
        }
        else{
            set.add(count);
        }
    }
    let arr=[];
     res.forEach(obj=> {
        arr.push(obj)
    });
    return arr;
};

const res= findRepeatedDnaSequences('AAAAAAAAAAAAA');
console.log(`Result is =>`,res);