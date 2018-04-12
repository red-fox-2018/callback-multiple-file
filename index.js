const fs = require('fs');
var sleep = require('sleep');

function getData(file, callback) {
  fs.readFile(file, 'utf8', function (err, data) {
    if (err) throw err;
    let arr = JSON.parse(data);
    callback(arr)
  });
}
function match_data(parent_file, children_file) {
  getData(parent_file, function (parent_data) {
    getData(children_file, function (children_data) {
      for (let p of parent_data) {
        p.childrens = []
        for (let c of children_data) {
          if (p.last_name === c.family) {
            p.childrens.push(c.full_name)
          }
        }
        console.log(p)
      }
    })
  })
}

match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses !");
