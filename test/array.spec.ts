import { MyArray } from "../src/data/array/array"

describe("Deve testar Arrays", () => {
  test("GET", () => {
    const array = new MyArray();
    array.push(1);
    array.push("hello");
    expect(array.get(0)).toBe(1);
    expect(array.get(1)).toBe("hello");
    expect(array).toHaveLength(2)
  })

  test("PUSH", () => {
    const array = new MyArray();
    array.push(1);
    expect(array.get(0)).toBe(1);
    expect(array).toHaveLength(1)
    array.push("hello");
    expect(array.get(1)).toBe("hello");
    expect(array).toHaveLength(2)
  })

  test("POP", () => {
    const array = new MyArray();
    array.push(1);
    array.push("hello");
    expect(array).toHaveLength(2)
    array.pop();
    expect(array.get(0)).toBe(1);
    expect(array.get(1)).toBeUndefined();
    expect(array).toHaveLength(1)
  })

  test("DELETE", () => {
    const array = new MyArray();
    array.push(1);
    array.push("hello");
    expect(array).toHaveLength(2)
    array.delete(0);
    expect(array.get(0)).toBe("hello");
    expect(array).toHaveLength(1)
  })

  test("SORT", () => {
    const array = new MyArray();
    array.push(2);
    array.push(1);
    array.push(6);
    array.push(7);
    array.push(9);
    array.push(3);
    array.push(4);

    array.sort((a, b) => b - a )
    console.log(array)
  })

  test("reverse", () => {
    const array = new MyArray();
    array.push('b');
    array.push('a');
    array.push('n');
    array.push('a');
    array.push('n');
    array.push('a');
    array.reverse()
    console.log(array)
    expect(array).toMatchObject({
      data: { '0': 'a', '1': 'n', '2': 'a', '3': 'n', '4': 'a', '5': 'b' }
    })

    expect(MyArray.reverseString('banana')).toBe('ananab')
  })

  test("merge and sorted arrays", () => {
    console.log(MyArray.mergeSortedArrays([0,3,4,6], [1,2,9,8]))
  })
})
