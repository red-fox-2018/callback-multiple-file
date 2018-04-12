const fs = require('fs');
var sleep = require('sleep')
function getData(filename,cb) {
fs.readFile(filename,'utf-8',(err,data_str))
}
function match_data(parent_file, children_file) {
  // your code here...
  fs.readFile(parent_file,'utf-8',(err,dataParent) =>{
    if (err) {
      console.log(err);
    }
    sleep.sleep(1)
    dataParent = JSON.parse(dataParent)
    for(let i=0;i<dataParent.length;i++){
      dataParent[i]['childrens'] = []
    }
    //console.log(dataParent);
    fs.readFile(children_file,'utf-8',(err,dataChildren) =>{
      if (err) {
        console.log(err);
      }
      sleep.sleep(1)
      dataChildren = JSON.parse(dataChildren)
      console.log(dataChildren);
      for(var i=0;i<dataParent.length;i++){
        for(var j=0;j<dataChildren.length;j++)
      }
    })
  })
}

match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses !");
