const fs = require('fs');
var sleep = require('sleep');

// function getData(input,cb){
//   fs.readFile(input,'utf-8',function(err,data){
//     if(err) throw err
//     cb(JSON.parse(data))
//   })
 
// }
function match_data(parent_file, children_file, cb){
    // sleep.sleep(5)
 fs.readFile(parent_file,'utf-8', function(err, dataP){
  if (err) throw err;
  objparent = JSON.parse(dataP);
  for(var i=0; i<objparent.length; i++){
    objparent[i]["children"]=[]
  }

  fs.readFile(children_file,'utf-8', function(err, data){
    if (err) throw err;
    obj = JSON.parse(data);
    for(var i=0; i<objparent.length; i++){
      for(var j=0; j<obj.length; j++){
        if(obj[j].family==objparent[i].last_name){
          objparent[i].children.push(obj[j].full_name)
        }
      }
    }
    console.log(objparent)
    cb(objparent)
  })

  return objparent
})

}


match_data('./parents.json', 'childrens.json', function(data) {
  console.log("data telah di proses")
})

console.log("Notification : Data sedang diproses !");

