    function deleteList(list)
    {
        
        let curr= list.head;
        console.log('Curr is',curr)
        console.log(`inside delete list`,curr.next)
        if(curr==null)
        return null;

        if(curr.next==null)
        return null;
        while(curr.next.next && curr.next.next != null)
        {
            curr= curr.next;

        }
        console.log(curr)

        curr.next= null;
        console.log('final res',list.head)
        return list;
        

    }

    function deleteFromIndex(list, index)
    {
        let size=0;

        let current= list.head;
        while(current){
            size++;
            if(size==index-1 && current.next.next)
            {
                console.log(current);
                current.next= current.next.next;
            }
            else
            current= current.next;
        }
        return list;
         
    }

    module.exports= deleteList;
    module.exports= deleteFromIndex;