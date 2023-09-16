    /**
     * @param {number} n
     * @return {number}
     */
    var arrangeCoins = function(n) {
        for(let i=0;n>=0;i++)
        {
           
            if(n==0)
            return i;

            if(n>=(i+1))
            {
               
                n= n-(i+1)

            }   
            else if(n<i+1)
            {
                return i;

            }
           

        }
       
    };

    let res= arrangeCoins(7);
    console.log('Result',res);