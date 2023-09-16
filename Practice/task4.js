function binarysearch(arr, n, k) {
    // code here
    
    let start=0;
    let end= arr.length-1;
    while(start<=end)
    {
        let mid= ~~((start+end)/2);
        console.log('Mid is', mid)
        let curr= arr[mid];
        if(curr==k)
        return mid;
        else if(curr>k)
        {
            end= mid-1;
        }
        else
        {
            start= mid+1;
        }
    }
    return -1;
}

console.log(binarysearch([1,2,3,4,5],5,6));