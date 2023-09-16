const MOD = 1000000007; 

function calculate_power(a, b) {
    // Write your code here.
    if(b==0) return 1;
    
    if(b==1) return a%MOD;
    
    let tmp= calculate_power(a,b/2);
    if(b%2==0)
    {
        return (tmp*tmp)%MOD;
    }
    else return (((tmp * tmp) % MOD) * a)% MOD;
}

let res= calculate_power(2,10);
console.log(res)