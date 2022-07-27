// Write code to create a function that accepts an array of numbers and returns a new array that corresponds to the original array
// If a element in the original array is even, the element at the same index in the new array should be double the original element
// If an element in the original array is odd, the element at the same index of the new array should be triple the original element

// example array & pseudocode

// [1, 4, 5, 6, 10]
// expects: [3, 8, 15, 12, 20]

// need to declare variable to store new array
// need to loop through array
// need to check if current number is even
// if it is, we push current number times 2 into new array
// else we push current number times 3 to new array

var doubleTripleMap = function(arr) {
    var dubTripArray = [];
    for (var i = 0; i < arr.length; i++) {
        var currentNumber = arr[i];

        if(currentNumber % 2 === 0) {
            dubTripArray.push(currentNumber * 2);
        } else {
            dubTripArray.push(currentNumber * 3);
        }
    }
    return dubTripArray;
};

// console logs
console.log(doubleTripleMap([1, 4, 5, 6, 10]));

console.log(doubleTripleMap([1, 2, 3, 4]));