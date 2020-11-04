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


# leetcode 53


# Time Complexity O(n)
# Space Complexity O(1)
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        for i in range(1, len(nums)):
            nums[i] = max(nums[i], nums[i] + nums[i-1])
        return max(nums)
