/* class Cookie {
    constructor (color) {
        this.color = color
    }
    getColor() {
        return this.color
    }
    setColor(color) {
        this.color = color
    }
}

let cookieOne = new Cookie ("Green");
let cookieTwo = new Cookie ("Blue");

console.log(cookieOne.getColor());
console.log(cookieTwo.getColor());
console.log(cookieOne.setColor("Red"));
console.log(cookieOne.getColor()); */

class Node {
    constructor (value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        if (value == undefined) {
            this.head = null
            this.tail = null
            this.length = 0
        } else {
            const newNode = new Node(value)
            this.head = newNode
            this.tail = this.head
            this.length = 1
        } 
    }
    push(value) {
        if (!this.head) return undefined
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length ++
        return this
    }
    pop() {
        if (!this.head) return undefined
        let temp = this.head
        let pre = this.head
        while (temp.next) {
            pre = temp
            temp = temp.next
        }
        this.tail = pre
        this.tail.next = null
        this.length--
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return temp
    }
    unshift (value) {
        const newNode = new Node (value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
    shift() {
        if (!this.head) return undefined
        let temp = this.head
        this.head = this.head.next
        temp.next = null
        this.length--
        if (this.length === 0) {
            this.tail = null
        }
        return temp
    }
    get (index) {
        if (index < 0 || index >= this.length) {
            return undefined
        }
        let temp = this.head
        for (let i = 0 ; i < index; i ++) {
            temp = temp.next
        }
        return temp
    }
    set (index, value) {
        let temp = this.get(index)
        if (temp) {
            temp.value = value
            return true
        }
        return false
    }
    insert (index, value) {
        if (index === 0) return this.unshift(value)
        if (index === this.length) return this.push(value)
        if (index < 0 || index > this.length) return false
        const newNode = new Node (value)
        const temp = this.get(index -1)
        newNode.next = temp.next
        temp.next = newNode
        this.length++
        return true
    }
    remove (index) {
        if (index === 0) return this.shift()
        if (index === this.length -1) return this.pop()
        if (index < 0 || index >= this.length) return undefined
        const before = this.get(index -1)
        const temp = before.next // if using this.get(index) will be use o(n) method
        before.next = temp.next
        temp.next = null
        this.length--
        return temp
    }
    reverse () {
        let temp = this.head
        this.head = this.tail
        this.tail = temp
        let next = temp.next
        let prev = null
        for (let i = 0 ; i < this.length ; i ++) {
            next = temp.next
            temp.next = prev
            prev = temp
            temp = next
        }
        return this
    }
}

let myLinkedList = new LinkedList(1);
console.log(myLinkedList.push(2));
console.log(myLinkedList.push(3));
console.log(myLinkedList.pop());
console.log(myLinkedList.unshift(4));
console.log(myLinkedList.unshift(5));
console.log(myLinkedList.shift());
console.log(myLinkedList.get(2));
console.log(myLinkedList.set(1,6));
console.log(myLinkedList.get(1));
console.log(myLinkedList.insert(1,7));
console.log(myLinkedList.remove(3));
console.log(myLinkedList);
console.log(myLinkedList.reverse());