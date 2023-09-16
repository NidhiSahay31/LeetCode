/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    const a = new Array(3).fill(0)
	
    let start = 0;  //leftmost index of window
    let end = 0;    //rightmost index of window
    let ans = 0;    
    
    const n = s.length;
    
    while (end < n) {
        a[s.charCodeAt(end) - 97]++;  
        
        if (a[0] && a[1] && a[2]) {
		
            ans++; 
            while (a[s.charCodeAt(start) - 97] > 1) {
                a[s.charCodeAt(start) - 97]--;  //Decrement the count of the letter that are no longer a part of the window
                start++;  //Increment leftmost index of iwndow
            }
			
			//Add the count of characters preceding the current window
			//One extra character means one extra substring
            ans += start;  
        }
        end++;
    }
    
    return ans;
    
};

let res= numberOfSubstrings('abcabc');
console.log(`Result is ==> `, res)