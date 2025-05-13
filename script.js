var isDate = function (input) {
  //   write your code here
	    return !isNAN(Date.parse(input));
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
