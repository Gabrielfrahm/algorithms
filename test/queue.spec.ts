import { Queue } from "../src/queue/queue"

describe("Queue test", () => {
  let queue : Queue<string>;
  beforeEach(() => {
    queue = new Queue();
    queue.enqueue('Gabriel');
    queue.enqueue('Mateus');
  })
  it("Deve ser possivel adicionar no final da fila", () => {
    queue.enqueue('Pedro');
    expect(queue.last?.value).toBe('Pedro')
  })
  it("Deve ser possivel obter o primeiro da fila", () => {
    queue.enqueue('Pedro');
    expect(queue.peek()).toMatchObject({
      value: "Gabriel"
    })
  })
  it("Deve ser possivel remover o primeiro da fila", () => {
    expect(queue.peek()).toMatchObject({
      value: "Gabriel"
    })
    queue.dequeue();
    expect(queue.peek()).toMatchObject({
      value: "Mateus"
    })
  })
})
