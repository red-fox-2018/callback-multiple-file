const fs = require('fs');
var sleep = require('sleep');

function dataJson (file,cb) {
	// body... 
	//sleep.sleep(1)
	fs.readFile(file,'utf-8',(err,dataFile)=> {
		if (err) {
			console.log(err)
		}
		dataFile = JSON.parse(dataFile)
		cb(dataFile)
	})
}
function match_data(parent_file, children_file) {
  // your code here...
    dataJson(parent_file,function(parents){
  	dataJson(children_file, function(childrens){
  		for(var i=0;i<parents.length;i++){
  			parents[i].childrens = []
  			for(var j=0;j<childrens.length;j++){
  				if (childrens[j].family === parents[i].last_name) {
  					parents[i].childrens.push(childrens[j].full_name)
  				}
  			}
  		}
  		console.log(parents)
  	})
  })
    //return console.log(fileParents)
}
match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses !");
console.log('./parents.json', './childrens.json')
