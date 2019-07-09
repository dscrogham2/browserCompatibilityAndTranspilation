/* 
INTRODUCTION TO JAVASCRIPT
Transpilation
At this point, you are familiar with ES6+ browser compatibility issues and how to address them with transpilation.

In this project, you will practice setting up a JavaScript directory with Babel to transpile ES6+ code to ES5.

Before you begin, take note of the chart to the right. The first column displays the percentage of web browsers that support the ES6+ syntax in the second column. At the end of this project, we will populate the third and fourth columns with the equivalent ES5 syntax and the percentage of web browsers that recognize it.

Because this is a short project and knowing the steps to set up Babel is important, we recommend you complete it a couple of times. Also, if you’re stuck and think you may have typed the wrong command, select the reset project button and start from the beginning.

If you get stuck during this project or would like to see an experienced developer work through it, click “Get Help“ to see a project walkthrough video.

Tasks
0/6Complete
Mark the tasks as complete by checking them off
Transpilation with Babel
1.
Use npm to create a package.json file in the root directory.

The resulting file should have the following name and description values:

name — babel-project
description — Transpile code in a Babel project.
Press enter to skip all of the remaining prompts.
*/

/*  main.js
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
  
  static generatePassword() {
    return Math.floor(Math.random()*10000);
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  } 
  
  get certifications() {
    return this._certifications;
  }
  
  addCertification(newCertification) {
    this.certifications.push(newCertification);
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
let nurseDurant = new Nurse('Durant', ['Orthopedics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);

module.exports = HospitalEmployee;
*/

/*
ES6 SYNTAX
ES5 SYNTAX
            



const nurseOlynyk = ...

          
97% Compatibility


            
          
__% Compatibility

            

              

let nurseDurant = ...
            

          
80% Compatibility


            
          
__% Compatibility

            



var myString = `str ${x}`;

          
78% Compatibility


            
          
__% Compatibility

            
class HospitalEmployee {
  constructor(name) {
    ...
  }
  ...
}

          
74% Compatibility


            
          
__% Com
*/

/* 
1.
Use npm to create a package.json file in the root directory.

The resulting file should have the following name and description values:

name — babel-project
description — Transpile code in a Babel project.
Press enter to skip all of the remaining prompts.

2.
Install the Babel command line and Babel preset environment npm packages.

Also, add these packages to the devDependencies property in package.json.

3.
Add a .babelrc file to the project folder.

In .babelrc, preset your local project’s config to "env".

4.
In .babelrc, preset your local project’s config to "env".

5.
In package.json, add a script called "build".

When run, the "build" script should use Babel to transpile JavaScript code inside of the src folder and write it to a folder called lib.

Don’t forget to add a comma after the “test” script.

6.
Transpile, then save your code. Look at the browser to see the changes in the website.

Notice the difference between the percentage of browsers that support ES6 syntax and the transpiled ES5 equivalent.
Use npm run build to transpile the code in src and write it to lib.
*/


/* bash
$ npm init 
name: babel-project
description: Transpile code in a Babel project.
.
.
.
$ npm install babel-cli -D
$ npm install babel-preset-env -D
$ touch .babelrc
$ npm run build
*/

/* .babelrc folder
{
  "presets": ["env"]
}
*/

/* package.json
{
  "name": "babel-project",
  "version": "1.0.0",
  "description": "Transpile code in a Babel project",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
   "build": "babel src -d lib" 
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0"
  }
}

*/