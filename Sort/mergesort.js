function merge(arr, left, mid, right)
{
    // console.log(`inside merge`, arr);
    console.log(`Left is ${left}, mid is ${mid} and right is ${right}`)
    var n1 = mid - left + 1;
    var n2 = right - mid;
 
    // Create temp arrays
    var arrLeft = new Array(n1);
    var arrRight = new Array(n2);
 
    // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++)
        arrLeft[i] = arr[left + i];
    for (var j = 0; j < n2; j++)
        arrRight[j] = arr[mid + 1 + j];
 
    // Merge the temp arrays back into arr[l..r]
 
    // Initial index of first subarray
    var i = 0;
 
    // Initial index of second subarray
    var j = 0;
 
    // Initial index of merged subarray
    var k = left;
 
    while (i < n1 && j < n2) {
        if (arrLeft[i] <= arrRight[j]) {
            arr[k] = arrLeft[i];
            i++;
        }
        else {
            arr[k] = arrRight[j];
            j++;
        }
        k++;
    }
 
    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        arr[k] = arrLeft[i];
        i++;
        k++;
    }
 
    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        arr[k] = arrRight[j];
        j++;
        k++;
    }
    console.log(arr);
}

function mergeSort(arr,left, right){
    if(left>=right){
        return;
    }
    var mid =left+ parseInt((right-left)/2);
    console.log(`mid is :: `, mid)
    mergeSort(arr,left,mid);
    console.log(`mid + 1 is ::`,mid+1,right)
    mergeSort(arr,mid+1,right);
    console.log(`before merging`, arr)
    merge(arr,left,mid,right);
}

console.log(`Calling merge`);
mergeSort([1,9,2,4,5,3],0,5)