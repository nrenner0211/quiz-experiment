// Write a Javascript program to get the current date. 

const formatDate = (date = new Date()) => {
    const days = date.getDate();
    const months = date.getMonth() + 1;
    const years = date.getFullYear();

    return `${months}/${days}/${years}`;
};

console.log(formatDate());