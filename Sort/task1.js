function pair_sum_sorted_numbersay(numbers, target) {
   
    let arr=[];
    for(let i=0;i<numbers.length;i++)
        {
            let num1= numbers[i];
           
                let rem= target-num1;
            let ind= numbers.findIndex((obj,ind)=> obj==rem && ind!==i);
            if(ind!=-1)
                {
                    arr.push(i,ind);
                    return arr;
                }
                
           
        }
        return [-1,-1]

}

console.log();
let res= pair_sum_sorted_numbersay([5, 3, 10, 45, 1],6);
console.log(res)