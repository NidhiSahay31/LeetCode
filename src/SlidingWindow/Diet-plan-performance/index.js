/**
 * https://leetcode.com/problems/diet-plan-performance/
 */

/**
 * @param {number[]} calories
 * @param {number} k
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
 var dietPlanPerformance = function(calories, k, lower, upper) {
    
    let points=0;
    
    let subarraysum=0;
    for(let i=0;i<k;i++){
        subarraysum= subarraysum+calories[i];
    }
    
    if(subarraysum>upper)
        points= points+1;
    if(subarraysum<lower)
        points= points-1;
    for(let i=k;i<calories.length;i++)
        {
            subarraysum = subarraysum - calories[i-k] + calories[i];
            if(subarraysum>upper)
                points= points+1;
            if(subarraysum<lower)
                points= points-1;
        }
    console.log(`Points is ${points}`);
    return points;
    
    
};