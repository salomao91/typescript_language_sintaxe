// SETTING UP COMPILE ENVIRONMENT

// 1. download and install npm

// 2. open terminal and type commands
	// only locally in the project folder
	//npm install typescript
	
	// globally
	npm install -g typescript

// 3. compiling without a configuration file
	// npx tsc <file_name>
	// npx tsc with-typescript.ts

// compiling, after configured the configuration file
	// npx tsc

// 4. after compiled, the compiler translate typescript code into javascript and so creates a .js file to run it on browser.
// if try to open/run typescript on browser it does not work. Only the translated javascript files.



// LANGUAGE SINTAXE


// PRIMITIVES

let age: number;
age = 12;

let userName = string;
userName = 'Salomao';

let speakFrench: boolean;
isInstructor = true;



// MORE COMPLEX TYPES

let hobbies: string[]
hobbies = ['Sports', 'Cooking'];

let person: {
	name: string;
	age: number;
};

person = {
	name: 'Salomao',
	age: 32
};

let people: {
	name: string;
	age: number;
}[];



// TYPE INFERENCE

// javascript inference this type as string,
// typescript follows the same when we dont explictly type our variable.
let course = "React - The Complete Guide";

//error
course = 12341;



// UNION TYPES

// it can be string or number
let course: string | number = "React - The Complet Guide";

//it is ok
course = 12341;

let userName = string | string[];



// ALIAS

type Person = {
	name: string;
	age: number;
};

let person: Person;


// FUNCTION & TYPES

// return dynamically infered number
function add(a: number, b: number) {
	return a + b;
}

// return explictly declared number
function add(a: number, b: number) : number {
	return a + b;
}

// void return
function printOutput(value: any) {
	console.log(value);
}


// GENERICS

/* The important thing of Generics in Typescript, it's simply helps you write functions in this case, which are type safe yet flixible.
They work with any type, but then once a certain type is used for that function, execution, that type is locked in and known, and it allows us to get the best of both worlds, flexibility and type safety.
*/

// T of type, as T is parameter type the return value will be T as well
function insertAtBeginning<T>(array: T[], value: T) {
	const newArray = [value, ...array];
	return newArray;
}

// example, this parameters are numbers, so demoArray will receive an array of numbers.
const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);	// [-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');

// Typescript compiler shows an error because in this case updatedArray is number type.
// updatedArray[0].split('');



// CLASSES AND TYPESCRIPT

class Student {
	firtName: string;
	lastName: string;
	age: number;
	private couses: string[];
	
	constructor(first: string, last: string, age: number, courses: string[]) {
		this.firtName = first;
		this.lastName = last;
		this.age = age;
		this.courses = courses;
	}
	
	enrol(courseName: string) {
		this.course.push(courseName);
	}
	
	// slice method extracts a section of an array and returns a new array
	listCourses() {
		return this.courses.slice();
	}
}

const student = new Student("Salomao", "Ferreira", 30, ['Angula']);

student.enrol('React');

student.listCourses();


// CLASSES AND TYPESCRIPT - SHORT NOTATION

class Student {
	
	constructor(
		public firtName: string,
		public lastName: string,
		public age: number,
		private courses: string[]
	){ }
}



// INTERFACES

interface Human {
	firstName: string;
	age: number;
	
	greet: () {} = void;
}


// implementation, variable of type Human

let canadian: Human;

max = {
	firstName: 'Salomao',
	age: 30,
	greet() {
		console.log('Bon matin!');
	},
};


// TYPE keyword to crate alias
type Human {
	firstName: string;
	age: number;
	
	greet: () {} = void;
}



// INTERFACES x TYPE keyword

	// . an interface can be implemented by classes and then force the classes to implement its features (properties and methods).
	// . a TYPE keyword just act as object types and DO NOT force other classes to implements its features.


 // EXAMPLE
 class instructor implements Human {
	firstName: string;
	age: number;
	greet() {
		console.log('Hello');
	}
 }
 
 