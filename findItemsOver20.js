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