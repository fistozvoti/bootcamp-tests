function findItemsOver20(listOfObjects){
  //console.log(listOfObjects)
    var greater = [];
    for(var i=0; i<listOfObjects.length; i++){
    if(listOfObjects[i].qty > 20){
    greater.push(listOfObjects[i])
    }
    }
  //console.log(greater)
    return greater;
    }


function findItemsOver(list, threshold){
    //console.log(list)
    //console.log(threshold)
      var greaterThan = [];
      for(var i=0; i<list.length; i++){
      if(list[i].qty > threshold){
      greaterThan.push(list[i])
        
      }
      }
      console.log(greaterThan)
      return greaterThan;
}