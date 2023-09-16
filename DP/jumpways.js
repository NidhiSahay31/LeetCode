
/**
 * @param {int32} n
 * @return {int64}
 */
function jump_ways(n) {
    // Write your code here.
    if(n==1)
    return 1;
    
    if(n==2)
    return 2;

    const jumpArray = new Array(n + 1);
    jumpArray[0]=1;
    jumpArray[1] = 1;
    
    for(let i=2;i<=n;i++)
    {
        jumpArray[i]=jumpArray[i-1] + jumpArray[i-2];
    }
    // console.log(jumpArray)
    return jumpArray[n];
}

let res= jump_ways(4);
console.log(res);