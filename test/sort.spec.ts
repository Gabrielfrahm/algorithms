import { bubbleSort } from "../src/algo/sort/bubble-sort"
import { insertionSort } from "../src/algo/sort/insertion-sort";
import { mergeSort } from "../src/algo/sort/merge-sort";
import { selectionSort } from "../src/algo/sort/selection-sort";

describe("deve testar os sorts", () => {

  it("bobble sort" ,() => {
    const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
    console.log(bubbleSort(numbers))
  })
  it("selection sort" ,() => {
    const numbers = [15, 28,17,12,18,9,6];
    console.log(selectionSort(numbers))
  })

  it("insertion sort" ,() => {
    const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
    console.log(insertionSort(numbers))
  })

  it("merge sort" ,() => {
    const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
    console.log(mergeSort(numbers))
  })
})
