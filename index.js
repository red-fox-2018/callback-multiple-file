const fs = require('fs');
var sleep = require('sleep');

function _match(parent, children) {
  let result = [];
  for (let c of children) {
    if (c.family == parent.last_name) {
      result.push(c.full_name);
    }
  }
  let objResult = {
    id: parent.id,
    first_name: parent.last_name,
    last_name: parent.first_name,
    age: parent.age,
    childrens: result,
  }
  return objResult;
}

function match_data(parent_file, children_file, callback) {
  
  sleep.sleep(1);
  fs.readFile(parent_file, 'utf8', function (err, resultParentFile) {
    if (err) throw err;
    let parent = JSON.parse(resultParentFile);
    
    sleep.sleep(1);
    fs.readFile(children_file, 'utf8', function (err, resultChildrenFIle) {
      if (err) throw err;
      let children = JSON.parse(resultChildrenFIle);
      let finalResult = [];
      for (let p of parent) {
        finalResult.push(_match(p, children));
      }
      callback(finalResult);
    });
  });
}

match_data('./parents.json', './childrens.json', function(finalResult) {
  console.log(finalResult);
});
console.log("Notification : Data sedang diproses !");