const fs = require('fs');
const sleep = require('sleep');

function read(file, callback) {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) throw err;
    else {
      callback(JSON.parse(data));
    }
  });
}

function match_data(parent_file, children_file, callback) {

  read(parent_file, (dataParents) => {
    sleep.sleep(5);
    read(children_file, (dataChildrens) => {
      // for (let i = 0; i < dataParents.length; i++) {
      //   dataParents[i].children = [];
      //   for (let j = 0; j < dataChildrens.length; j++) {
      //     if (dataParents[i].last_name == dataChildrens[j].family) {
      //       dataParents[i].children.push(dataChildrens[j].full_name);
      //     }
      //   }
      // }
      dataParents.forEach(parent => {
        parent.childrens = []
        dataChildrens.forEach(children => {
          if(children.family == parent.last_name){
            parent.childrens.push(children.full_name)
          }
        })
      });
      console.log(dataParents)
      // callback(dataParents);
    });
  });
}

match_data('./parents.json', './childrens.json', (data) => {
  console.log(data);
});
console.log("Notification : Data sedang diproses ! Mohon Tunggu!!!");