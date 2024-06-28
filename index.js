//Create a function that takes voltage and current and returns the calculated power.  Ex- circuitPower(110, 3) ➞ 330
 function calculatedPower(voltage,current){
    return voltage*current;
 }
 console.log(calculatedPower(110,3))

 //Write a JavaScript function named ‘findMaxNumber’ that takes an array of numbers as an argument and returns the maximum number in the array. If the array is empty, the function should return null.
 function findMaxNumber(nums) {
    if (nums.length === 0) {
      return null;
    }
  
    return Math.max(...nums)
  }
  console.log(findMaxNumber([23,11,3,1,640,200]));
  //3) Write a JavaScript function named ‘mergeArrays’ that takes two arrays as arguments and returns a new array.
  
function mergeArrays(arr1, arr2) {
  let newArr = [...arr1, ...arr2];
  return newArr;
}
console.log(mergeArrays([23, 42, 68, 22, 77], [32, 11]));

// Create a function ‘arrayValuesTypes’ that takes an array and returns the types of values (data types) in a new array. Ex- arrayValuesTypes([1, 2, "null", []]) ➞ ["number", "number", "string", "object"]
function arrayValuesTypes(arr) {
    let dataTypeArr = [];
    for (let i = 0; i < arr.length; i++) {
      dataTypeArr.push(typeof arr[i]);
    }
    return dataTypeArr
  }
  console.log(arrayValuesTypes([1, 2, "null", []]));