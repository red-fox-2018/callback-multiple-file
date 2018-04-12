const fs = require('fs');
// var sleep = require('sleep');

function match_data(parent_file, children_file, callback) {
  // your code here...
  fs.readFile(parent_file, 'utf-8', (err, parents) => {
    fs.readFile(children_file, 'utf-8', (err, childrens) => {
      callback(JSON.parse(parents), JSON.parse(childrens));
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

  console.log(dataParents)
});

console.log("Notification : Data sedang diproses !");