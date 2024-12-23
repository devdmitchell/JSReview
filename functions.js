const returnEmptyString = function () {
    return "";
  };
  
  const returnZeroNumber = function () {
    return 0;
  };
  
  const returnEmptyArray = function () {
    return [];
  };
  
  const returnEmptyObject = function () {
    return {};
  };
  
  const returnAbcString = function () {
    return "abc123";
  };
  
  const returnSumOfTen = function () {
    return 10 + 0;
  };
  
//   const subtraction = function (a, b) {
//     return a - b;
//   };

// const subtraction = function (arr) {
//     if (arr.length === 0) return 0; 
//     let result = arr[0]; 
//     for (let i = 1; i < arr.length; i++) {
//       result -= arr[i]; 
//     }
//     return result;
//   };

const subtraction = function (arr) {
let total = 0
for(let i = 0; i <arr.length; i++){
    total -= arr[i]
} return total;
};
  
  const multiplication = function (a, b) {
    return a * b;
  };
  
//   const division = function (a, b) {
//     if (b === 0) {
//       return "Error";
//     }
//     return a / b;
//   };
  
// const division = function (arr) {
//     if (arr.length === 0) return 0; 
//     let result = arr[0]; 
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] === 0) {
//         return "Error"; 
//       }
//       result /= arr[i]; 
//     }
//     return parseFloat(result.toFixed(3));
//   };

const division = function (arr) {
let accumulator = arr[0]
for(let i = 1; i < arr.length;){
    accumulator /= arr[i]
}
let result = accumulator.toFixed[3]
return parseFloat(result)
};

  const returnArray = function () {
    return [1, 2, 3]; 
  };
  
  const returnFirstIndex = function (arr) {
    return arr[0];
  };
  
  const returnSecondIndex = function (arr) {
    return arr[1];
  };
  
  const returnArrayLength = function (arr) {
    return arr.length;
  };


const arraySum = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  };
  
  const arraySubtraction = function (arr) {
    if (arr.length === 0) return 0;
    let difference = arr[0];
    for (let i = 1; i < arr.length; i++) {
      difference -= arr[i];
    }
    return difference;
  };
  
  const multiplicationArray = function (arr) {
    if (arr.length === 0) return 1;
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
      product *= arr[i];
    }
    return product;
  };
  
  const divisionArray = function (arr) {
    if (arr.length === 0) return 1;
    let quotient = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] === 0) {
        return "Error";
      }
      quotient /= arr[i];
    }
    return quotient;
  };
  
  const oddArray = function (arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        result.push(arr[i]);
      }
    }
    return result;
  };
  
  const evenArray = function (arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        result.push(arr[i]);
      }
    }
    return result;
  };


module.exports = {
returnEmptyString,
returnZeroNumber,
returnEmptyArray,
returnEmptyObject,
returnAbcString,
returnSumOfTen,
subtraction,
multiplication,
division,
returnArray,
returnFirstIndex,
returnSecondIndex,
returnArrayLength,
arraySum,
arraySubtraction,
multiplicationArray,
divisionArray,
oddArray,
evenArray
}
