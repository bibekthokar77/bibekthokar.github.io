function Node(value) {
    return {
        value: value,
        next: null
    }
}

function LinkedList() {
    this.head = null;
}
LinkedList.prototype.add = function (val) {
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

LinkedList.prototype.remove = function (val) {
    let temp = this.head;
    let prev = temp;
    while (temp.value != val) {
        prev = temp;
        temp = temp.next;
    }
    if (this.head.value == val) {
        this.head = prev.next;
    } else {
        prev.next = prev.next.next;
    }
}

LinkedList.prototype.print = function () {
    let temp = this.head;
    let array = [];
    while (temp.next != null) {
        array.push(temp.value);
        temp = temp.next;
    }
    array.push(temp.value)
    console.log(array);
}

let linkedList = new LinkedList();
linkedList.add(10);
linkedList.add(20);
linkedList.add(30);
linkedList.add(40);
linkedList.add(50);
linkedList.print();
linkedList.remove(60);
linkedList.print();
