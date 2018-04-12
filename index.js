const fs = require('fs');
var sleep = require('sleep');

function match_data(parent_file, children_file) {
  // your code here...

  fs.readFile(parent_file, (err, data) => {
    if (err) throw err;

    sleep.sleep(5)
    
    let data_parents = JSON.parse(data)

      for (var i = 0; i < data_parents.length; i++) {

        data_parents[i].childrens = []

      }


    fs.readFile(children_file, (err, data) => {

      let data_childrens = JSON.parse(data)

      for (var i = 0; i < data_parents.length; i++) {

          for (var j = 0; j < data_childrens.length; j++) {

            if (data_parents[i].last_name == data_childrens[j].family) {


              data_parents[i].childrens.push(data_childrens[j].full_name)

            }

          }

      }

      console.log(data_parents);

    })

  });

}

match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses !");
