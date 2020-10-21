// Leetcode #152

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

// Leetcode #167
var twoSum = function(numbers, target) {
    let i = 0;
    let x = numbers.length - 1;
    while(i < x) {
        if(numbers[i] + numbers[x] === target) {
            return [i+1, x+1];
        } else if (numbers[i] + numbers[x] > target) {
            x--;
        } else {
            i++;
        }
    }
};
