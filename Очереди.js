class Node {
    constructor(val) {

        this.val = val;
        this.next = {};
    }
    toString() {
        if(this.next===null){var mes=null;}
        else{mes=this.next.val; String(mes);}
        return "[ Value: " + String(this.val) + " Next:" + mes + " ]";

    }

}

class Queue {

    constructor() {
        this.head = this.tail = null;
    }


    enqueue(value) {
        var temp = new Node(value);
        if (this.head === null) {
            this.head = this.tail = temp;
        } else {
             this.tail.next = temp;
            this.tail = temp;
            temp.next = null;
        }
    }
    dequeue() {
        if (this.head !== null) {
            this.head = this.head.next;
            return;
        } else {
            return console.log("You can't delete a value from an Empty queue");
        }


    }
    findValue(value) {
        let temp;
        temp = this.head;
        while (temp !== null) {

            if (temp.val === value) {
                return console.log('There is a such value in the queue'+temp.toString());
            }
        temp=temp.next;

        }
        return console.log('There is no such value in the queue');
    }


    output() {
        let temp;
        temp = this.head;
        while (temp !== null) {
            console.log(temp.val);
            temp = temp.next;
        }
        return;

    }

}

let queue = new Queue();
queue.enqueue(11);
queue.enqueue(22);
queue.enqueue(33);
queue.enqueue(44);
queue.enqueue(55);
queue.findValue(11);
queue.output();
queue.findValue(4112);
queue.dequeue();
queue.dequeue();
queue.enqueue(3333);
queue.enqueue(4444);
queue.enqueue(5555);
queue.findValue(11);
queue.output();