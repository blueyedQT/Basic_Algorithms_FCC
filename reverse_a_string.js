// Reverse a String 

// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.

function reverseString(str) {
	var newStr = "";
	for(var i=str.length-1; i>=0; i--) {
		newStr+= str[i];
	}
	return newStr;
}

console.log(reverseString("Hello"));


// Tests
// reverseString("hello") should return a string.
// reverseString("hello") should become "olleh".
// reverseString("Howdy") should become "ydwoH".
// reverseString("Greetings from Earth") should return "htraE morf sgniteerG".