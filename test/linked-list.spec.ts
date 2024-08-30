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

  test("Deve adicionar um item no final da lista quando ela estiver vazia", () => {
    const ll = new LinkedList<number>(4);
    ll.pop();
    expect(ll.getLength()).toBe(0)
    ll.push(5)
    expect(ll.getHead()).toMatchObject({
      value: 5,
      next: null
    })
    expect(ll.getTail()).toMatchObject({
      value: 5, next: null
    })
    expect(ll.getLength()).toBe(1)
  })

  test("Deve remover o ultimo item da lista POP", () => {
    const ll = new LinkedList<{
      name: string;
      url: string;
    }>({
      name: "music-name",
      url: "music-url"
    });
    ll.push({
      name: "music-name-2",
      url: "music-url-2"
    });
    expect(ll.getHead()).toMatchObject({
      value: {
        name: "music-name",
        url: "music-url"
      }, next: {
          value:{
            name: "music-name-2",
            url: "music-url-2"
          },
          next: null
      }
    });
    expect(ll.getLength()).toBe(2);
    expect(ll.pop()).toMatchObject({
      value:{
        name: "music-name-2",
        url: "music-url-2"
      },
      next: null
    });
    expect(ll.getLength()).toBe(1);
    expect(ll.pop()).toMatchObject({
      value:{
        name: "music-name",
        url: "music-url"
      },
      next: null
    });
    expect(ll.getLength()).toBe(0);
    expect(ll.pop()).toBeUndefined();
  })

  test("deve adicionar um item no inicio da lista unshift", () => {
    const ll = new LinkedList<{
      name: string;
      url: string;
    }>({
      name: "music-name",
      url: "music-url"
    });
    expect(ll.getLength()).toBe(1);
    ll.unshift({
      name: "music-name-1",
      url: "music-url-1"
    });
    expect(ll.getLength()).toBe(2);
    expect(ll.getHead()).toMatchObject({
      value: {
        name: "music-name-1",
        url: "music-url-1"
      }, next: {
          value:{
            name: "music-name",
            url: "music-url"
          },
          next: null
      }
    });
  })

  test("deve remover o primeiro item da lista shift", () => {
    const ll = new LinkedList<{
      name: string;
      url: string;
    }>({
      name: "music-name",
      url: "music-url"
    });
    ll.push({
      name: "music-name-2",
      url: "music-url-2"
    });
    expect(ll.getLength()).toBe(2)
    expect(ll.shift()).toMatchObject({
      value:{
        name: "music-name",
        url: "music-url"
      },
      next: null
    });
    expect(ll.getLength()).toBe(1)
    expect(ll.shift()).toMatchObject({
      value:{
        name: "music-name-2",
        url: "music-url-2"
      },
      next: null
    });
    expect(ll.getLength()).toBe(0)
    expect(ll.shift()).toBeUndefined()
  })

  test("deve retorna um item da lista encadeada pelo index GET", () => {
    const ll = new LinkedList<{
      name: string;
      url: string;
    }>({
      name: "music-name",
      url: "music-url"
    });
    ll.push({
      name: "music-name-2",
      url: "music-url-2"
    });
    expect(ll.get(0)).toMatchObject({
      value:{
        name: "music-name",
        url: "music-url"
      },
    });
    expect(ll.get(1)).toMatchObject({
      value:{
        name: "music-name-2",
        url: "music-url-2"
      },
    });
    expect(ll.get(3)).toBeUndefined()
    expect(ll.get(-1)).toBeUndefined()
  })

  test("deve setar um item na lista pelo index SET", () => {
    const ll = new LinkedList<{
      name: string;
      url: string;
    }>({
      name: "music-name",
      url: "music-url"
    });
    ll.push({
      name: "music-name-2",
      url: "music-url-2"
    });
    expect(ll.set(1, {
      name: "music-name-3",
      url: "music-url-3"
    })).toBeTruthy()
    expect(ll.set(3, {
      name: "music-name-3",
      url: "music-url-3"
    })).toBeFalsy()
    expect(ll.set(-1, {
      name: "music-name-3",
      url: "music-url-3"
    })).toBeFalsy()
    expect(ll.getTail()).toMatchObject({
      value:{
        name: "music-name-3",
        url: "music-url-3"
      },
    })
  })

  test("deve inserir um item em um index especifico INSERT", () =>{
    const ll = new LinkedList<{
      name: string;
      url: string;
    }>({
      name: "music-name",
      url: "music-url"
    });
    ll.push({
      name: "music-name-2",
      url: "music-url-2"
    });
    expect(ll.insert(1, {
      name: "music-name-3",
      url: "music-url-3"
    })).toBeTruthy()

    expect(ll.get(2)).toMatchObject({
      value: {
        name: "music-name-3",
        url: "music-url-3"
      }
    })
    expect(ll.getLength()).toBe(3)
  })

  test("deve remover um item da lista pelo index REMOVE", () => {
    const ll = new LinkedList<{
      name: string;
      url: string;
    }>({
      name: "music-name",
      url: "music-url"
    });
    ll.push({
      name: "music-name-2",
      url: "music-url-2"
    });
    ll.remove(1);
    expect(ll.getLength()).toBe(1)
  })

  test("deve inverter a lista REVERSE", () => {
    const ll = new LinkedList<{
      name: string;
      url: string;
    }>({
      name: "music-name",
      url: "music-url"
    });
    ll.push({
      name: "music-name-2",
      url: "music-url-2"
    });
    ll.reverse()
    expect(ll.getHead()).toMatchObject({
      value: {
        name: "music-name-2",
        url: "music-url-2"
      }
    })
    expect(ll.getTail()).toMatchObject({
      value: {
        name: "music-name",
        url: "music-url"
      }
    })
  })
})
