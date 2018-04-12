const fs = require('fs');
var sleep = require('sleep');

function getData(fileName, cb) {
  sleep.sleep(5)
  fs.readFile(fileName, 'utf-8', (err, data_str) => {
    if (err) {
      console.log(err);
    }
    data_obj = JSON.parse(data_str)
    cb(data_obj)
  })
}

function match_data(parent_file, children_file) {

  getData(parent_file, function(parents) {
    getData(children_file, function(childrens) {
      for (var i = 0; i < parents.length; i++) {
        parents[i].childrens = []
        for (var j = 0; j < childrens.length; j++) {
          if (childrens[j].family === parents[i].last_name) {
            parents[i].childrens.push(childrens[j].full_name)
          }
        }
      }
      console.log(parents);
    })
  })
}

match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses !");
