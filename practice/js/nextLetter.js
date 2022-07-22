// Write a javascript program
// to replace every character in a given string 
// with the character following it in the alphabet

const nextLetter = (str) => 
    str
    // .split() returns an array from str
    .split('')
    // .map() changes every item in array based on function
    .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
    // .join() changes the array back into a string
    .join('');

console.log(nextLetter('abcde'));

console.log(nextLetter('supercalifragilisticexpialidocious'));

// conditionals needed to exclude special characters