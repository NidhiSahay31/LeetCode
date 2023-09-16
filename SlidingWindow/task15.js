/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function(cards) {
    let len = cards.length;
    const map = new Map();
    let min = Infinity;

    for (let i = 0; i < len; i++) {
        console.log(map.get(cards[i]))
        if ((map.get(cards[i]))==undefined  ) map.set(cards[i],i);
        else {
            const temp = i - map.get(cards[i]) + 1;
            console.log(temp)
            min = Math.min(min, temp);
            map.set(cards[i],i)
        }
        console.log(map)
    }

    return min === Infinity ? -1 : min;
    
};

let res= minimumCardPickup([0,0]);
console.log(res);