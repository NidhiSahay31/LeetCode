/**
 * 
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var secondGreaterElement = function(nums) {

    let result= [];


    for(let i=0;i<nums.length;i++)
    {
        let higher=0;
        let j= i+1;
        let num1= nums[i];
        const ar2 = nums.slice(j, nums.length);
        console.log(ar2);
        for(j=i+1; higher<2 && j< nums.length;j++){
            let num2= nums[j];
            if(num2>num1)
            {
                higher= higher+1;
            }
             
            if(higher==2)
            {
                result.push(num2);
            }

        }
        if(higher!=2)
        result.push(-1);
    }

    return result;
    
};

console.log(secondGreaterElement([1,17,18,0,18,10,20,0]));