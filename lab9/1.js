class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {

    constructor() {
        this.head = null;
    }

    add(val) {
        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let tail = this.head;
        while (tail.next !== null) {
            tail = tail.next;
        }
        tail.next = newNode;
    }

    remove(val) {
        let temp = this.head;
        let prev = temp;

        while (temp.value != val) {
            prev = temp;
            temp = temp.next;
            if (!temp) {
                throw new Error("No such value");
            }
        }
        if (this.head.value == val) {
            this.head = prev.next;
        } else {
            prev.next = prev.next.next;
        }
    }

    print() {
        let temp = this.head;
        let array = [];
        while (temp.next != null) {
            array.push(temp.value);
            temp = temp.next;
        }
        array.push(temp.value)
        console.log(array);
    }
}

let linkedList = new LinkedList();
linkedList.add(10);
linkedList.add(20);
linkedList.add(30);
linkedList.add(40);
linkedList.add(50);
linkedList.print();
linkedList.remove(50);
linkedList.print();
