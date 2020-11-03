# leetcode 100

class Solution:
    def isSameTree(self, p: TreeNode, q: TreeNode) -> bool:

        def depthFirstSearch(root):
            if not root:
                return [None]
            return [root.val] + depthFirstSearch(root.left) +
            depthFirstSearch(root.right)

        first = depthFirstSearch(p)
        second = depthFirstSearch(q)

        if(len(first) != len(second)):
            return False

        for i in range(len(first)):
            if(first[i] != second[i]):
                return False

        return True
