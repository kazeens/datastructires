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


class Stack {

    constructor() {

        this.head = null;

    }

    enstack(val) {
        let node;
        node = new Node(val)
        node.next = this.head;
        this.head = node;
    }

    destack() {
        if (this.head === null) {
            console.log('The stack is already empty');
            return;
        }
        this.head = this.head.next

    }

    output() {
        if (this.head === null) {
            console.log('The stack is already empty');
            return;
        }
        var temp;
        temp = this.head;
        while (temp !== null) {
            console.log(temp.val);
            temp = temp.next;

        }

    }

    findValue(value) {

        var temp = new Node();
        temp = this.head;
        if (temp === null) {
            return console.log('There is no a such value in the stack');
        }
        while (temp.next !== null) {
            if (temp.val === value) {
                return console.log('There is a such value in the stack ' + temp.toString());
            }
            temp = temp.next;
        }
        return console.log('There is no a such value in the stack');
    }

}
var stp = new Stack();

stp.enstack(77);
stp.enstack(88);
stp.enstack(99);
stp.enstack(101);
stp.output();

stp.output();

stp.findValue(1031);