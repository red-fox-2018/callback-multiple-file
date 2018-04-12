const fs = require('fs');
var sleep = require('sleep');

function getData(fileName, callback) {
  fs.readFile(fileName, 'utf8', (err, data_str) => {
    sleep.sleep(5)
    let data_obj = JSON.parse(data_str)
    callback(data_obj)
  })
}

function match_data(parent_file, children_file) {
  // your code here...

  getData(parent_file, function(parentsFile) {

    getData(children_file, function(childrensFile) {
      parentsFile.forEach((objParent)=>{
        let filterChildrens = childrensFile.filter(objChildren => objChildren.family.indexOf(objParent.last_name) !== -1)
        let arrChildren = filterChildrens.map(obj => Object.entries(obj)[1][1])
        objParent.childrens = arrChildren
      })

      console.log(parentsFile);
    })

  })
}

match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses !");
