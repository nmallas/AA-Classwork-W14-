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



// AlgoExpert smallest difference sol 1
// solution idea:
// iterate over array 1
// compare val to every val in array2
// keep track of minDiff
// Time complexity n^2
// Space Complexity constant

function smallestDifference(arrayOne, arrayTwo) {
    let minDif = Infinity;
    let vals = []
  for(let i=0; i<arrayOne.length; i++) {
        for(let j=0; j<arrayTwo.length; j++) {
            let diff = Math.abs(arrayOne[i] - arrayTwo[j]);
            if(diff < minDif) {
                minDif = diff;
                vals = [arrayOne[i], arrayTwo[j]]
            }
        }
    }
    return vals;
}


// AlgoExpert smallest difference sol 2
function smallestDifference(arrayOne, arrayTwo) {
    arrayOne.sort((a, b) => a - b);
      arrayTwo.sort((a, b) => a - b);
      let leftPointer = 0;
      let rightPointer = 0;
      let minDiff = Infinity;
      let currentArr = [];
      while(leftPointer < arrayOne.length && rightPointer < arrayTwo.length) {
          let diff = Math.abs(arrayOne[leftPointer] - arrayTwo[rightPointer]);
          if(diff === 0) {
               return [arrayOne[leftPointer], arrayTwo[rightPointer]];
          } else if(diff < minDiff) {
              minDiff = diff;
              currentArr = [arrayOne[leftPointer], arrayTwo[rightPointer]];
          }

          if(arrayOne[leftPointer] < arrayTwo[rightPointer]) {
              leftPointer++;
          } else {
              rightPointer++;
          }

      }
      return currentArr;
  }



  class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }

    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }

      // use an array to hold values to search
      // shift off first val of array
      // if there are children for current val
      // iterate backwards and add children to array
      // continue until finished
      // time complexity O(n) space: O(n)

      // bad solution

    // depthFirstSearch(array) {
    //       array.push(this.name)
    //   let toSearch = [...this.children];
    //       while(toSearch.length) {
    //               let node = toSearch.shift();
    //               array.push(node.name);
    //               for(let i=node.children.length -1; i>=0; i--) {
    //                   toSearch.unshift(node.children[i])
    //               }
    //       }
    //       return array;
//   }


    // good solution
    depthFirstSearch(array, current=this) {
        array.push(current.name);
            current.children.forEach(child => this.depthFirstSearch(array, child))
            return array
    }
}
