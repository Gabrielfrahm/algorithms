export function insertionSort(arr: number[]){
  let N = arr.length;
  let key, space;
  for(let i = 0; i < N; i++){
    key = arr[i];
    space = i;
    for(let j = space - 1; j >=0 ; j-- ){
      if(arr[j] > key){
        arr[j + 1] = arr[j];
        space = j;
        continue;
      }
      break;
    }
    arr[space] = key
  }
  return arr;
}
