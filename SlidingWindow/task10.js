/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let set= new Set();
    console.log(set.size);
    let ans=[];
    let left= 0;
    let right= 0;
    let k=3;
   
    while (right< fruits.length) {
       ans.push(fruits[right]);
       console.log(`=================`);
        console.log(ans);
        while (ans.length>=k) {
            console.log('inner loop',ans);
            ans= ans.slice(left)
            left++;
            
        }
        
        right++;
        left=0;
    }
};

let res= totalFruit([0,1,2,2,0,1,2,3,4,5,6,7])