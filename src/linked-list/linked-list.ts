import { Node } from "./node";

export class LinkedList<T> {
    head: Node<T> | null;
    tail: Node<T> | null;
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
        this.tail!.next = newNode;
        this.tail = newNode;
      }
      this.length++
      return this;
    }

    pop(){
      if(!this.head) return undefined;
      let temp = this.head;
      let pre = this.head;
      while(temp.next){
        pre = temp;
        temp = temp.next
      }
      this.tail = pre;
      this.tail.next = null;
      this.length--;
      if(this.length === 0){
        this.head = null;
        this.tail = null;
      }
      return temp;
    }

    unshift(value: T){
      const newNode = new Node<T>(value);
      if(!this.head){
        this.head = newNode;
        this.tail = newNode;
      }else{
        newNode.next = this.head;
        this.head = newNode;
      }
      this.length++;
      return this;
    }

    shift(){
      if(!this.head) return undefined;
      let temp = this.head;
      this.head = this.head.next;
      temp.next = null;
      this.length--;
      if(this.length === 0){
        this.tail = null;
      }
      return temp;
    }
}
