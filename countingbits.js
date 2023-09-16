var bits= function(num){

    let arr=[];
    while(num>0)
    {
        
        let rem= num%2;
        num= ~~(num/2);
        arr.unshift(rem)
    }
    return arr
}

// console.log(`Calling`);
// console.log(bits(5).join(''));
let arr1=[];
var bitsrecursion= function(num,arr1)
{
    if(num==0)
    return;

    arr1.unshift(num%2)
    bitsrecursion(~~(num/2))
}
console.log(`Calling with recursion`);

bitsrecursion(5,arr1);
console.log(arr1)