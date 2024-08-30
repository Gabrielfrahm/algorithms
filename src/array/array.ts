export class MyArray<T = {}> {
  length: number;
  data: any;

  constructor(){
    this.length = 0;
    this.data = {};
  }

  get(index: number) {
    return this.data[index]
  }

  push(item: T) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop(){
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index: number) {
    const item = this.data[index]
    this.shiftItems(index);
    return item;
  }

  shiftItems(index: number) {
    for(let i = index; i < this.length - 1; i++){
      this.data[i] = this.data[i+1]
    }
    delete this.data[this.length - 1];
    this.length--;
  }


  sort(compareFn?:(a:any, b:any) => number){
    for(let i = 0; i < this.length - 1; i++){
      for(let j = 0; j < this.length - 1 - i; j++){
        if (compareFn) {
          if (compareFn(this.data[j], this.data[j + 1]) > 0) {
            this.swap(j, j + 1);
          }
        } else {
          if (String(this.data[j]) > String(this.data[j + 1])) {
            this.swap(j, j + 1);
          }
        }
      }
    }
  }

  swap(index1: number, index2: number) {
    const temp = this.data[index1];
    this.data[index1] = this.data[index2];
    this.data[index2] = temp;
  }

  reverse(){
    let fast = this.length - 1;
    for(let i = 0; i < (this.length - 1) / 2 ; i++){
      const temp = this.data[i];
      this.data[i] = this.data[fast];
      this.data[fast] = temp;
      fast--;
    }
  }

  static reverseString(word:string){
    let array = new Array(word.length);
    let items = word.length - 1;
    for(let i = 0; i < word.length; i++){
      array.push(word[items]);
      items--;
    }
    return array.join('');
  }


  static mergeSortedArrays(array1 : any[], array2: any[]){
    return [...array1, ...array2].sort();
  }
}


