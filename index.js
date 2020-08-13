//console.log('start')



const fs = require('fs');

let raw_data = fs.readFileSync('full.json');


let items = JSON.parse(raw_data);


let input = "jav"
let returnVal = []

var my_json = JSON.stringify(items)

for (i = 0; i < items.length; i++){
  let val = JSON.stringify(items[i].fullName.toLowerCase());
  let search = val.includes(input.toLowerCase());
//console.log(search);
    if(search == true){
        returnVal.push({'itemNumber': items[i].itemNumber, 'description': items[i].fullName,'details': items[i]});
      
   };
}
console.log(returnVal);