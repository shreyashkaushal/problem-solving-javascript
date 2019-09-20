class Node {
    
     constructor(value,next = null) {
        this.value = value;
        this.next = next;

        
    }

    
}
/*const n1 = new Node(100);
console.log(n1); */

class Linkedlist{
    constructor()
    {
        this.head = null
        this.size = 0
        
    }
    insertFirst(value)
    {
        this.head = new Node(value,this.head)
        this.size++

    }

    insertLast(value)
    {
        let node = new Node(value)
        let current;
        if(!this.head)
        {
            this.head = node;
        }
        else
        {
           current = this.head
           while(current.next)
           {
               current = current.next;

           }
           current.next = node;
        }
        this.size++
    }
printLinkedlistdata()
{
    let current = this.head;
    while(current)
    {
        console.log(current.value)
        current = current.next
    }
}

    }
    const ll = new Linkedlist()
    ll.insertFirst(10);
    ll.insertFirst(20);
    ll.insertFirst(30);
   // console.log(ll);
   ll.printLinkedlistdata();

ll.insertLast(40); 
ll.printLinkedlistdata();