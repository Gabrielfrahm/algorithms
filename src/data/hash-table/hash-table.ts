export class HashTable {
  data: any[];
  constructor(size: number){
    this.data = new Array(size);
  }

  private _hash(key: string) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  set(key: string, value: any){
    const hashKey = this._hash(key);
    if(!this.data[hashKey]){
      this.data[hashKey]= [];
    }
    this.data[hashKey].push([key, value])
    return this.data;
  }

  get(key:string){
    const hashKey = this._hash(key);
    const currentBucket = this.data[hashKey];
    if(currentBucket){
      for(let i =0; i < currentBucket.length; i++){
        if(currentBucket[i][0] === key){
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    if (!this.data.length) {
      return undefined
    }
    let result = []
    // loop through all the elements
    for (let i = 0; i < this.data.length; i++) {
        // if it's not an empty memory cell
        if (this.data[i] && this.data[i].length) {
          // but also loop through all the potential collisions
          if (this.data.length > 1) {
            for (let j = 0; j < this.data[i].length; j++) {
              result.push(this.data[i][j][0])
            }
          } else {
            result.push(this.data[i][0])
          }
        }
    }
    return result;
  }
}
