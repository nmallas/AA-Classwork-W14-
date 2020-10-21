// Leetcode # 152

var maxProduct = function(nums) {
    for(let i=0; i<nums.length; i++) {
        let pastVal = nums[i-1] ? nums[i-1] : [1, 1]
        let productLow = pastVal[0] * nums[i];
        let productHigh = pastVal[1] * nums[i];
        let currentLow = Math.min(productLow, productHigh, nums[i]);
        let currentHigh = Math.max(productLow, productHigh, nums[i]);
        nums[i] = [currentLow, currentHigh];
    }
    return Math.max(...nums.map(num => num[1]))
};
