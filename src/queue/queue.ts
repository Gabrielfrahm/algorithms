export class Node<T> {
  value : T | null;
  next: Node<T> | null;
  constructor(value: T) {
      this.value = value;
      this.next = null;
  }
}

export class Queue<T> {
  first: Node<T> | null;
  last: Node<T> | null;
  length: number;
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value: any) {
    const node = new Node(value);
    if(!this.first){
      this.first = node;
      this.last = node;
    }else{
      this.last!.next = node;
      this.last = node;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if(!this.first) return null;
    if(this.length === 1) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return this;
  }

  //isEmpty;
}
