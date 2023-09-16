/**
 * @param {number[]} arr
 * @return {number}
 */
var fixedPoint = function(arr) {
    let start = 0;
   let end = arr.length - 1;
   let res=-1;

   while (start <= end) {
       let middle = Math.floor((start + end) / 2);

       if (arr[middle] === middle) {
           // found the key
           res = middle;
          end = middle - 1;
       } else if (arr[middle] < middle) {
           // continue searching to the right
           start = middle + 1;
       } else {
           // search searching to the left
           end = middle - 1;
       }
   }
   // key wasn't found
   return res;
   
};


let res= fixedPoint([-10,-5,0,3,7]);
console.log(`Printing result :: ${res}`);