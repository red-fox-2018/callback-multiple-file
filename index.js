const fs = require('fs');
var sleep = require('sleep');


function getData(fileName, callback){
  fs.readFile(fileName,'utf8',function(err,data){
    var obj_data = JSON.parse(data)     
    callback(obj_data)
  })
}

function match_data(parent_file, children_file, callback) {
    getData('parents.json', function(parents) {
      for(let obj of parents){
        obj.childrens = []
      }
      getData('childrens.json', function(childrens){
        for(var obj1 of parents){
          for(var obj2 of childrens){
            if(obj1.last_name == obj2.family){
              obj1.childrens.push(obj2.full_name)
            }
          }
        }
        callback(parents)
      })
    })
}

// getData(function(parents, childrens){
  match_data('./parents.json', './childrens.json', function(parents,childrens){
    sleep.sleep(5)
    console.log(parents)
  })
// })
console.log("Notification : Data sedang diproses !");

