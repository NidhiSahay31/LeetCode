/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let results=[];

    nums.map(obj=>{
        let digits= separate(obj);
        // console.log(digits);
        results=[...results,...digits]
    });
    return results;


    
};

var separate = function(num) {
    let arr=[];
    while(num>0)
    {
        let rem= num%10;
        arr.unshift(rem);
        num= ~~(num/10);
    }
    return arr;
}


const result= separateDigits([7,1,3,9]);
console.log(`Result is ::`);
console.log(result);