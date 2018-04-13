const fs = require('fs');
var sleep = require('sleep');
var parents = require('./parents.json')
var children = require('./childrens.json')


function match_data(parent_file, children_file) {
  // your code here...
  readFile(parent_file, (dataParent) => {
    sleep.sleep(5)
    readFile(children_file, (dataChildren) => {
      sleep.sleep(5)
      for(let i in dataParent) {
        dataParent[i]['children'] = []
        for(let j in dataChildren) {
          if(dataChildren[j].family === dataParent[i].last_name) {
            dataParent[i].children.push(dataChildren[j].full_name)
          }
        }
      }
      console.log(dataParent);
    })
  })

}

function readFile(fileName, callback) {
  fs.readFile(fileName, 'utf-8', (err, newFile) => {
    var parsedFile = JSON.parse(newFile)
    callback(parsedFile)
  })
}

match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses !");
