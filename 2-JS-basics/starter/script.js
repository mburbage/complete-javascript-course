/**
 * Variable Names and Data Types
 *
 */
/*
 var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);



job = 'Teacher';
console.log(job);


var johnmark = 'John and Mark'; 
*/

/**
 * Variable Mutations and Type Coercion
 */
/*
 var firstName = 'John';
 var age = 28;

 // Type Coercion
 console.log(firstName + ' ' + age);

 var job, isMarried;
 job = 'Teacher';
 isMarried = false;

 console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

 // Variable Mutation
 age = 'twenty eight';
 job = 'driver';

 alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

 var lastName = prompt('What is his last Name?');
 console.log(firstName + ' ' + lastName);
*/

/**
 * Basic Operators
 */
/*

 // Math operators
 var year, yearJohn, yearMark;
 now = 2018;
 ageJohn = 28;
 ageMark = 33;

 yearJohn = now - 28;
 yearMark = now - 33;
 console.log(yearJohn);

 console.log(now + 2);
 console.log(now * 2);
 console.log(now / 10);

 // Logical operators
 var johnOlder = ageJohn < ageMark;
 console.log(johnOlder);

 // typeof operator
 console.log(typeof johnOlder);
 console.log(typeof ageJohn);
 console.log(typeof 'Mark is older than John');
 var x;
 console.log(typeof x);

*/

/**
 * Operator precedence
 */
/*
 var now = 2018;
 var yearJohn = 1989;
 var fullAge = 18;

 // Multiple operators
 var isFullAge = now - yearJohn >= fullAge; //true
 console.log(isFullAge);


 // Groupings
 var ageJohn = now - yearJohn;
 var ageMark = 35;
 var average = (ageJohn + ageMark) / 2;
 console.log(average);

 // Multiple assignments
 var x, y;
 x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
 console.log(x, y);

 // More operators
 x *= 2;
 console.log(x);
 x += 10;
 console.log(x);
 x++;
 console.log(x);
 */

/**
 * Code Challenge 1
 */
/*
  var markMass, markHeight, johnMass, johnHeight;
  markMass = 105; // Kg
  johnMass = 125;
  markHeight = 1.4; // Meters
  johnHeight = 1.2;

  console.log(markMass, johnMass);

  var markHigher = markMass / (markHeight * markHeight) > johnMass / (johnHeight * johnHeight);
  console.log( 'Is Mark\'s BMI higher than John\'s? ' + markHigher);
  */

/**
 * If / else statements
 */
/*
var firstName = "John";
var civilStatus = "single";

if (civilStatus === "married") {
	console.log(firstName + " is married!");
} else {
	console.log(firstName + " will hopefully marry soon :)");
}

var isMarried = true;

if (isMarried) {
	console.log(firstName + " is married!");
} else {
	console.log(firstName + " will hopefully marry soon :)");
}

var markMass, markHeight, johnMass, johnHeight;
  markMass = 190; // Kg
  johnMass = 125;
  markHeight = 1.4; // Meters
  johnHeight = 1.2;

  if (markMass / (markHeight * markHeight) > johnMass / (johnHeight * johnHeight)) {
	  console.log('Mark\'s BMI is higher than John\'s.');
  } else {
	  console.log( 'John\'s BMI is higher than Mark\'s.');
  }
*/
//   var markHigher = markMass / (markHeight * markHeight) > johnMass / (johnHeight * johnHeight);
//   console.log( 'Is Mark\'s BMI higher than John\'s? ' + markHigher);

/**
 * Boolean logic
 */
/*
 var firstName = 'John';
 var age = 20;

 if ( age < 13 ) {
	 console.log(firstName + ' is a boy.');
 } else if ( age >= 13 && age < 20 ) { // between 13 and 20 // age is >= 13 AND age is < 20
	 console.log(firstName + ' is a teenager.');
 } else if ( age >= 20 && age < 30) {
	 console.log(firstName + ' is a young man.');
 } else {
	 console.log( firstName + ' is a man.');
 }
 */

/**
 * Ternary operator
 */
/*
// Ternary operator
var firstName = "John";
var age = 14;

age >= 18
	? console.log(firstName + " drinks beer.")
	: console.log(firstName + " drinks juice.");

var drink = age >= 18 ? "beer" : "juice";
console.log(drink);
/*
  if ( age >= 18 ) {
	  var drink = 'beer';
  } else {
	  var drink = 'juice';
  }
  */

// Switch
/*
var job = 'cop';
switch (job) {
	case 'teacher':
		console.log(firstName + ' teaches kids how to code.');
		break
	case 'instructor':
		console.log(firstName + ' is a instructor.');
		break
	case 'driver':
		console.log(firstName + ' drives a Uber in Lisbon.');
		break
	case 'designer':
		console.log(firstName + ' designs beautiful websites.');
		break
	default:
		console.log(firstName + ' does something else.');
}

age = 10;

switch (true) {
	case age < 13:
		console.log(firstName + ' is a boy.');
		break;
	case age >= 13 && age < 20:
		console.log(firstName + ' is a teenager.');
		break;
	case age >= 20 && age < 30:
		console.log(firstName + ' is a young man.');
		break;
	default:
		console.log( firstName + ' is a man.');
}
*/

/**
 * Truthy and Falsy
 */

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT Falsy values
/*
 var height;

 height = 23;

 if ( height  || height === 0 ) {
	 console.log( 'Variable is defined' );
 } else {
	 console.log( 'Variable is undefined' );
 }

 // Equality operators
 if ( height === '23') {
	 console.log(' The == operator does type coericion!');
 }
 */
/*
 var johnAverage = (102 + 120 + 103) / 3;
 var mikeAverage = (116 + 94 + 123) / 3;
 var maryAverage = (97 + 139 + 105) / 3;

 console.log(johnAverage, mikeAverage, maryAverage);

 switch (true) {
	case johnAverage > mikeAverage && johnAverage > maryAverage:
		 console.log('John has the higher average score of ' + johnAverage);
		 break;
	case johnAverage < mikeAverage && maryAverage < mikeAverage:
		console.log('Mike has the higher average score of ' + mikeAverage);
		break;
	case johnAverage < maryAverage && mikeAverage < maryAverage:
		console.log('Mary has the higher average score of ' + maryAverage);
		break;
	case johnAverage === mikeAverage && johnAverage === maryAverage:
		console.log('John, Mary and Mike have the same average score of ' + johnAverage + ' and ' + mikeAverage);
		break;
	default:
		console.log('No winner');
 }
 */

/**
 * Functions
 */
/*
  function calculateAge ( birthYear ) {
	  return 2020 - birthYear;
  }

  var ageJohn = calculateAge( 1990 );
  var ageMike = calculateAge( 1948 );
  var ageJane = calculateAge( 1969 );
  console.log(ageJohn, ageMike, ageJane);

  function yearsUntilRetirement( year, firstName ) {
	  var age = calculateAge( year );
	  var retirement = 65 - age;
	  if ( retirement > 0 ) {
		  console.log( firstName + ' retires in ' + retirement + ' years.' );
	  } else {
		  console.log( firstName + ' is already retired.' );
	  }
	  
	  
	  
  }

  yearsUntilRetirement( 1990, 'John');
  yearsUntilRetirement( 1948, 'Mike');
  yearsUntilRetirement( 1969, 'Jane');
  */

/**
 * Function Statements
 */

// Function Declaration
//function whatDoYouDo (job, firstName) {}

// Function expression
/*
var whatDoYouDo = function (job, firstName) {
	switch (job) {
		case "teacher":
			return firstName + " teaches kids how to code";
		case "driver":
			return firstName + " drives a cab in Lisbon";
		case "designer":
			return firstName + " designs beautiful websites";
		default:
			return firstName + " does something else";
	}
};

console.log( whatDoYouDo( 'teacher', 'John') );
console.log( whatDoYouDo( 'designer', 'Jane') );
console.log( whatDoYouDo( 'retired', 'Mark') );
*/

/**
 * Arrays
 */
/*
 // Int new array
 var names = ['John', 'Mark', 'Jane'];
 var years = new Array(1990, 1969, 1948);

 console.log( names );

 // Mutate array
 names[1] = 'Ben';
 names[names.length] = 'Mary';
 console.log( names );

 // Different Data Types
 var john = ['John', 'Smith', 1990, 'designer', false];
 
john.push( 'blue' );
john.unshift( 'Mr' );
console.log( john );

john.pop();
john.pop();
john.shift();
console.log( john );

console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';

console.log( isDesigner );
*/

/**
 * Code Challenge
 */
/*
// All checks
var checks = [124, 48, 268];

var returnTip = function( check ){
	switch(check){
		case check < 50:
			return check * 0.2;
		case check >= 50 && check <= 200:
			return check * 0.15;
		default:
			return check * 0.1;
	}
}

function returnTotals( check ){
	var tip = returnTip( check );
	return check + tip;
}

var tips = [
	returnTip(checks[0]),
	returnTip(checks[1]),
	returnTip(checks[2])
];
var totals = [
	returnTotals(checks[0]),
	returnTotals(checks[1]),
	returnTotals(checks[2])
];
console.log( tips, totals );
*/

/**
 * Objects and properties
 */
/*
 // Object literal
 var john = {
	 firstName: 'John',
	 lastName: 'Smith',
	 birthYear: 1990,
	 family: ['Jane', 'Mark', 'Bob', 'Emilly'],
	 job: 'teacher',
	 isMarried: false
 };

 console.log( john['lastName'] ); 
 var x = 'birthYear';
 console.log( john[x] );

 john.job = 'designer';
 john['isMarried'] = true;

 console.log(john);


 // New object syntax
 var jane = new Object();

 jane.name = 'Jane';
 jane.birthYear = 1969;
 jane['lastName'] = 'Smith';
 console.log(jane);
 
 */

 /**
  * Objects and methods
  */
/*
 var john = {
	firstName: 'John',
	lastName: 'Smith',
	birthYear: 1992,
	family: ['Jane', 'Mark', 'Bob', 'Emilly'],
	job: 'teacher',
	isMarried: false,
	calcAge: function() {
		this.age = 2020 - this.birthYear;
	}
};

john.calcAge();

console.log(john);
*/

/**
 * Code Challenge
 */
/*
 var mark = {
	 firstName: 'Mark',
	 lastName: 'Bass',
	 mass: 125, // kg
	 height: 1.2, // meters
	 calcBmi: function(){
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	 }
 }
 
 var john = {
	 firstName: 'John',
	 lastName: 'Smith',
	 mass: 150, // kg
	 height: 1.2, // meters
	 calcBmi: function(){
		 this.bmi = this.mass / (this.height * this.height);
		 return this.bmi;
	}
 }

 john.calcBmi();
 mark.calcBmi();
 console.log(john, mark);
 

 if ( john.bmi > mark.bmi ) {
	 console.log(john.firstName + ' ' + john.lastName + ' has a higher BMI of ' + john.bmi);	 
 }else if (john.bmi < mark.bmi) {
	console.log(mark.firstName + ' ' + mark.lastName + ' has a higher BMI of ' + mark.bmi);
 } else {
	console.log(mark.firstName + ' ' + mark.lastName + ' and ' + john.firstName + ' ' + john.lastName + ' have the same BMI ' + mark.bmi);
 };
*/

/**
 * Loops and iterations
 */

 
 

 
