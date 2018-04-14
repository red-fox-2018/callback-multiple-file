/*jshint esversion:6*/

const fs = require('fs');
var sleep = require('sleep');

function match_data(parent_file, children_file) {
  fs.readFile(parent_file, (err, data) => {
    if (err) throw err;

    sleep.sleep(5);

    let parents_data = JSON.parse(data);
      for (var i = 0; i < parents_data.length; i++) {
        parents_data[i].childrens = [];
      }


    fs.readFile(children_file, (err, data) => {

      let data_childrens = JSON.parse(data);

      for (var i = 0; i < parents_data.length; i++) {
          for (var j = 0; j < data_childrens.length; j++) {
            if (parents_data[i].last_name == data_childrens[j].family) {
              parents_data[i].childrens.push(data_childrens[j].full_name);

            }
          }
      }
      console.log(parents_data);
    });
  });
}

match_data('./parents.json', './childrens.json');
