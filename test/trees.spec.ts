import { BinarySearchTree } from "../src/data/trees/trees";

describe('BinarySearchTree', () => {
  let bst : BinarySearchTree<number>;

  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  test('Deve inserir valores corretamente', () => {
    bst.insert(9);
    bst.insert(4);
    bst.insert(6);
    bst.insert(20);
    bst.insert(170);
    bst.insert(15);
    bst.insert(1);

    const expectedTree = {
      value: 9,
      left: {
        value: 4,
        left: { value: 1, left: null, right: null },
        right: { value: 6, left: null, right: null },
      },
      right: {
        value: 20,
        left: { value: 15, left: null, right: null },
        right: { value: 170, left: null, right: null },
      },
    };

    expect(bst.traverse(bst.root)).toEqual(expectedTree);
  });

  test('Deve olhar um valor da arvore', () => {
    bst.insert(9);
    bst.insert(4);
    bst.insert(6);
    bst.insert(20);
    bst.insert(170);
    bst.insert(15);
    bst.insert(1);

    expect(bst.lookup(20)).toMatchObject({
      right:  { right: null, left: null, value: 170 },
      left:  { right: null, left: null, value: 15 },
      value: 20
    })
  });

  test('Deve remover um valor da arvore', () => {
    bst.insert(9);
    bst.insert(4);
    bst.insert(6);
    bst.insert(20);
    bst.insert(170);
    bst.insert(15);
    bst.insert(1);
    console.log(bst.traverse(bst.root))

    bst.remove(4)
    console.log(bst.traverse(bst.root))

  });
});
