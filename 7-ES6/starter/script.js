// let and const

// ES5
/*
var name5 = 'Jand Smith';
var age5 = '23';
name5 = 'Jane Miller';
console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);
*/

// ES5

/*
function driversLicense5(passedTest) {
	if(passedTest) {
		console.log(firstName);
		var firstName = 'John';
		var yearOfBirth = 1990;		
	}
	console.log(firstName + ', ' + yearOfBirth);
}

driversLicense5(true);

// ES6
function driversLicense6(passedTest) {

	//console.log(firstName);
	let firstName;
	const yearOfBirth = 1990;

	if(passedTest) {
		firstName = 'John';
		//yearOfBirth = 1990;

		
	}

	console.log(firstName + ', ' + yearOfBirth);
}

driversLicense6(true);



var i = 23;

for(var i = 0; i < 5; i++) {
	console.log(i);
};

console.log(i);
*/

// Blocks and IIFEs

// ES6
/*
{
	const a = 1;
	let b = 2;
	var c = 3;

}

console.log(c);

// ES5
(function () {
	var c = 3;
})();

console.log(c);
*/

// Strings
/*
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
	return 2016 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('n'));
console.log(n.endsWith('h'));
console.log(n.includes('oh'));
console.log(`${firstName} `.repeat(5));
*/

// Arrow functions
/*
const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function(el) {
	return 2016 - el;
});

console.log(ages5);

// ES6
let ages6 = years.map(el => 2016 - el);

ages6 = years.map((el, index) => `Ages element ${index + 1}: ${2020 - el}.`);

console.log(ages6);

ages6 = years.map((el, index) => {
	const now = new Date().getFullYear();
	const age = now - el;
	return `Ages element ${index + 1}: ${age}.`
})

console.log(ages6);
*/

// Arrow functions Lexical
/*
// ES5
var box5 = {
	color: 'green',
	position: 1,
	clickMe: function () {
		var self = this;
		document.querySelector('.green').addEventListener('click', function() {
			var str = 'This is box number ' + self.position + ' and it is ' + self.color;
			alert(str);
		})
	}

}
//box5.clickMe();

// ES6
const box6 = {
	color: 'green',
	position: 1,
	clickMe: function () {
		document.querySelector('.green').addEventListener('click', () => {
			var str = 'This is box number ' + this.position + ' and it is ' + this.color;
			alert(str);
		})
	}

}
box6.clickMe();
/*
const box66 = {
	color: 'green',
	position: 1,
	clickMe: () => {
		var self = this;
		document.querySelector('.green').addEventListener('click', function() {
			var str = 'This is box number ' + this.position + ' and it is ' + this.color;
			alert(str);
		})
	}
}
box66.clickMe();
*/
/*
function Person(name) {
	this.name = name;
}

Person.prototype.myFriends5 = function(friends) {
	var arr = friends.map(function (el) {
		return this.name + ' is friends with ' + el;
	}.bind(this))
	console.log(arr);
}

var friends = ['Jane', 'Mark', 'Bob'];

new Person('John').myFriends5(friends);
*/
// ES6
/*
function Person(name) {
	this.name = name;
}

Person.prototype.myFriends6 = function(friends) {
	var arr = friends.map(el => `${this.name} is friends with ${el}.`
	);
	console.log(arr);
}

var friends = ['Jane', 'Mark', 'Bob'];

new Person('Mike').myFriends6(friends);
*/


// Destructuring
/*
// ES5
var john = ['John', 26];
var name = john[0];
var age = john[1];
*/
// ES6
/*
const [name, age] = ['John', 26];
console.log(name, age);

const obj = {
	firstName: 'John',
	lastName: 'Smith'
};

const {firstName, lastName} = obj;
console.log(firstName, lastName);

const {firstName: a, lastName: b} = obj;
console.log(a, b);


function calcAgeRetirement(year) {
	const age = new Date().getFullYear() - year;
	return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);
*/

// Arrays
/*
const boxes = document.querySelectorAll('.box');

console.log(boxes);

// ES5

var boxesArr5 = Array.prototype.slice.call(boxes);

boxesArr5.forEach(function(cur) {
	cur.style.backgroundColor = 'dodgerblue';
})


// ES5

const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');
/*
for(var i = 0; i < boxesArr5.length; i++) {
	if (boxesArr5[i].className === 'box blue') {
		continue;
	}
	boxesArr5[i].textContent = 'I changed to blue!';
}
*/

// ES6
/*
for (const cur of boxesArr6) {
	if (cur.className.includes('blue')) {
		continue;
	}
	cur.textContent = 'I changed to blue!'
}


// ES5

var ages = [12, 17, 8, 21, 14, 11];
var full = ages.map(function(cur) {
	return cur >= 18;
})
console.log(full);

console.log(full.indexOf(true));

// ES6

console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));
*/

// Spread
/*
function addFourAges(a, b, c, d) {
	return a + b + c + d;
}
var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

// ES5

var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];

const bigFamily = [...familySmith, 'Lilly', ...familyMiller];
console.log(bigFamily);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');

const all = [h, ...boxes];

all.forEach(cur => cur.style.color = 'purple');
console.log(all);
*/

// Rest Parameters

// ES5
/*
function isFullAge5() {
	//console.log(arguments);
	var argsArr = Array.prototype.slice.call(arguments);

	argsArr.forEach(function(curr) {
		//console.log((2016 - curr) >= 18);
	})
}

isFullAge5(1990, 1999, 1965);
isFullAge5(1990, 1999, 1965, 2016, 1987);


// ES6

function isFullAge6(...years){
	years.forEach( cur => console.log((2016 - cur) >= 18));
}

isFullAge6(1990, 1999, 1965);
isFullAge6(1990, 1999, 1965, 2016, 1987);
*/
/*
function isFullAge5(limit) {
	//console.log(arguments);
	var argsArr = Array.prototype.slice.call(arguments, 1);

	console.log(argsArr);

	argsArr.forEach(function(curr) {
		console.log((2016 - curr) >= limit);
	})
}

//isFullAge5(16, 1990, 1999, 1965);
//isFullAge5(1990, 1999, 1965, 2016, 1987);


// ES6

function isFullAge6(limit, ...years){
	years.forEach( cur => console.log((2016 - cur) >= limit));
}

//isFullAge6(16, 1990, 1999, 1965);
isFullAge6(16, 1990, 1999, 1965, 2016, 1987);
*/

// Default Parameters

// ES5
/*
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

	lastName === undefined ? lastName = 'Smith' : lastName = lastName;
	nationality === undefined ? nationality = 'American' : nationality = nationality;

	this.firstName = firstName;
	this.lastName = lastName;
	this.yearOfBirth = yearOfBirth;
	this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spainish')
*/

// ES6
/*
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american'){
	this.firstName = firstName;
	this.lastName = lastName;
	this.yearOfBirth = yearOfBirth;
	this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spainish')
*/

// Maps
/*
const question = new Map();
question.set('question', 'What is the official name of the latest majoy JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer');
question.set(false, 'Wrong, try again.');

//console.log(question.get('question'));
//console.log(question.size);

if (question.has(4)) {
	//question.delete(4);
	//console.log('Has 4');
}

//question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));

for (const [key, value] of question.entries()) {
	if (typeof(key) === 'number') {
		console.log(`Answer ${key}: ${value}`)
	}
}

const ans = parseInt(prompt('Write the correct answer'));

console.log(question.get(ans === question.get('correct')));
*/

// Classes

// ES5
/*
function Person5 (name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
}

Person5.prototype.calculateAge = function () {
	var age = new Date().getFullYear - this.yearOfBirth;
	console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');

// ES6

class Person6 {
	constructor (name, yearOfBirth, job){
		this.name = name;
		this.yearOfBirth = yearOfBirth;
		this.job = job;
	}
	calculateAge() {
		var age = new Date().getFullYear - this.yearOfBirth;
		console.log(age);
	}
	static greeting() {
		console.log('Hi');
	}
}

const john6 = new Person6('John', 1990, 'teacher');

Person6.greeting();


// ES5
var Person5 = function (name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
}

Person5.prototype.calculateAge = function () {
	var age = new Date().getFullYear() - this.yearOfBirth;
	console.log(age);
}

var Athlete5 = function (name, yearOfBirth, job, olympicGames, medals) {
	Person5.call(this, name, yearOfBirth, job);
	this.olympicGames = olympicGames;
	this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function() {
	this.medals++;
	console.log(this.medals);
}

var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);

johnAthlete5.calculateAge();
johnAthlete5.wonMedal();
*/
// ES6
/*
class Person6 {
	constructor (name, yearOfBirth, job){
		this.name = name;
		this.yearOfBirth = yearOfBirth;
		this.job = job;
	}
	calculateAge() {
		var age = new Date().getFullYear() - this.yearOfBirth;
		console.log(age);
	}
}

class Athlete6 extends Person6 {
	constructor (name, yearOfBirth, job, olympicGames, medals) {
		super(name, yearOfBirth, job);
		this.olympicGames = olympicGames;
		this.medals = medals;
		
	}
	wonMedal() {
		this.medals++;
		console.log(this.medals);
	}
}



//Athlete6.calculateAge();
//Athlete6.wonMedal();


/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

class ParkStreet {
	constructor(name, yearBuilt){
		this.name = name;
		this.yearBuilt = yearBuilt;
	}
}

class Park extends ParkStreet {

	constructor(name, yearBuilt, trees, size){
		super(name, yearBuilt);
		this.trees = trees;
		this.size = size;		
	}

	treeDensity(){
		const density = this.trees / this.size;
		console.log(`${this.name} has a tree density of ${density} trees per acre.`);
	}
	
}

class Street extends ParkStreet {

	constructor(name, yearBuilt, length, size = 3){
		super(name, yearBuilt);
		this.length = length;
		this.size = size;		
	}

	classifyStreet () {
		const classification = new Map();
		classification.set(1, 'tiny');
		classification.set(2, 'small');
		classification.set(3, 'normal');
		classification.set(4, 'big');
		classification.set(5, 'huge');
		console.log(`${this.name}, built in ${this.yearBuilt} is a ${classification.get(this.size)} street.`);
	}
	
}

const allParks = [
	new Park('River Park', 1985, 900, 7),
	new Park('Forest Park', 1963, 600, 15),
	new Park('Hillside Park', 1945, 1200, 8)
];

const allStreets = [
	new Street('North Street', 1990, 8, 4),
	new Street('West Street', 1960, 4, 2),
	new Street('Green Street', 1972, 12, 2),
	new Street('South Street', 1976, 10)
];

function calc(arr) {

	const sum = arr.reduce((prev, cur, index) => prev + cur, 0);

	return [sum, sum / arr.length];

}

function reportPark(p) {

	console.log('------Park Report------');

	// Density
	p.forEach(curr => curr.treeDensity());


	// Average Age
	const ages = p.map(el => new Date().getFullYear() - el.yearBuilt)
	const [totalAge, avgAge] = calc(ages);
	console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);

	
	//Which park has more trees
	const i = p.map(el => el.trees).findIndex(el => el >= 1000);
	console.log(`${p[i].name} has more than 1000 trees.`);

}

function reportStreets(s) {

	console.log('------Streets Report------');

	// Total and average length of towns street
	const [totalLength, avgLength] = calc(s.map(el => el.length));
	console.log(`Our ${s.length} have a total length of ${totalLength} miles with an average of ${avgLength} miles.`);

	// Classify Streets
	s.forEach(el => el.classifyStreet());

}

reportPark(allParks);
reportStreets(allStreets);




