var iceCream = ["Rocky Road", "Strawberry", "Mint Chocolate Chip"];
iceCream.push("Vanilla");

var obama = {
	firstName:"Barack",
	lastName:"Obama",
	termLength:"8 years",
	party:"Democratic",
	yearsOfPresidency:"2009-present",
};
var wbush = {
	firstName:"George W.",
	lastName:"Bush",
	termLength:"8 years",
	party:"Republican",
	yearsOfPresidency:"2001-2009",
};
var clinton = {
	firstName:"Bill",
	lastName:"Clinton",
	termLength:"8 years",
	party:"Democratic",
	yearsOfPresidency:"1993-2001",
};
var hwbush = {
	firstName:"George H.W.",
	lastName:"Bush",
	termLength:"4 years",
	party:"Republican",
	yearsOfPresidency:"1989-1993",
};
var reagan = {
	firstName:"Ronald",
	lastName:"Reagan",
	termLength:"8 years",
	party:"Republican",
	yearsOfPresidency:"1981-1989",
};
var presidents = [obama, wbush, clinton, hwbush, reagan];
console.log(presidents[2].firstName + " " + presidents[2].lastName);

