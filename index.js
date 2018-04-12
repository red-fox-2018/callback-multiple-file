const fs = require('fs');
var sleep = require('sleep');

function get_data(file_name,cb) {
	fs.readFile(file_name,'utf-8',function(err,data){
    if (err) throw err;
    var parser=JSON.parse(data)
    cb(parser);
  })
}


function match_data(parent_file, children_file) {
  // your code here...
  get_data(parent_file,function(dataParents) {
    get_data(children_file,function(dataChildrens) {
      for(let j=0;j<dataParents.length;j++){
          dataParents[j].childrens=[];
        for(let i=0;i<dataChildrens.length;i++) {
          if(dataParents[j].last_name==dataChildrens[i].family) {
            dataParents[j].childrens.push(dataChildrens[i].full_name)
          } 
        }
      }
      sleep.sleep(5); 
      console.log(dataParents)
    })
  })

}

//   var dataParents= fs.readFile(parent_file, 'utf-8', function(errP, dataP){
//   	if (errP) throw errP;
//   	var parseParents=JSON.parse(dataP);

//   	fs.readFile(children_file, 'utf-8', function(errC, dataC){
// 	  	if (errC) throw errC;
// 	  	parseChilderens=JSON.parse(dataC);
//   		cb(parseChilderens,parseParents)
//  	  })
//   })
// }
  // var dataChildrens= fs.readFile(children_file, 'utf-8', function(errP, dataC){
  // 	if (errP) throw errP;
  // 	var parseChilderens=JSON.parse(dataC);
  // // 	var parseChilderens = ''

  // // 	fs.readFile(children_file, 'utf-8', function(errC, dataC){
	 // //  	if (errC) throw errC;
	 // //  	parseChilderens=JSON.parse(dataC);
  // // 		cb(parseChilderens,parseParents)
 	// // })
  // // 	cb(parseChilderens,parseParents)
  // cb(parseChilderens);
  // })


  

  //console.log(parseParents)


// match_data('./parents.json', './childrens.json', function(dataC,dataP) {
// 	console.log(dataC);
// 	console.log(dataP)
// })
//console.log("Notification : Data sedang diproses !");

match_data('./parents.json', './childrens.json')