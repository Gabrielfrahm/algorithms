import { Node } from "./node";

export class LinkedList<T> {
    head: Node<T>;
    tail: Node<T>;
    length: number;

    constructor(value: T){
        const newNode = new Node<T>(value)
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    printList() {
        let temp : Node<T> | null = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
      return this.head
    }

    getTail() {
      return this.tail;
    }

    getLength() {
       return this.length;
    }

    push(value: T){
      const newNode = new Node(value);
      if(!this.head){
        this.head = newNode;
        this.tail = newNode;
      }else{
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length++
      return this;
    }
}
