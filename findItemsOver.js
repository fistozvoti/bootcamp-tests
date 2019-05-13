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