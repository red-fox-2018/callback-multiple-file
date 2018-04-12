const fs = require('fs');
var sleep = require('sleep');





function match_data(parent_file, children_file, callback) {
  fs.readFile(parent_file,'utf8', function(err, result){
    var parent_data = JSON.parse(result)
    fs.readFile(children_file,'utf8', function(err, hasil){
      let children_data = JSON.parse(hasil)
      // console.log(children_data);
      for (var i = 0; i < parent_data.length; i++) {
        parent_data[i]["childrens"] = []
        for (var j = 0; j < children_data.length; j++) {
          if (parent_data[i].last_name == children_data[j].family) {
            parent_data[i].childrens.push(children_data[j].full_name)
          }
        }
        console.log(parent_data);
      }
      callback(parent_data)
    })

  })
}

console.log(match_data('./parents.json', './childrens.json', function(parent_data){

}))
console.log("Notification : Data sedang diproses !");
