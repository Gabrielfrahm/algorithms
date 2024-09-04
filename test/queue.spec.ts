import { Queue } from "../src/queue/queue"

describe("Queue test", () => {
  it("a", () => {
    const queue = new Queue();
    queue.enqueue('matt');
    queue.enqueue('john');
    queue.enqueue('ga');

    // queue.enqueue('bri');
    // queue.enqueue('el');
    queue.dequeue()
    console.log(JSON.stringify(queue));

  })
})
