// Write a Javascript program to get the extension of a filename
const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));

// should return '.html'
console.log(getFileExtension('index.html'));

// should return '.css'
console.log(getFileExtension('style.css'));

// should return '.js' because of lastIndexOf('.')
console.log(getFileExtension('webpack.config.js'));