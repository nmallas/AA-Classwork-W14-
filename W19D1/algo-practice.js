// Leetcode 2. Add Two Numbers

var addTwoNumbers = function(l1, l2) {
    let sumVals = []
    carryOver = 0
    while (l1 || l2 || carryOver) {
        num = (l1?.val || 0) + (l2?.val || 0) + carryOver
        carryOver = 0
        if (num >= 10) {
            carryOver++;
            num -= 10;
        }
        sumVals.unshift(num)
        l1 = l1?.next ? l1.next : null
        l2 = l2?.next ? l2.next : null
    }

    let sumString = sumVals.reverse().join("")
    let root = new ListNode(Number(sumString[0]))
    let current = root
    for(let i=1; i<sumString.length; i++) {
        let newNode = new ListNode(Number(sumString[i]));
        current.next = newNode
        current = current.next
    }
    return root
};
