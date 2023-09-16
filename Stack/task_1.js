//{ Driver Code Starts
//Initial Template for javascript


'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

let top = -1;
let stackMax = 100000;
let stack = new Array(stackMax);

function main() {
    console.log(`inside main`)
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        
        let obj = new Solution();
        console.log('here')

        let q = parseInt(readLine());
        console.log(q);
        for(let j = 0;j<q;j++){
            let query = readLine().trim().split(" ").map((x) => parseInt(x));
            if(query[0]==1){
                obj.push(query[1]);
            } else if(query[0]==2){
                obj.pop();
            } else {
                obj.display();
            }
        }
    }
}
// } Driver Code Ends


//User function Template for javascript

class Solution {
    //Function to push data at the top of stack
    push(data){
       //code here
       if(top>stackMax)
       {
           console.log('Stack Full')
       }
       else{
          stack.unshift(data);
          top++;
       }
       
    }

    //Function to pop the topmost data
    pop(){
        //code here
        stack.splice(0,1);
        top--;
    }

    //Function to display the stack from index 0 
    display(){
        //code here
        if(stack.length == 0)
        {
            console.log(-1);
        }
        else{
            for(let i=stack.length-1;i>=0;i--)
        {
            console.log(stack[i]);
        }
            
        }
        
    }
}

main();