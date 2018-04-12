const fs = require('fs');
var sleep = require('sleep');

function match_data(parent_file, children_file) {
  // your code here...

  fs.readFile(parent_file, (err, data) => {
    sleep.sleep(5)
    if (err) throw err;
    parentList = JSON.parse(data)
    parentList.forEach(parents=>{
      parents.childrens = []
    })
    fs.readFile(children_file, (err, data) => {
      if (err) throw err;
        childrensList = JSON.parse(data)
        childrensList.forEach(childrens=>{
          parentList.forEach(parents=>{
              if(childrens.family === parents.last_name){
                parents.childrens.push(childrens.full_name)
              }
          })
        })
        console.log(parentList)
      })
  });

}

match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses !");
