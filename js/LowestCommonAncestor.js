/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 4 5
// 4 -> 3,5,2,4   5-> 3,5 = 5
var lowestCommonAncestor = function(root, p, q) {
    return LCA(root, p.val, q.val)
};

function LCA(root, p, q){ 
    if(root === null){
        return null
    }
    if(root.val === p || root.val === q){
        return root 
    }
    
    const leftResult = LCA(root.left, p, q)
    const rightResult = LCA(root.right, p, q)
    
    if(leftResult === null)
        return rightResult
    if(rightResult === null)
        return leftResult
    
    return root
}
