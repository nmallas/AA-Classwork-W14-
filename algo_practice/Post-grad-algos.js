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
