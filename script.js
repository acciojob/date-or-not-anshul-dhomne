var isDate = function (input) {
    // Check if input is a Date object and if it's valid
    if (input instanceof Date && !isNaN(input.getTime())) {
        return true;
    }
    
    // Check if input is a string and can be parsed into a valid date
    if (typeof input === 'string') {
        return !isNaN(Date.parse(input));
    }
    
    // For any other type of input, return false
    return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
