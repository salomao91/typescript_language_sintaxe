# typescript_language_sintaxe
Typescript fundamentals features

Look at "basics.ts" file to read the typescript features sumarized.


// SETTING UP TYPESCRIPT COMPILE ENVIRONMENT

// 1. download and install npm

// 2. open terminal and type commands
	// only locally in the project folder
	npm install typescript
	
	// globally
	npm install -g typescript

// 3. compiling without a configuration file
	<br>// npx tsc <file_name>
	<br>npx tsc with-typescript.ts

// 3.1 to create a configuration file (Angular already create it out of the box, this command is not necessary)
	<br>npx tsc --init

// compiling, after configured the configuration file
	<br>npx tsc

// 4. after compiled, the compiler translate typescript code into javascript and so creates a .js file to run it on browser.
// if try to open/run typescript on browser it does not work. Only the translated javascript files.
