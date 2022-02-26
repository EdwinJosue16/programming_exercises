const { LEFT, RIGTH } = require("./constants");

class Node {
  constructor(element) {
    this.element = element;
    this.son = [];
  }

  add(element) {
    let side = 0;
    if (element <= this.element) {
      side = LEFT;
    } else {
      side = RIGTH;
    }
    if (this.son[side] === undefined) {
      this.son[side] = new Node(element);
    } else {
      this.son[side].add(element);
    }
  }

  lowestCommonAncestor(v, w, currentParent) {
    let lca = currentParent;
    if (
      currentParent.element > v &&
      currentParent.element > w &&
      currentParent.son[LEFT] != null
    ) {
      currentParent = currentParent.son[LEFT];
      lca = lca.lowestCommonAncestor(v, w, currentParent);
    } else {
      if (
        currentParent.element < v &&
        currentParent.element < w &&
        currentParent.son[RIGTH] != null
      ) {
        currentParent = currentParent.son[RIGTH];
        lca = lca.lowestCommonAncestor(v, w, currentParent);
      } else {
        if (currentParent.element == v || currentParent.element == w) {
          lca = currentParent;
        } else {
          if (
            (currentParent.element < v && currentParent.element > w) ||
            (currentParent.element > v && currentParent.element < w)
          ) {
            lca = currentParent;
          }
        }
      }
    }
    return lca;
  }
}

module.exports = Node;
