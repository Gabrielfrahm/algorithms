export function bubbleSort(array : number[]) {
  let temp;
  for(let i = array.length ; i >= 1; i--){
    for(let j = 0 ; j < i ; j++){
      if(array[j] > array[j+1]){
        temp = array[j];
        array[j] = array[j+1]
        array[j+1]= temp
      }
    }
  }
  return array;
}
