

const fs = require('fs');

let raw_data = fs.readFileSync('full.json');


let items = JSON.parse(raw_data);




var my_json = JSON.stringify(items)

for (i = 0; i < 100; i++){
  let val = my_json[i].includes("MPSTN");
    if(val = true){
      console.log(my_json[i]);
    }
}