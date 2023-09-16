/*
 * Complete the 'superDigit' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING n
 *  2. INTEGER k
 */

function superDigit(n, k) {
    // Write your code here
    /**let num="";
    for(let i=0;i<k;i++)
    {
        num= num+n;

    }
    let result;
    
    while(num.length>1)
    {
    console.log('Num is', (num));
    const length= num.length;
      result = sum4(num);
      let nums= Number(result);
      num= result.toString();  
      console.log(`Sum is ${nums}, num is now ${num}`);    
    }
    return result;
    */

    n=n.split('').map(i=>i*k).join('');
for(let i=0;i>-1;i++){
n=n.toString().split('').reduce((a,b)=>Number(a)+Number(b)).toString()
if(n.length==1){
  break;
}
}
return n;

}
function sum4(n)
{
    let sum=0;
    while(n.length>0)
    {
        const length= n.length;
        let rem= Number(n[length-1]);
        n= n.substring(0, length-1);
        sum= sum+rem;
    }
    return sum;
}

console.log(`Calling superdigit`);
let rres= superDigit('148',3);
console.log(`Result is :: ${rres}`);