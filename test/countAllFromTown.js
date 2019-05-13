function countAllFromTown(reg, location){
    var num = [];
    var list = reg.split(",");
    for(var i=0; i<list.length; i++){
      var regNum = list[i].trim()
    if(regNum.startsWith(location)){
    num.push(regNum)
      
    }
    }
   console.log(num.length)
    return num.length;
}