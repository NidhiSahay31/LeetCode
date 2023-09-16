/**
 * Write a function called minSubArrayLen which accepts two parameters — an array of positive integers and a positive integer. 
 * The function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the intger
 *  passed in. If there isn’t one, return 0.
 */

function minSubArrayLen(arr, num) {
    // to check sum of values against num
    let sum = 0
    // to track window's leading edge
    let right = 0
    // to track window's trailing edge
    let left = 0
    // to track smallest subarray length
    let minLen = Infinity;
    let ans= Infinity;
  
    // while window's trailing edge has NOT reached the end of the array
    while (right < arr.length) {
        console.log(`Right index is ${right}`,sum)
        sum= sum+ arr[right];
        while(sum>=num)
        {
            ans= Math.min(ans, right-left+1)
            sum= sum-arr[left];
            left++;
            console.log(`Left index is ${left}`, sum)
        }
        right++;
        console.log(`Answer is`,ans)

    
    }
    // return smallest subarray length found or 0
    // if minLen is never updated, then there is NOT a sum >= num, so return 0
    return ans === Infinity ? 0 : ans
  }

  let res= minSubArrayLen([2,3,1,2,4,3],7);
  console.log(`Result finally is :: `,res)