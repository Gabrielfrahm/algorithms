export class Node<T> {
  value: T | null;
  left: Node<T> | null;
  right: Node<T> | null;

  constructor(value: T) {
    this.right = null;
    this.left = null;
    this.value = value;
  }
}

export class BinarySearchTree<T> {
  root: Node<T> | null;

  constructor() {
    this.root = null;
  }

  insert(value: any) {
    const node = new Node(value)
    if (!this.root) {
      this.root = node;
      return this;
    }
    let current: Node<T> | null = this.root;
    let father: Node<T> | null = null;
    while (current) {
      father = current;
      if (value < current.value!) {
        current = current.left;
        if (!current) {
          father.left = node;
        }
      } else {
        current = current.right;
        if (!current) {
          father.right = node;
        }
      }

    }
    return this;
  }

  traverse(node: any) {
    const tree: any = { value: node.value };
    tree.left = node.left === null ? null : this.traverse(node.left);
    tree.right = node.right === null ? null : this.traverse(node.right);
    return tree;
  }

  lookup(value: T) {
    if (!this.root) return null;
    let current: Node<T> | null = this.root;
    while (current) {
      if (value === current.value) {
        return current;
      }
      if (value < current.value!) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
  }

  findMin(node: Node<T>) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  remove(value: T, node = this.root) {
    if (!node) return null;

    if (value < node.value!) {
      node.left = this.remove(value, node.left);
    } else if (value > node.value!) {
      node.right = this.remove(value, node.right);
    } else {
      // Caso 1: Nó sem filhos
      if (!node.left && !node.right) {
        return null;
      }
      // Caso 2: Um único filho
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      // Caso 3: Dois filhos
      let current = node.right;
      while (current.left) {
        current = current.left;
      }
      node.value = current.value;
      node.right = this.remove(current.value!, node.right);
    }

    return node;
  }
}


