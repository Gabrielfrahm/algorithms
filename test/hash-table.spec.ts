import { HashTable } from "../src/hash-table/hash-table"

describe("Deve testar hash table", () => {
  let hashTable: HashTable;
  beforeEach(() => {
    hashTable = new HashTable(2);
  })
  test('constructor', () => {
    expect(hashTable.data).toHaveLength(2)
  })

  test('Deve adicionar valor na hash table', () => {
    hashTable.set('chave', 'valor');
    expect(hashTable.data[0]).toStrictEqual([[ 'chave', 'valor' ]])
  })

  test('Deve buscar valor na hash table', () => {
    hashTable.set('chave', 'valor');
    expect(hashTable.get('chave')).toStrictEqual("valor")
  })
})
