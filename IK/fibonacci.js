function findNthFibonacci(n) {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }

    // Create an array to store Fibonacci numbers
    const fibArray = new Array(n + 1);
    console.log(fibArray[0]);
    fibArray[0]=0;
    fibArray[1] = 1;

    // Calculate Fibonacci numbers using dynamic programming
    for (let i = 2; i <= n; i++) {
        fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }

    return fibArray;
}

// Example usage:
const n = 10;
const result = findNthFibonacci(n);
console.log(`The ${n}-th Fibonacci number is ${result}`);
