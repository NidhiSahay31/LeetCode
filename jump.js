/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
   return  climb(n,0);
    
};

var climb= function(n,i){
    if(i==n)
    return 1;
    if(i>n)
    return 0;

    return climb(n,i+1)+ climb(n,i+2)
}

console.log(climbStairs(3))