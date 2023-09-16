/**
 * Given an array of integers of size ‘n’, Our aim is to calculate the maximum sum of ‘k’ consecutive elements in the array.
 */

function maxSum(arr,k){
    let baseSum=0;
    let max=0;
    for(let i=0; i<k; i++)
    {
       baseSum= baseSum+arr[i];
    }
    max= baseSum;
    
    for(let i=k;i< arr.length; i++)
    {
        baseSum= baseSum- arr[i-k] + arr[i];
        // console.log(`Basesum is`, baseSum);
        max= max<baseSum ? baseSum : max;
    }

    return max;
}

// calling function
let res = maxSum([1, 4, 2, 10, 2, 3, 1, 0, 20],4);
console.log(`**********Result is ***********`, res);