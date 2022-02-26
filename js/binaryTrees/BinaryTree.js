const Node = require("./Node");

class OrderedBinaryTree {
  constructor() {
    this.root = null;
  }

  empty() {
    return this.root === null;
  }

  add(element) {
    if (this.empty()) {
      this.root = new Node(element);
    } else {
      this.root.add(element);
    }
  }

  test(v, w) {
    this.add(25);
    this.add(20);
    this.add(30);
    this.add(10);
    this.add(23);
    this.add(35);
    this.add(5);
    this.add(21);
    this.add(32);
    this.add(2);
    this.add(1);
    this.add(11);

    return this.root.lowestCommonAncestor(v, w, this.root);
  }
}

console.log(new OrderedBinaryTree().test(21, 23).element);
