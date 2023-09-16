  //Pretty print of data 
  function printData(list) {
    // console.log(`Inside print data`,list)
    let current = list.head;
    while(current) {
    console.log(current.data);
    current = current.next; 
    } 
}

module.exports= printData;