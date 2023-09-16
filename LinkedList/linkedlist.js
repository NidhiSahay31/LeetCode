    var Node= require('./node')

    class LinkedList {
        constructor() {
        this.head = null;
        } 
        //Insert head aka first node 
        insertHead(data) {
        this.head = new Node(data, this.head);
        } 

      
    } 

    module.exports= LinkedList