/* 

1. Find Middle Node

Implement a member function called findMiddleNode() that finds and returns the middle node of the linked list.
Note: this LinkedList implementation does not have a length member variable.

Output:
Return the middle node of the linked list.
If the list has an even number of nodes, return the second middle node (the one closer to the end).

Constraints:
You are not allowed to use any additional data structures (such as arrays) or modify the existing data structure.
You can only traverse the linked list once.

Example 1:
Suppose you have a LinkedList object, list, with the following values:
1 -> 2 -> 3 -> 4 -> 5

After calling the findMiddleNode() function:

let middle = list.findMiddleNode();
The middle node should have the value 3.

Example 2:
Now suppose you have a LinkedList object, list, with the following values:
1 -> 2 -> 3 -> 4 -> 5 -> 6

After calling the findMiddleNode() function:

let middle = list.findMiddleNode();
The middle node should have the value 4.

*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
  }

  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  getHead() {
    if (this.head === null) {
      console.log("Head: null");
    } else {
      console.log("Head: " + this.head.value);
    }
  }

  getTail() {
    if (this.tail === null) {
      console.log("Tail: null");
    } else {
      console.log("Tail: " + this.tail.value);
    }
  }

  makeEmpty() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // THE FINDMIDDLENODE METHOD HERE //
  findMiddleNode() {
    let fast = this.head;
    let slow = this.head;
    while (fast && fast.next) {
      fast = fast.next;
      slow = slow.next;
      fast = fast.next;
    }
    return slow;
  }
}

let myLinkedList1 = new LinkedList(1);
myLinkedList1.push(2);
myLinkedList1.push(3);
myLinkedList1.push(4);
myLinkedList1.push(5);

console.log("Original list:");
myLinkedList1.printList();

const middleNode = myLinkedList1.findMiddleNode();
console.log(`\nMiddle node value: ${middleNode.value}`);

// Create a new list with an even number of elements
let myLinkedList2 = new LinkedList(1);
myLinkedList2.push(2);
myLinkedList2.push(3);
myLinkedList2.push(4);
myLinkedList2.push(5);
myLinkedList2.push(6);

console.log("\nOriginal list 2:");
myLinkedList2.printList();

const middleNode2 = myLinkedList2.findMiddleNode();
console.log(`\nMiddle node value of list 2: ${middleNode2.value}`);

/*

2. Has Loop 

Write a method called hasLoop that is part of the linked list class.
The method should be able to detect if there is a cycle or loop present in the linked list.
You are required to use Floyd's cycle-finding algorithm (also known as the "tortoise and the hare" algorithm) to detect the loop.
This algorithm uses two pointers: a slow pointer and a fast pointer. The slow pointer moves one step at a time, while the fast pointer moves two steps at a time. If there is a loop in the linked list, the two pointers will eventually meet at some point. If there is no loop, the fast pointer will reach the end of the list.

The method should follow these guidelines:

Create two pointers, slow and fast, both initially pointing to the head of the linked list.
Traverse the list with the slow pointer moving one step at a time, while the fast pointer moves two steps at a time.
If there is a loop in the list, the fast pointer will eventually meet the slow pointer. If this occurs, the method should return true.
If the fast pointer reaches the end of the list or encounters a null value, it means there is no loop in the list. In this case, the method should return false.

Output:

Return true if the linked list has a loop.
Return false if the linked list does not have a loop.

Constraints:

You are not allowed to use any additional data structures (such as arrays) or modify the existing data structure.
You can only traverse the linked list once.

If your Linked List contains a loop, it indicates a flaw in its implementation.

*/

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  getLength() {
    console.log("Length: " + this.length);
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // HAS LOOP METHOD HERE //
  hasLoop() {
    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (fast == slow) return true;
    }
    return false;
  }
}

let myLinkedList3 = new LinkedList(1);
myLinkedList3.push(2);
myLinkedList3.push(3);
myLinkedList3.push(4);
myLinkedList3.push(5);

console.log("Original list:");
myLinkedList3.printList();

const hasLoopResult = myLinkedList3.hasLoop();
console.log(`\nHas loop? ${hasLoopResult}`);

// Create a loop for testing purposes
myLinkedList3.tail.next = myLinkedList3.head.next; // Create a loop by linking tail to the second node

const hasLoopResultAfterLoop = myLinkedList3.hasLoop();
console.log(`\nHas loop after creating a loop? ${hasLoopResultAfterLoop}`);

/*

3. Find Kth Node From End

Implement a member function called findKthFromEnd(k) that finds and returns the kth node from the end of the linked list.
Note: this LinkedList implementation does not have a length member variable.

Output:

Return the kth node from the end of the linked list.
If the value of k is greater than or equal to the number of nodes in the list, return null.

Constraints:

You are not allowed to use any additional data structures (such as arrays) or modify the existing data structure.
You can only traverse the linked list once.

Example 1:

Suppose you have a LinkedList object, list, with the following values:
1 -> 2 -> 3 -> 4 -> 5

After calling the findKthFromEnd(2) function:

let kthNode = list.findKthFromEnd(2);
The kthNode should have the value 4.

Example 2:

Now suppose you have a LinkedList object, list, with the following values: 1 -> 2 -> 3 -> 4 -> 5 -> 6

After calling the findKthFromEnd(4) function:

let kthNode = list.findKthFromEnd(4);
The kthNode should have the value 3.

*/

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
  }

  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  getHead() {
    if (this.head === null) {
      console.log("Head: null");
    } else {
      console.log("Head: " + this.head.value);
    }
  }

  getTail() {
    if (this.tail === null) {
      console.log("Tail: null");
    } else {
      console.log("Tail: " + this.tail.value);
    }
  }

  makeEmpty() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // FINDKTFROMEND METHOD HERE //
  findKthFromEnd(k) {
    let slow = this.head;
    let fast = this.head;
    for (let i = 0; i < k; i++) {
      if (fast === null) {
        return null;
      }
      fast = fast.next;
    }
    while (fast !== null) {
      slow = slow.next;
      fast = fast.next;
    }
    return slow;
  }
}

let myLinkedList4 = new LinkedList(1);
myLinkedList4.push(2);
myLinkedList4.push(3);
myLinkedList4.push(4);
myLinkedList4.push(5);

console.log("Original list:");
myLinkedList4.printList();

const k = 2;
const kthNodeFromEnd = myLinkedList4.findKthFromEnd(k);

console.log(`\n${k}th node from the end:`);
if (kthNodeFromEnd) {
  console.log(kthNodeFromEnd.value);
} else {
  console.log("Not found");
}

/*

4. Remove Duplicates

Implement a member function called removeDuplicates() that removes all duplicate nodes from the linked list based on their values.
Note: this linked list class does NOT have a tail which will make this method easier to implement.

Output:

The function should modify the linked list in-place, removing all nodes with duplicate values.

Constraints:

You are allowed to use the JavaScript Set data structure to keep track of unique node values.

Example 1:

Suppose you have a LinkedList object, list, with the following values:
1 -> 2 -> 3 -> 2 -> 1 -> 4

After calling the removeDuplicates() function:

list.removeDuplicates();
The linked list should now have the following values: 1 -> 2 -> 3 -> 4

Example 2:

Now suppose you have a LinkedList object, list, with the following values:
3 -> 3 -> 3

After calling the removeDuplicates() function:

list.removeDuplicates();
The linked list should now have the following value: 3

Remember to update the length.

*/

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.length = 1;
  }

  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  getHead() {
    if (this.head === null) {
      console.log("Head: null");
    } else {
      console.log("Head: " + this.head.value);
    }
  }

  getLength() {
    console.log("Length: " + this.length);
  }

  makeEmpty() {
    this.head = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }

  // REMOVEDUPLICATES METHOD HERE  ---> 0(n2) //
  removeDuplicates() {
    let current = this.head;
    while (current !== null) {
      let runner = current;
      while (runner.next !== null) {
        if (runner.next.value === current.value) {
          runner.next = runner.next.next;
          this.length--;
        } else {
          runner = runner.next;
        }
      }
      current = current.next;
    }
  }
}

/*

Solution with a Set ---> 0(n):

    removeDuplicates() {
        const values = new Set();
        let previous = null;
        let current = this.head;
        while (current !== null) {
            if (values.has(current.value)) {
                previous.next = current.next;
                this.length -= 1;
            } else {
                values.add(current.value);
                previous = current;
            }
            current = current.next;
        }
    }

*/

let myLinkedList5 = new LinkedList(1);
myLinkedList5.push(2);
myLinkedList5.push(3);
myLinkedList5.push(3);
myLinkedList5.push(4);
myLinkedList5.push(5);
myLinkedList5.push(5);

console.log("Original list:");
myLinkedList5.printList();

myLinkedList5.removeDuplicates();

console.log("\nList after removing duplicates:");
myLinkedList5.printList();