
/**
 * @param {int32} n
 * @return {list_list_int32}
 */
function tower_of_hanoi(n) {
    // Write your code here.
    let arr=[];
    towerOfHanoi(n, 1, 3, 2,arr);
    return arr;
}

function towerOfHanoi(n, from_rod,  to_rod,  aux_rod, result)
{
        if (n == 0)
        {
            // console.log(`Result arr :: `, result)
            return;
        }
        towerOfHanoi(n - 1, from_rod, aux_rod, to_rod, result);
        // console.log("Move disk " + n + " from rod " + from_rod +" to rod " + to_rod);
        result.push([from_rod,to_rod])

        towerOfHanoi(n - 1, aux_rod, to_rod, from_rod, result);
    }


const res= tower_of_hanoi(4);
console.log(res);
