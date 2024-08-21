import { LinkedList } from "../src/linked-list/linked-list"
import { Node } from "../src/linked-list/node";

describe("Deve testa uma lista encadeada", () => {
  test("Deve  retorna o head da lista corretamente", () => {
    const ll = new LinkedList<number>(4);
    expect(ll.getHead()).toStrictEqual(
      new Node<number>(4)
    )
  })
  test("Deve  retorna o tail da lista corretamente", () => {
    const ll = new LinkedList<number>(4);
    expect(ll.getTail()).toStrictEqual(
      new Node<number>(4)
    )
  })

  test("Deve retorna o length da lista corretamente", () => {
    const ll = new LinkedList<number>(4);
    expect(ll.getLength()).toBe(1)
  })

  test("Deve adicionar um item no final da lista", () => {
    const ll = new LinkedList<number>(4);
    ll.push(5)
    expect(ll.getHead()).toMatchObject({
      value: 4, next: {
        value: 5,
        next: null
      }
    })
    expect(ll.getTail()).toMatchObject({
      value: 5, next: null
    })
    expect(ll.getLength()).toBe(2)
  })
})
