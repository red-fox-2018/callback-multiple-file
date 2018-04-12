const fs = require('fs');
var sleep = require('sleep');
function readFile(file, cb) {

  fs.readFile(file, 'utf-8',(err,data)=>{

    if(err) {

      console.log(err);
    } else {

      let dataJSON = JSON.parse(data)
      cb(dataJSON)
    }
  })
}

function match_data(parent_file, children_file) {
  // your code here...
  readFile(parent_file,(dataParent)=>{
    sleep.sleep(5)
    readFile(children_file,(dataChildren)=>{
      for (let i = 0; i < dataParent.length; i++) {
        
        dataParent[i].children = []

        for (let j = 0; j < dataChildren.length; j++) {
          
          if(dataParent[i].last_name == dataChildren[j].family) {

            dataParent[i].children.push(dataChildren[j].full_name)
          }
          
        }
      }
      
    console.log(dataParent);
    })
  })
}

match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses !");
