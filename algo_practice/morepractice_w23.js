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
    // Time complexity O(V + E)
    // Space Complexity O(V)
    depthFirstSearch(array, current=this) {
        array.push(current.name);
            current.children.forEach(child => this.depthFirstSearch(array, child))
            return array
    }
}


// create a new rewards array
// Find any index that is not surrounded by lower vals
// Set all of those vals to 1
// From each of those vals, iterate left & right
// if next val is higher, Math.max(val, current + 1)
// if next val is lower and not 0, Math.min(val, current -1)
// [2, 3, 4, 3, 1, 3, 6, 7, 9, 5, 4]
// [1, 2, 3, 2, 1, 2, 3, 4, 5, 2, 1]


// function minRewards(scores) {
//     let rewards = new Array(scores.length).fill(0);
//       let smallest = []
//       for(let i=0; i<scores.length; i++) {
//           let prev = scores[i-1] || Infinity;
//           let current = scores[i];
//           let next = scores[i+1] || Infinity;
//           if(current<prev && current<next) {
//               rewards[i] = 1;
//               smallest.push(i);
//           }
//       }
//       while(smallest.length) {
//           let idx = smallest.shift();
//           for(let i=idx; i>0; i--) {
//               if(scores[i-1] && scores[i-1] > scores[i]) {
//                   rewards[i-1] = Math.max(rewards[i-1], rewards[i] + 1)
//               } else if(scores[i-1] && scores[i-1] < scores[i]) {
//                   rewards[i-1] = rewards[i-1] === 0 ? rewards[i] - 1 :
//                                                rewards[i-1] === 1 ? 1 :
//                                                Math.min(rewards[i-1], rewards[i] - 1)
//               }
//           }
//           for(let i=idx; i<scores.length -1; i++) {
//               if(scores[i+1] && scores[i+1] > scores[i]) {
//                   rewards[i+1] = Math.max(rewards[i+1], rewards[i] + 1)
//               } else if(scores[i+1] && scores[i+1] < scores[i]) {
//                   rewards[i+1] = rewards[i+1] === 0 ? rewards[i] - 1 :
//                                                rewards[i+1] === 1 ? 1 :
//                                                Math.min(rewards[i+1], rewards[i] - 1)
//               }
//           }
//       }
//       return rewards.reduce((sum, num) => sum + num)
//   }


// slightly better
// Time complexity O(n) => first find local mins, then only iterate through array once
// Space Complexity O(n)
// function minRewards(scores) {
//     let rewards = new Array(scores.length).fill(0);
//       let smallest = []
//       for(let i=0; i<scores.length; i++) {
//           let prev = scores[i-1] || Infinity;
//           let current = scores[i];
//           let next = scores[i+1] || Infinity;
//           if(current<prev && current<next) {
//               rewards[i] = 1;
//               smallest.push(i);
//           }
//       }
//       while(smallest.length) {
//           let idx = smallest.shift();
//           for(let i=idx; i>0; i--) {
//               let current = scores[i];
//               let next = scores[i-1] || -Infinity;
//               if(next > current) {
//                   rewards[i - 1] = Math.max(rewards[i-1], rewards[i] + 1)
//               }
//           }
//           for(let i=idx; i<scores.length; i++) {
//               let current = scores[i];
//               let next = scores[i+1] || -Infinity;
//               if(next > current) {
//                   rewards[i + 1] = Math.max(rewards[i+1], rewards[i] + 1)
//               }
//           }
//       }
//       return rewards.reduce((sum, num) => sum + num)
//   }



// best solution
// time complexity O(n)
// space complexity O(n)
function minRewards(scores) {
	let rewards = new Array(scores.length).fill(1);
  for(let i=1; i<scores.length; i++) {
		if(scores[i] > scores[i-1]) {
			rewards[i] = rewards[i-1] + 1;
		}
	}
	for(let i=scores.length -2; i>=0; i--) {
		if(scores[i] > scores[i+1]) {
			rewards[i] = Math.max(rewards[i], rewards[i+1] + 1);
		}
	}
	return rewards.reduce((sum, num) => sum + num)
}


// trailing zeroes

var trailingZeroes = function(n) {
    let zeroes = 0;
    let fivePower = 1;
    let current = 5;
    while(current <= n) {
        zeroes += Math.floor(n/current);
        fivePower++;
        current = 5 ** fivePower;
    }
    return zeroes;
};


// spiral algoexpert
// solution 1

// create a result array
// while array.length
// result array.push(...array.shift())
// iterate through outer array
// array.push(popped inner vals)
// iterate backwards through last inner push vals then pop array
// iterate backwards through outer array shift vals
// time complexity O(n*m)
// space complexity O(n*m)

// function spiralTraverse(array) {
// 	let result = [];
//   while(array.length) {
// 		result.push(...array.shift());
// 		for(let i=0; i<array.length; i++) {
// 			result.push(array[i].pop());
// 			if(array[i].length === 0) {
// 				array.splice(i, 1);
// 			}
// 		}
// 		if(array[array.length - 1]?.length) {
// 			for(let i=array[array.length - 1].length - 1; i>=0; i--) {
// 				result.push(array[array.length-1][i]);
// 			}
// 			array.pop()
// 		}
// 		for(let i=array.length - 1; i>=0; i--) {
// 			result.push(array[i].shift());
// 			if(array[i].length === 0) {
// 					array.splice(i, 1);
// 				}
// 		}
// 	}
// 	return result;

// solution 2

function spiralTraverse(array, sc=0, ec=array[0].length -1, sr=0, er=array.length-1) {
	let result = [];
  if(sr > er || sc > ec) {
		return result;
	}
	for(let i=sc; i<=ec; i++) {
		result.push(array[sr][i])
	}

	for(let i=sr+1; i<=er; i++) {
		result.push(array[i][ec])
	}

	for(let i=ec-1; i>=sc; i--) {
		if(sr === er) break;
		result.push(array[er][i])
	}

	for(let i=er-1; i>=sr+1; i--) {
		if(sc === ec) break;
		result.push(array[i][sc])
	}

	return result.concat(spiralTraverse(array, sc+1, ec-1, sr+1, er-1));

}
