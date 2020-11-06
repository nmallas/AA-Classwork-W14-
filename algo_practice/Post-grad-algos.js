// algoexpert same BST's

// solution 1

// function sameBsts(arrayOne, arrayTwo) {

//   function sameLandR(arrOne, arrTwo) {
//     console.log(arrOne, arrTwo)
//     if(!arrOne.length && !arrTwo.length) return true;
//     if(arrOne[0] !== arrTwo[0]) return false;
//     if(arrOne[0] === null) return true;
//     let firstLeft = null;
//     let firstRight = null;
//     let secondLeft = null;
//     let secondRight = null;
//     let root = arrOne.shift();
//     arrTwo.shift();
//     for(let i=0; i<arrOne.length; i++) {
//         if(arrOne[i] < root && firstLeft === null) {
//             firstLeft = arrOne[i];
//         }
//         if(arrOne[i] > root && firstRight === null) {
//             firstRight = arrOne[i];
//         }
//     }
//     for(let i=0; i<arrTwo.length; i++) {
//         if(arrTwo[i] < root && secondLeft === null) {
//             secondLeft = arrTwo[i];
//         }
//         if(arrTwo[i] > root && secondRight === null) {
//             secondRight = arrTwo[i];
//         }
//     }

//     if(!(firstLeft === secondLeft && firstRight === secondRight)) {
//         return false;
//     }

//     let arr1LeftVals = arrOne.filter(x => x < root)
//     let arr2LeftVals = arrTwo.filter(x => x < root)
//     let arr1RightVals = arrOne.filter(x => x >= root)
//     let arr2RightVals = arrTwo.filter(x => x >= root)

//     return sameLandR(arr1LeftVals, arr2LeftVals) && sameLandR(arr1RightVals, arr2RightVals)
// }

// return sameLandR(arrayOne, arrayTwo)
// }

// solution 2

// space complexity O(n^2)
// time complexity O(n^2)

function sameBsts(arrOne, arrTwo) {

    if(!arrOne.length && !arrTwo.length) return true;
    let root = arrOne.shift();
    if(root !== arrTwo.shift()) return false;

    let arr1LeftVals = arrOne.filter(x => x < root)
    let arr2LeftVals = arrTwo.filter(x => x < root)
    let arr1RightVals = arrOne.filter(x => x >= root)
    let arr2RightVals = arrTwo.filter(x => x >= root)

    return sameBsts(arr1LeftVals, arr2LeftVals) && sameBsts(arr1RightVals, arr2RightVals)
}


// Algo expert move to end

// set firstMatchingIndex = array.indexOf(toMove);
// iterate through array starting at index 1
// if el not equal to toMove val
// swap with firstMatchingIndex
// increment firstMatchingIndex
// [0, 1, 3, 2, 2, 2, 4, 2]
// 2
// [1, 3, 4, 2, 2, 2, 2, 2]
// time complexity --> O(n)
// space complexity --> O(1)


function moveElementToEnd(array, toMove) {
    let firstMatchingIndex = array.indexOf(toMove);
      if(firstMatchingIndex < 0) return array;
      for(let i=firstMatchingIndex + 1; i<array.length; i++) {
          if(array[i] !== toMove) {
              [array[firstMatchingIndex], array[i]] = [array[i], array[firstMatchingIndex]];
              firstMatchingIndex++;
          }
      }
      return array;
  }


// solution 2
// function moveElementToEnd(array, toMove) {
//     let left = 0;
//       let right = array.length -1;
//       while(left < right) {

//           while(array[right] === toMove) {
//               right--;
//           }

//           if(array[left] === toMove && left < right) {
//               array[left] = array[right];
//               array[right] = toMove;
//               left++;
//               right--;
//           } else {
//               left++;
//           }
//       }
//       return array
//   }
