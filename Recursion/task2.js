/**
 * https://www.geeksforgeeks.org/product-2-numbers-using-recursion/
 */

function product(x,y){
    if(y==0)
    return 0;

    return x + product(x, y-1);
}

console.log(product(6,2));