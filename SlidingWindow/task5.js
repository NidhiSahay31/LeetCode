var longestSubstring = function (s,k) {
    let map = new Map();
    let left = 0;
    let maxSize = 0;

    if (s.length === 0) return 0;
    if (s.length === 1) return 1;

    for (let i = 0; i < s.length; i++) {
        console.log(`i is ::`, i);
       
        while (map.has(s[i]) && map.get(s[i])<=k) {
            map.delete(s[left])
            left++;
        }
        map.set(s[i],1)
        maxSize = Math.max(maxSize, i - left + 1)
    }
    return maxSize;
}

let res= longestSubstring('abcabcbb',2);
console.log(res);