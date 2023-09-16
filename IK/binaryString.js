/**
 * @param {int32} n
 * @return {list_str}
 */
function get_binary_strings(n) {
    // Write your code here.
    const slate= "";
    let res= [];
   helper(n,slate);
   console.log(slate)
   return res;
}

function helper(n, slate)
{
    
    if(n==1)
    {
        console.log(slate, 'value of n is', n)

    }

    else{
        helper(n-1, "0"+slate);
        helper(n-1, "1"+slate);
    }
}

const result= get_binary_strings(5);
console.log(result);