/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    if (intervals.length < 2) return 1;

    intervals.sort((a,b)=> a[0]-b[0]);
    console.log(intervals)
    for(let i=1;i<intervals.length;i++)
    {
        if (intervals[i - 1][1] > intervals[i][0]) return 0;

    }
    return 1;
    
};

let res= canAttendMeetings( [[1, 5],  [10, 15], [5, 8],])

console.log(res)