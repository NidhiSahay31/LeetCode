/**
 * Given an array of integers of size ‘n’, Our aim is to calculate the maximum sum of ‘k’ consecutive elements in the array.
 */

function containsNearbyDuplicate(nums,k){
    const set = new Set();
	
	for (let i = 0; i < nums.length; i++) {
        // console.log(set);
		if (i > k) 
			set.delete(nums[i - k - 1]); 
		
		if (!set.has(nums[i])) 
            set.add(nums[i]);
        else
            return true;
	}
	
	return false;
}

// calling function
let res = containsNearbyDuplicate([1,2,3,1],3);
console.log(`**********Result is ***********`, res);