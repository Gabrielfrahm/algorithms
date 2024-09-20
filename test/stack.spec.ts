import { Stack } from "../src/data/stack/stack"

describe("Stack test", () => {

  let stack: Stack<string>;
  beforeEach(() => {
    stack = new Stack();
    stack.push("google");
    stack.push("udemy");
    stack.push("youtube");
  });

  it('deve ser possivel criar um item na stack push', () => {
    expect(stack.top?.value).toBe("youtube");
    expect(stack.top?.next?.value).toBe("udemy");
    expect(stack.bottom?.value).toBe("google");
    expect(stack).toHaveLength(3)
    console.log(JSON.stringify(stack))
  })

  it("deve ser possivel pegar o primeiro item da pilha (top) peek", () => {
    expect(stack.top?.value).toBe("youtube");
    expect(stack.peek()).toMatchObject({
      value: "youtube"
    });
  })

  it("deve ser possivel remover um item do topo da pilha (pop)", () => {
    expect(stack.peek()).toMatchObject({
      value: "youtube"
    });
    stack.pop();
    expect(stack.peek()).toMatchObject({
      value: "udemy"
    });
  })
})
