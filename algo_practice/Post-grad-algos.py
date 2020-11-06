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


# leetcode 83

# Time complexity O(n)
# Space Complexity O(1)
class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        current = head
        next = head.next if head else None
        while(current and next):
            while(next and current.val == next.val):
                next = next.next
            current.next = next
            current = next
            if current:
                next = current.next
        return head

# Leetcode 153 Medium

# iterate through list length -1 since we're looking at next val
# create a variable next and current
# If next < current return next
# If we iterated through and didn't return anything, return list[0]
# ex: [1,2,3,4,5]
# Time complexity - O(n)
# Space complexity - O(1)


class Solution:
    def findMin(self, nums: List[int]) -> int:
        for i in range(len(nums) - 1):
            current = nums[i]
            next = nums[i+1]
            if(next < current):
                return next

        return nums[0]
