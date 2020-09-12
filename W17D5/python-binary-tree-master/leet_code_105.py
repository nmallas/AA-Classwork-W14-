"""
View the full problem and run the test cases at:
https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
"""
from tree_node import TreeNode

def buildTree(self, preorder: List[int], inorder: List[int]) -> TreeNode:
        if not preorder or not inorder:
            return
        rootVal = preorder.pop(0)
        root = TreeNode(rootVal)
        index = inorder.index(rootVal)
        leftIn = inorder[:index]
        rightIn = inorder[index +1:]
        root.left = self.buildTree(preorder, leftIn)
        root.right = self.buildTree(preorder, rightIn)
        return root

preorder_tree_values = [3,9,20,15,7]
inorder_tree_values = [9,3,15,20,7]
root_node = buildTree(preorder_tree_values, inorder_tree_values)
print(root_node)
print(root_node.left.value)   # 9
print(root_node.right.value)  # 20
# Returns the `root` node of the following binary tree:
#   3
#  / \
# 9  20
#   /  \
#  15   7
