/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let map= new Map();
    for(let i=0;i<s.length;i++)
    {
        map.set(s[i], (map.get(s[i])+1)||1);
    }
    console.log(map);
    let bool= true;
    map.forEach(obj=>{
        // console.log(obj);
        // console.log(obj%2==0)
        if(!(obj%2==0))
        {
            console.log('inside if')
           bool= false;

        }
       
    });
    // return bool;

    let x= 50;
    let y = x* 9/5;
    let z= y + 32;
    console.log(z)
};

let res= repeatedSubstringPattern('abcacb');
console.log(res)