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


// create a function taking in array and target
// create an empty set
// iterate over the array
// check if the set has target - array[i]
// if so, return [array[i], target-array[i]]
// At end of iteration, if values not found, return []

function twoNumberSum(array, targetSum) {
    let numbers = new Set();
      let half = targetSum/2;
      let halfCount = 0;
      for(let i=0; i<array.length; i++) {
          if(numbers.has(targetSum - array[i])) {
              return [array[i], targetSum - array[i]]
          } else if(array[i] === half) {
              halfCount++;
          }
          if(halfCount === 2) return [half, half]
          numbers.add(array[i]);
      }
      return []
}

// Second solution using sorting and pointers

function twoNumberSum(array, targetSum) {
	array.sort((a,b) => a-b);
	let left = 0;
	let right = array.length -1;
	while(left !== right) {
		if((array[left] + array[right]) > targetSum) {
			right--;
		} else if ((array[left] + array[right]) === targetSum){
			return [array[left], array[right]]
		} else {
			left++;
		}
	}
	return [];
}
