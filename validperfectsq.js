/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {

    let bool= false;
    if(num==1)
    return true;
    for(let i=1;i<=num/2;i++)
    {
        console.log(`i :: `,i)
        let mult= i*i;
        if(mult==num)
        return true;
    }
    return false;
    
};
console.log(`Printing`);
console.log(isPerfectSquare(4));