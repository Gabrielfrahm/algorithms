import { Stack } from "../src/stack/stack"

describe("Stack test", () => {
  it('deve ser possivel criar um item na stack push', () => {
    const stack = new Stack()
    stack.push("google")
    stack.push("udemy")
    stack.push("youtube")
    console.log(JSON.stringify(stack));
    stack.pop()
    console.log(JSON.stringify(stack));

    // stack.pop()
    // console.log(JSON.stringify(stack));

  })
})
