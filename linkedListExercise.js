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

/*

5. Binary to Decimal 
Objective:

You have a linked list where each node represents a binary digit (0 or 1). 
The goal of the binaryToDecimal function is to convert this binary number, represented by the linked list, into its decimal equivalent.

How Binary to Decimal Conversion Works:

In binary-to-decimal conversion, each position of a binary number corresponds to a specific power of 2, starting from the rightmost digit.
The rightmost digit is multiplied by 2^0 (which equals 1).
The next digit to the left is multiplied by 2^1 (which equals 2).
The digit after that is multiplied by 2^2 (which equals 4). ... and so on.

To find the decimal representation:

Multiply each binary digit by its corresponding power of 2 value.
Sum up all these products.

Example Execution with Binary 101:

Start with num = 0.
Process 1 (from the head of the linked list): num = 0 * 2 + 1 = 1
Process 0: num = 1 * 2 + 0 = 2
Process 1: num = 2 * 2 + 1 = 5
Return num, which is 5.

Steps Involved in the Function:

A variable num is initialized to 0, which will store our computed decimal number.
Starting from the head of the linked list (the leftmost binary digit), iterate through each node until the end.
For every node, double the current value of num (this is analogous to shifting in binary representation). 
Then, add the binary digit of the current node.
Move to the next node and repeat until you've visited all nodes.
Return the value in num, which now represents the decimal value of the binary number in the linked list.

*/

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.length = 1;
  }

  printList() {
    let temp = this.head;
    let output = "";
    if (temp === null) {
      console.log("empty");
      return;
    }
    while (temp !== null) {
      output += String(temp.value);
      temp = temp.next;
      if (temp !== null) {
        output += " -> ";
      }
    }
    console.log(output);
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

  //   +===================================================+
  //   |               WRITE YOUR CODE HERE                |
  //   | Description:                                      |
  //   | - This method converts a binary number,           |
  //   |   represented as a linked list, to a decimal int. |
  //   |                                                   |
  //   | Return type: int                                  |
  //   | - Returns the decimal equivalent of the binary    |
  //   |   number.                                         |
  //   |                                                   |
  //   | Tips:                                             |
  //   | - We use a while loop to traverse the linked list.|
  //   | - Multiply the current sum by 2 and add the value |
  //   |   at each node to get the decimal number.         |
  //   +===================================================+

  binaryToDecimal() {
    let num = 0;
    let current = this.head;
    while (current !== null) {
      num = num * 2 + current.value;
      current = current.next;
    }
    return num;
  }
}

// ---------------
// Convert 1011 to 11
// ---------------
const list1 = new LinkedList(1);
list1.push(0);
list1.push(1);
list1.push(1);
console.log("Convert 1011 to 11:");
console.log("Input: 1 -> 0 -> 1 -> 1");
console.log("Output: ", list1.binaryToDecimal());
console.log("---------------");

// ---------------
// Convert 1100 to 12
// ---------------
const list2 = new LinkedList(1);
list2.push(1);
list2.push(0);
list2.push(0);
console.log("Convert 1100 to 12:");
console.log("Input: 1 -> 1 -> 0 -> 0");
console.log("Output: ", list2.binaryToDecimal());
console.log("---------------");

// ---------------
// Convert 1 to 1
// ---------------
const list3 = new LinkedList(1);
console.log("Convert 1 to 1:");
console.log("Input: 1");
console.log("Output: ", list3.binaryToDecimal());
console.log("---------------");

// ---------------
// Convert empty list to 0
// ---------------
const list4 = new LinkedList(0);
list4.makeEmpty();
console.log("Convert empty list to 0:");
console.log("Input: empty");
console.log("Output: ", list4.binaryToDecimal());
console.log("---------------");

/*

6. LL: Partition List 
⚠️ CAUTION: Advanced Challenge Ahead!

This Linked List problem is significantly more challenging than the ones we've tackled so far. 
It's common for students at this stage to find this exercise demanding, so don't worry if you're not ready to tackle it yet. 
It's perfectly okay to set it aside and revisit it later when you feel more confident.
If you decide to take on this challenge, I strongly advise using a hands-on approach: grab a piece of paper and visually map out each step.
This problem requires a clear understanding of how elements in a Linked List interact and move. 
By now, you've observed numerous Linked List animations in the course, which have prepared you for this moment.
This exercise will be a true test of your ability to apply those concepts practically. Remember, patience and persistence are key here!

Now, here is the exercise:
___________________________________

Implement a member function called partitionList(x) that partitions the linked list such that all nodes with values 
less than x come before nodes with values greater than or equal to x. 

Note: this linked list class does not have a tail which will make this method easier to implement.
The original relative order of the nodes should be preserved.

Input:

An integer x, the partition value.

Output:

The function should modify the linked list in-place, such that all nodes with values less than x come before nodes with values 
greater than or equal to x. 

Constraints:

You are not allowed to use any additional data structures (such as arrays) or modify the existing data structure.
You can only traverse the linked list once.
You can create temporary nodes to make the implementation simpler.

Example 1:
Input:

Linked List: 3 -> 8 -> 5 -> 10 -> 2 -> 1 x: 5

Process:

Values less than 5: 3, 2, 1
Values greater than or equal to 5: 8, 5, 10

Output:

Linked List: 3 -> 2 -> 1 -> 8 -> 5 -> 10


Example 2:
Input:

Linked List: 1 -> 4 -> 3 -> 2 -> 5 -> 2 x: 3

Process:

Values less than 3: 1, 2, 2
Values greater than or equal to 3: 4, 3, 5

Output:

Linked List: 1 -> 2 -> 2 -> 4 -> 3 -> 5

Tips:

While traversing the linked list, maintain two separate chains: one for values less than x and one for values greater than or equal to x.
Use dummy nodes to simplify the handling of the heads of these chains.
After processing the entire list, connect the two chains to get the desired arrangement.

Note:

The solution must maintain the relative order of nodes. 
For instance, in the first example, even though 8 appears before 5 in the original list, the partitioned list must still have 
8 before 5 as their relative order remains unchanged.

Note:

You must solve the problem WITHOUT MODIFYING THE VALUES in the list's nodes (i.e., only the nodes' next pointers may be changed.)

*/

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.length = 1;
  }

  printList() {
    let temp = this.head;
    let output = "";
    if (temp === null) {
      console.log("empty");
      return;
    }
    while (temp !== null) {
      output += String(temp.value);
      temp = temp.next;
      if (temp !== null) {
        output += " -> ";
      }
    }
    console.log(output);
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

  //   +===================================================+
  //   |                  WRITE YOUR CODE HERE             |
  //   | Description:                                      |
  //   | - This method partitions a linked list around a   |
  //   |   value `x`.                                      |
  //   | - It rearranges the nodes in such a way that all  |
  //   |   nodes less than `x` come before all nodes       |
  //   |   greater than or equal to `x`.                   |
  //   |                                                   |
  //   | Tips:                                             |
  //   | - We use two dummy nodes, `dummy1` and `dummy2`,  |
  //   |   to build two separate lists: one for elements   |
  //   |   smaller than `x` and one for elements greater   |
  //   |   or equal to `x`.                                |
  //   | - We then merge these two lists.                  |
  //   | - `prev1` and `prev2` are pointers to the last    |
  //   |   nodes of these lists.                           |
  //   | - The head of the resulting list is set as        |
  //   |   `dummy1.next`.                                  |
  //   +===================================================+

  partitionList(x) {
    if (this.head === null) return;
    const dummy1 = new Node(0);
    const dummy2 = new Node(0);
    let prev1 = dummy1;
    let prev2 = dummy2;
    let current = this.head;
    while (current !== null) {
      if (current.value < x) {
        dummy1.next = current;
        prev1 = current;
      } else {
        dummy2.next = current;
        prev2 = current;
      }
      current = current.next;
    }
    prev2.next = null;
    prev1.next = dummy2.next;
    this.head = dummy1.next;
  }
}

//  +=====================================================+
//  |                                                     |
//  |          THE TEST CODE BELOW WILL PRINT             |
//  |              OUTPUT TO "USER LOGS"                  |
//  |                                                     |
//  |  Use the output to test and troubleshoot your code  |
//  |                                                     |
//  +=====================================================+

// Helper function to create list from array
function createListFromArray(arr) {
  const ll = new LinkedList(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    ll.push(arr[i]);
  }
  return ll;
}

// Helper function to compare list with array
function listMatchesArray(ll, arr) {
  let temp = ll.head;
  let i = 0;
  while (temp !== null && i < arr.length) {
    if (temp.value !== arr[i]) {
      return false;
    }
    temp = temp.next;
    i++;
  }
  return temp === null && i === arr.length;
}

// Function to run a single test
function runTest(testNum, description, ll, x, expectedArr) {
  console.log("---------------------------------------");
  console.log(`Test ${testNum}: ${description}`);
  console.log("BEFORE: ");
  ll.printList();
  console.log("PARTITION: " + x);
  ll.partitionList(x);
  console.log("AFTER: ");
  ll.printList();
  console.log(listMatchesArray(ll, expectedArr) ? "PASS" : "FAIL");
}

// Test 1: Basic partition
let ll1 = createListFromArray([1, 4, 3, 2, 5, 2]);
runTest(1, "Basic partition", ll1, 3, [1, 2, 2, 4, 3, 5]);

// Test 2: No elements to partition
let ll2 = createListFromArray([4, 5, 6]);
runTest(2, "No elements to partition", ll2, 3, [4, 5, 6]);

// Test 3: All elements smaller
let ll3 = createListFromArray([1, 2, 2]);
runTest(3, "All elements smaller", ll3, 3, [1, 2, 2]);

// Test 4: Single-element list
let ll4 = createListFromArray([1]);
runTest(4, "Single-element list", ll4, 3, [1]);

// Test 5: All elements equal to partition
let ll5 = createListFromArray([3, 3, 3]);
runTest(5, "All elements equal to partition", ll5, 3, [3, 3, 3]);

console.log("---------------------------------------");

/*

7. LL: Reverse Between
⚠️ Advanced Challenge Alert: Linked List Mastery!

Welcome to what many consider the pinnacle of Linked List challenges in this course! 
This exercise is not just a test of your coding skills, but also a measure of your problem-solving ability and 
understanding of complex data structures.

Here's how you can tackle it:

Visualize the Problem: 
Before diving into coding, grab a pen and paper. 
Sketch out the linked list and visualize each step of the process. 
This approach isn't just for beginners; it's exactly how seasoned developers plan their attack on complex problems.

Seek Understanding Over Speed: 
Take your time to really grasp each part of the problem. 
The goal here is deep understanding, not just a quick solution. 
If you find yourself stuck, that's a part of the learning process.

It's Okay to Take a Break: 
Feel free to step away from this challenge and return later. 
This course is designed to equip you with a growing set of skills, and sometimes, a bit of distance can bring new insights.

Approach Like a Pro: 
Remember, facing a challenging problem is what being a professional developer is all about. 
Use this exercise to think, plan, and code like a pro.

Now, let's dive into the exercise:
___________________________________

Implement a member function called reverseBetween(m, n) that reverses the nodes between indexes (using 0-based indexing)  
m and n (inclusive) in the linked list.

Note: this linked list class does NOT have a tail which will make this method easier to implement.

Assumption: You can assume that m and n are not out of bounds.

Output:

The function should reverse the nodes between the indexes m and n in the linked list. The reversal should be done in-place.

Constraints:

You are not allowed to use any additional data structures (such as arrays) or modify the existing data structure.

You can only traverse the linked list once.

Example 1:

Suppose you have a LinkedList object, list, with the following values:
1 -> 2 -> 3 -> 4 -> 5

After calling the reverseBetween(1, 3) function:

list.reverseBetween(1, 3);
The linked list should now have the following values:
1 -> 4 -> 3 -> 2 -> 5

Example 2:

Now suppose you have a LinkedList object, list, with the following values:
1 -> 2 -> 3 -> 4 -> 5 -> 6

After calling the reverseBetween(3, 5) function:

list.reverseBetween(3, 5);
The linked list should now have the following values:
1 -> 2 -> 3 -> 6 -> 5 -> 4

*/

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.length = 1;
  }

  printList() {
    let temp = this.head;
    let output = "";
    if (temp === null) {
      console.log("empty");
      return;
    }
    while (temp !== null) {
      output += String(temp.value);
      temp = temp.next;
      if (temp !== null) {
        output += " -> ";
      }
    }
    console.log(output);
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

  // WRITE THE REVERSEBETWEEN METHOD HERE

  reverseBetween(m, n) {
    if (this.head === null) return;
    const dummy = new Node(0);
    dummy.next = this.head;
    let prev = dummy;
    for (let i = 0; i < m; i++) {
      prev = prev.next;
    }
    let current = prev.next;
    for (let i = 0; i < n - m; i++) {
      const temp = current.next;
      current.next = temp.next;
      temp.next = prev.next;
      prev.next = temp;
    }
    this.head = dummy.next;
  }
}

let myLinkedList6 = new LinkedList(1);
myLinkedList6.push(2);
myLinkedList6.push(3);
myLinkedList6.push(4);
myLinkedList6.push(5);
console.log("Original list:");
myLinkedList6.printList();
console.log("----------------");

const m = 2;
const n = 4;
myLinkedList6.reverseBetween(m, n);

console.log(`\nList after reversing between indexes of ${m} and ${n}:`);
myLinkedList6.printList();

/*

8. LL: Swap Pairs 
Write a method called swapPairs that swaps every two adjacent nodes in a singly linked list.

If the list has an odd number of nodes, the last node remains in place.

You may NOT just swap values. You must actually swap the nodes.

🧪 Examples:

Input: 1 -> 2 -> 3 -> 4
Output: 2 -> 1 -> 4 -> 3
 
Input: 1 -> 2 -> 3 -> 4 -> 5
Output: 2 -> 1 -> 4 -> 3 -> 5
 
Input: 1
Output: 1
 
Input: empty list
Output: empty list

📘 What This Exercise Is Designed to Teach

How to manipulate pointers in a linked list

Working with dummy nodes to simplify head management

Understanding traversal and pointer updates

Practicing while loops for in-place modification.

*/

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.length = 1;
  }

  printList() {
    let temp = this.head;
    let output = "";
    if (temp === null) {
      console.log("empty");
      return;
    }
    while (temp !== null) {
      output += String(temp.value);
      temp = temp.next;
      if (temp !== null) {
        output += " -> ";
      }
    }
    console.log(output);
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

  swapPairs() {
    //   +===================================================+
    //   |               WRITE YOUR CODE HERE                |
    //   | Description:                                      |
    //   | - Swaps every two adjacent nodes in the linked    |
    //   |   list.                                           |
    //   | - Modifies the list in place without creating     |
    //   |   new nodes.                                      |
    //   |                                                   |
    //   | Behavior:                                         |
    //   | - A dummy node is used to simplify swapping from  |
    //   |   the head of the list.                           |
    //   | - In each loop iteration, two nodes (`first` and  |
    //   |   `second`) are swapped using pointer changes.    |
    //   | - The `previous` pointer tracks the last node     |
    //   |   before the swapped pair.                        |
    //   | - Updates `this.head` to the new first node.      |
    //   +===================================================+
    if (this.head === null) return;
    const dummy = new Node(0);
    dummy.next = this.head;
    let prev = dummy;
    let first = this.head;
    while (first !== null && first.next !== null) {
      let second = first.next;
      prev.next = second;
      first.next = second.next;
      second.next = first;
      prev = first;
      first = first.next;
    }
    this.head = dummy.next;
  }
}

// Test cases:
console.log("\nTest Case 1: Even number of nodes");
const myLinkedList7 = new LinkedList(1);
myLinkedList7.push(2);
myLinkedList7.push(3);
myLinkedList7.push(4);
console.log("BEFORE:");
myLinkedList7.printList();
myLinkedList7.swapPairs();
console.log("AFTER:");
myLinkedList7.printList();

console.log("\nTest Case 2: Odd number of nodes");
const myLinkedList8 = new LinkedList(1);
myLinkedList8.push(2);
myLinkedList8.push(3);
myLinkedList8.push(4);
myLinkedList8.push(5);
console.log("BEFORE:");
myLinkedList8.printList();
myLinkedList8.swapPairs();
console.log("AFTER:");
myLinkedList8.printList();

console.log("\nTest Case 3: Single node");
const myLinkedList9 = new LinkedList(1);
console.log("BEFORE:");
myLinkedList9.printList();
myLinkedList9.swapPairs();
console.log("AFTER:");
myLinkedList9.printList();

console.log("\nTest Case 4: Empty list");
const myLinkedList10 = new LinkedList(1);
myLinkedList10.makeEmpty();
console.log("BEFORE:");
myLinkedList10.printList();
myLinkedList10.swapPairs();
console.log("AFTER:");
myLinkedList10.printList();