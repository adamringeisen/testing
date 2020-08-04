'use strict';

const fs = require('fs');

let raw_data = fs.readFileSync('full.json');

let student = JSON.parse(raw_data);

let name = student;


console.log(name);
// console.log(raw_data);


