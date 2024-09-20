
export function findFactorialRecursive(number: number): number {
  if(number === 2){
    return 2;
  }
  return number * findFactorialRecursive(number - 1)
}

export function findFactorialIterative(number: number) {
  let count = number - 1;
  let result = number;
  while(count > 0){
    result *= count;
    count--;
  }
  return result
}



