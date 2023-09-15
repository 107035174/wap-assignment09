class LinkedList {
    constructor() {
        this.head = null;
    }

    add(value) {
        let node = { value, next: null };
        if (!this.head) {
            this.head = node;
            return;
        }
        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = node;
    };
    remove(value) {
        if (!this.head) return;
        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }
        let curr = this.head;
        while (curr.next) {
            if (curr.next.value === value) {
                curr.next = curr.next.next;
                return;
            }
            curr = curr.next;
        }
    }
    print() {
        let curr = this.head;
        let temp = "LinkedList{";
        while (curr) {
            temp += curr.value
            curr = curr.next;
            if (curr) temp += ",";
        }
        temp += "}"
        console.log(temp);
    }
}


let linkedlist = new LinkedList();
linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.print(); //Expected Result: LinkedList{1,2,3};
linkedlist.remove(2);
linkedlist.print(); //Expected Result: LinkedList{1,3};
