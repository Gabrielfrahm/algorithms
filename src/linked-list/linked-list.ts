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

    get(index: number){
      if(!this.head) return undefined;
      if(index >= this.length || index < 0) return undefined;
      let count = 0;
      let temp: Node<T> | null = this.head;
      while(count < index){
        temp = temp!.next;
        count++;
      }
      return temp;
    }

    set(index: number, value: T){
      let temp = this.get(index);
      if(temp){
        temp.value = value;
        return true;
      }
      return false;
    }

    insert(index: number, value: T){
      if(index < 0 || index > this.length) return false;
	    if(index === 0) return this.unshift(value);
	    if(index === this.length) return this.push(value);
	    const newNode = new Node(value);
	    let temp = this.get(index - 1);
	    newNode.next = temp!.next;
	    temp!.next = newNode;
	    this.length++;
      return true;
    }

    remove(index: number){
      if(index < 0 || index >= this.length) return undefined;
      if(index === 0) return this.shift();
      if(index === this.length - 1) return this.pop();
      let before = this.get(index -1);
      let temp = before!.next;
      before!.next = temp!.next;
      temp!.next = null;
      this.length--;
      return temp;
    }

    reverse(){
      let temp = this.head;
      this.head = this.tail;
      this.tail = temp;
      let next: Node<T> | null= null;
      let prev:  Node<T> | null = null;
      for(let i = 0; i < this.length; i++){
        next = temp!.next;
        temp!.next= prev;
        prev = temp;
        temp = next;
      }
      return this;
    }
}
