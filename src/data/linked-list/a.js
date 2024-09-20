class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  preppend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let temp = this.head;
    while (temp !== null) {
      array.push(temp.value);
      temp = temp.next;
    }
    return array;
  }

  insert(index, value) {
    if (index === 0) return this.preppend(value);
    if (index === this.length) return this.append(value);
    const newNode = new Node(value);
    let prev = this.head;
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      if (i === index) {
        newNode.prev = prev;
        newNode.next = current;
        prev.next = newNode;
      } else {
        prev = current;
        current = current.next;
      }
    }
    this.length++;
    return this;
  }

  remove(index) {
    if (index >= this.length) return null;
    let prev = this.head;
    let current = this.head;
    if(index === 0){
      this.head = this.head.next;
      this.length--;
      return this;
    }
    for (let i = 0; i < this.length; i++) {
      if (i === index) {
        prev.next = current.next;
      } else {
        prev = current;
        current = current.next;
      }
    }
    this.length--;
    return this;
  }

  reverse(){
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = null;
    let prev = null;
    for(let i = 0; i < this.length; i++){
      next = temp.next;
      temp.next= prev;
      prev = temp;
      temp = next;
    }
    return this;
  }

  reverse2(){
    if(!this.head.next){
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while(second){
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this;
  }
} //first =

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
// myLinkedList.append(16);
// myLinkedList.append(20);
// myLinkedList.preppend(20);


myLinkedList.insert(1, 99);
// myLinkedList.reverse()
myLinkedList.reverse2()

// myLinkedList.remove(1);
// myLinkedList.remove(3);
// myLinkedList.remove(3);

console.log((myLinkedList.printList()))



