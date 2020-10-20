// Leetcode #69

var mySqrt = function(x) {
    return Math.floor(Math.sqrt(x));
};

// Leetcode #268

var missingNumber = function(nums) {
    let numsFound = new Set();
    for(let i=0; i<nums.length; i++) {
        numsFound.add(nums[i]);
    }
    for(let i=0; i<=nums.length; i++) {
        if(!numsFound.has(i)) return i;
    }
};


// Leetcode #58

var lengthOfLastWord = function(s) {
    if(!s.trim()) return 0;
    let words = s.split(" ").filter(word => word !== "");
    return words[words.length -1].length
};


// Leetcode #67

var addBinary = function(a, b) {
    let aSplit = a.split("").reverse()
    let bSplit = b.split("").reverse()
    let newBString = [];
    let carry = false;
    for(let i=0; i<Math.max(a.length, b.length); i++) {
        let newA = Number(aSplit[i]) || 0 ;
        let newB = Number(bSplit[i]) || 0 ;
        let add = carry ? 1 : 0;
        newVal = newA + newB + add;
        carry = false;
        if(newVal >= 2) {
            carry = true;
            newVal -= 2;
        }
        newBString.push(newVal)
    }
    if(carry) newBString.push(1)
    return newBString.reverse().join("")
};
