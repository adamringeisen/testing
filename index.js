'use strict';

const fs = require('fs');

let raw_data = fs.readFileSync('full.json');

let student = JSON.parse(raw_data);

let name = student;


for(var i = 0; i < 100; i++) {
  var obj = name[i];
  console.log(obj.Profile)
}



//console.log(name);
// console.log(raw_data);


