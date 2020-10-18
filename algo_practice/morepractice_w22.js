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
