const fs = require('fs');
var sleep = require('sleep');

function readFile(path, callback) {
  fs.readFile(path, 'utf-8', (err, data) => {
    callback(JSON.parse(data));
  });
}

function match_data(parent_file, children_file, callback) {
  // your code here...

  // Cara 1
  // fs.readFile(parent_file, 'utf-8', (err, parents) => {
  //   fs.readFile(children_file, 'utf-8', (err, childrens) => {
  //     callback(JSON.parse(parents), JSON.parse(childrens));
  //   });
  // });

  // Cara 2
  readFile(parent_file, parents => {
    readFile(children_file, childrens => {
      callback(parents, childrens);
    });
  });
}

match_data('./parents.json', './childrens.json', (dataParents, dataChildrens) => {
  dataParents.forEach(parent => {
    let childrenNames = [];
    dataChildrens.forEach(children => {
      if (parent.last_name === children.family) {
        childrenNames.push(children.full_name);
      }
    });

    parent.childrens = childrenNames;
  });

  sleep.sleep(5);
  console.log(dataParents);
});

console.log("Notification : Data sedang diproses !");