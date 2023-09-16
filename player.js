/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
    let sum1= 0;
    let sum2=0;
    let i=1;
   
    while(nums.length>0)
    {
        let start= 0;
        let end= nums.length-1;
       
        let first= nums[start];
        let sec= nums[end];
        if(i%2==0)
        {
            console.log('Inside if1')
            if(first>sec)
            {
            sum2= sum2+first;
            nums.splice(start,1)
        }
            else
            {
            sum2= sum2+sec;
            nums.splice(end,1);
            }
            console.log(sum2)


        }
        else{
            console.log('Inside else1')
             if(first>sec)
             {
            sum1= sum1+first;
            nums.splice(start,1);
             }
            else
            {
            sum1= sum1+sec;
            nums.splice(end,1);
            }

        }
        console.log(nums);
        i++;

    }
    console.log(sum1,sum2);
    return sum1>sum2 ? true:false;
    
};

console.log(PredictTheWinner([1,5,233,7]))