/**
 * @param {str} s
 * @return {list_str}
 */
function find_all_possibilities(s) {
    // Write your code here.
    let res= [];
    function helper(s,i,slate)
    {
        if(i==s.length)
        {
            // console.log('brk1');
            console.log(s,i);
            console.log(slate);
            res.push(slate);
            return;
        }
        if(s[i]!=='?')
        {
            slate= slate+s[i];
            helper(s,i+1,slate);
            slate.slice(0, -1)
        }
        else{
            slate= slate+'0';
            helper(s,i+1,slate);
            slate.slice(0, -1)
            slate= slate+'1';
            helper(s,i+1,slate);
            slate.slice(0, -1)
        }
    }
    helper(s,0,'');
    return res;
}

let result= find_all_possibilities('1?10');
console.log(result);
