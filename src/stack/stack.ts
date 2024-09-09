export class Node<T> {
  value : T | null;
  next: Node<T> | null;
  constructor(value: T) {
      this.value = value;
      this.next = null;
  }
}

export class Stack<T> {
  top: Node<T> | null;
  bottom: Node<T> | null;
  length: number;

  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value: any) {
    const node = new Node(value);
    if(!this.bottom){
      this.bottom = node;
      this.top = node;
    }else{
      const temp = this.top;
      this.top = node;
      this.top.next = temp;
    }
    this.length++;
    return this;
  }

  pop() {
    if(!this.top) return null;
    if(this.top === this.bottom){
      this.bottom = null;
    }
    const temp: Node<T> | null = this.top.next;
    this.top = temp;
    this.length--;
    return this;
  }



  //isEmpty
  isEmpty(): boolean {
    if(this.length === 0) return true
    return false
  }
}

