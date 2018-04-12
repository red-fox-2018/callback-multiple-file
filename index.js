const fs = require('fs');
var sleep = require('sleep');

function match_data(parent_file, children_file) {

  fs.readFile(parent_file, (err, data) => {
    sleep.sleep(5)
    if (err) {
      console.log(err);
    }else {

      let data_parents = JSON.parse(data)

      for (var i = 0; i < data_parents.length; i++) {
        data_parents[i].childrens = []
      }

      fs.readFile(children_file, (err, data) => {

        if (err) {
          console.log(err);
        }else {

          let dataChildrens = JSON.parse(data)

          for (var i = 0; i < data_parents.length; i++) {
            for (var j = 0; j < dataChildrens.length; j++) {
              if (data_parents[i].last_name == dataChildrens[j].family) {
                data_parents[i].childrens.push(dataChildrens[j].full_name);
              }
            }
          }

        }
        console.log(data_parents);
      })

    }


  })

  // var childrenFile = fs.readFile(children_file, 'utf8', (err, data) => {
  //   if (err) throw err;
  //   return data
  // })

  // for (var i = 0; i < parentFile.length; i++) {
  //   parentFile[i].childrens = [];
  //   for (var j = 0; j < childrenFile.length; j++) {
  //     if (parentFile[i].last_name == childrenFile[j].family) {
  //       parentFile[i].childrens.push(childrenFile[j].full_name);
  //     }
  //   }
  // }

  // console.log(parentFile);
}

match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses !");
