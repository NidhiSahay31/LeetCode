
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let num = 1;
let index = 0;
while (k > 0) {
  arr[index] === num ? index++ : k--;
  num++;
//   console.log(num, k, index)
}
return num - 1;
    
};

console.log(findKthPositive([2,3,4,7,11],5));