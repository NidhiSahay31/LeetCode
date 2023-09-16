/**
 * https://www.geeksforgeeks.org/program-for-sum-of-the-digits-of-a-given-number/
 */

function sumofdigits(num){
    // console.log(num)
    if(num<=0)
    return 0;

    return num%10 + sumofdigits(~~(num/10));
}

console.log(sumofdigits(171))