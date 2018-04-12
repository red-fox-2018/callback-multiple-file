const fs = require('fs');
var sleep = require('sleep');



function match_data(parent_file, children_file,cbParentFile) {
  // your code here...
    fs.readFile(parent_file,'utf8', (err,parentList) => {
      sleep.sleep(5);
      var parent_datas = JSON.parse(parentList)
      fs.readFile(children_file,'utf8',(err,children_datas)=>{

      let childrensData = JSON.parse(children_datas);
      for(let i=0;i<parent_datas.length;i++){
        parent_datas[i].childrens = [];
        for(let j=0;j<childrensData.length;j++){
          if(parent_datas[i].last_name == childrensData[j].family){
            parent_datas[i].childrens.push(childrensData[j].full_name)
          }
        }
      }
      parentList = parent_datas;
      cbParentFile(parentList);
    })



  })
}

match_data('./parents.json', './childrens.json',function(parentList){
  console.log(parentList);
})
console.log("Notification : Data sedang diproses !");
