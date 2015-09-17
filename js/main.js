var iceCream = ["Rocky Road", "Strawberry", "Mint Chocolate Chip"];
iceCream.push("Vanilla");

var obama = {firstName:"Barack", lastName:"Obama", termLength:"8 years", party:"Democratic", yearsOfPresidency:"2009-present"};
var wbush = {firstName:"George W.", lastName:"Bush", termLength:"8 years", party:"Republican", yearsOfPresidency:"2001-2009"};
var clinton = {firstName:"Bill", lastName:"Clinton", termLength:"8 years", party:"Democratic", yearsOfPresidency:"1993-2001"};
var hwbush = {firstName:"George H.W.", lastName:"Bush", termLength:"4 years", party:"Republican", yearsOfPresidency:"1989-1993"};
var reagan = {firstName:"Ronald", lastName:"Reagan", termLength:"8 years", party:"Republican", yearsOfPresidency:"1981-1989"};
var presidents = [obama, wbush, clinton, hwbush, reagan];
console.log(presidents[2].firstName + " " + presidents[2].lastName);

function howdy(firstName, lastName, message) {
	return firstName + " " + lastName + " says " + message + "!";
}

var greeting = howdy( "Vicki", "Grunewald", "hi");
console.log( greeting );

var numba = function( string ) {
	if (string.length < 7) {
		console.log( "What a short little word!");
	}	else if (string.length > 7) {
		console.log( "I'm sorry, but that's too many to count.");
	}	else if (string.length = 7) {
		console.log( "7, what a perfect choice!");
	}
};

numba("7");

numba("seventy");

numba("university");





