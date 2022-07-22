// Write a Javascript program to add "New!" to the front of a given string,
// creating a new string. If the string already begins with "New!", return original string.

const addNew = (str) => 
    str.indexOf('New!') === 0 ? str : `New! ${str}`;
    
    // tests
    console.log(addNew('Killer Aliens'));
    console.log(addNew('New! Appliances!'));
