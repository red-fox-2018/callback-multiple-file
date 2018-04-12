const fs = require('fs');
var sleep = require('sleep');


function getData(filename,cb){
    fs.readFile(filename,"utf-8",function read(err, data) {
      if (err) {
          throw err;
      }
      cb(JSON.parse(data));            
    });
}

function match_data(parent_file, children_file) {
    
  getData(parent_file,function(parent) {
    getData(children_file,function(children) {
      for(let i=0;i<parent.length;i++){
        parent[i]["childrens"] = []
        for(let k=0;k<children.length;k++){
          if(parent[i].last_name==children[k].family){
              parent[i]["childrens"].push(children[k])
          }
        }
      }
      console.log(parent)
    });
  })
}

match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses !");

