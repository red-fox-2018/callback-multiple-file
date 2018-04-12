const fs = require('fs');
var sleep = require('sleep');
var parents = require('./parents.json')
var children = require('./childrens.json')


function match_data(parent_file, children_file) {
  // your code here...
  fs.readFile(parent_file, 'utf-8', (err, dataParent) => {
    sleep.sleep(5)
    var parsedParentsFile = JSON.parse(dataParent)
    fs.readFile(children_file, 'utf-8', (err, dataChildren) => {
      sleep.sleep(5)
      var parsedChildrenFile = JSON.parse(dataChildren)
      for(let i in parsedParentsFile) {
        parsedParentsFile[i]['children'] = []
        for(let j in parsedChildrenFile) {
          if(parsedChildrenFile[j].family === parsedParentsFile[i].last_name) {
            parsedParentsFile[i].children.push(parsedChildrenFile[j].full_name)
          }
        }
      }
      console.log(parsedParentsFile);
    })
  })

}

function readFile(fileName, callback) {
  fs.readFile(fileName, 'utf-8', (err, newFile) => {
    var parsedFile = JSON.parse(newFIle)
    callback(parsedFile)
  })
}

match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses !");
