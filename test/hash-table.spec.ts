import { HashTable } from "../src/hash-table/hash-table"

describe("Deve testar hash table", () => {
  test('constructor', () => {
    const hashTable = new HashTable(2);
    hashTable.set('salame', 10)
    hashTable.set('salamee', 30)
    console.log(hashTable.keys())
  })
})
