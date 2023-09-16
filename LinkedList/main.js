var LinkedList= require('./linkedlist');
var deleteList= require('./deletelist');
var deleteFromIndex= require('./deletelist');
var printData= require('./printlist');


  const ll = new LinkedList();
  ll.insertHead(3);
  ll.insertHead(100);
  ll.insertHead(25);
  ll.insertHead(9);

  printData(ll);
  console.log('************************')
  // let ll1= deleteList(ll);
  // printData(ll1);
  let ll2= deleteFromIndex(ll,2);
  printData(ll2);
  
  