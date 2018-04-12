const fs = require('fs');
var sleep = require('sleep');

function getData(fileName,callback) {
  fs.readFile(fileName, function (err, data) {
    if (err) throw err
    let obj_data = JSON.parse(data)
    callback(obj_data)
  })
}

function match_data(parent_file,children_file) {
  getData(parent_file, function(parent_data) {
    getData(children_file, function (childrens) {
      for (let i = 0; i < parent_data.length; i++) {
        parent_data[i].childrens = []
        for (let i_child = 0; i_child < childrens.length; i_child++) {
          if (childrens[i_child].family == parent_data[i].last_name) {
            parent_data[i].childrens.push(childrens[i_child].full_name)

          }
        }
      }
      sleep.sleep(5)
      console.log(parent_data)
    })
  })
}

match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses !");
