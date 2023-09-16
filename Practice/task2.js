function firstElementKTime(arr,k){
    //code here
    let result;
    let map= {};
    for(let i=0;i<arr.length;i++)
    {
        let key= arr[i];
        if(key in map)
        {
            map[key]= map[key]+1;
            if(map[key]==k)
            {
                result= key;
                break;
            }
        }
        else
        {
             map[key]= 1;
             if(map[key]==k)
            {
                result= key;
                break;
            }
        }
       
    }
    return result;
    
}

console.log(firstElementKTime([1, 7, 4, 3, 4, 8, 7],1))