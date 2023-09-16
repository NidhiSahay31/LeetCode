function powerSum(X, N) {
    // Write your code here
    return recursive(X, N, 1);
}

function recursive(total, power, num){
    console.log(`Coming total is ${total}`);
    
    let val = total - Math.pow(num,power);
    console.log(`val= ${val}, num= ${num}`)
    
    if(val === 0){
        return 1;
    }
    else if(val < 0){
        return 0;
    }
    
    return recursive(val, power, num + 1) + recursive(total, power, num + 1);
}

//calling function
console.log(powerSum(10,2));
