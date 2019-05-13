function totalPhoneBill(phoneBill){
    //console.log(phoneBill)
      var totalBill = 0;
      var phone = phoneBill.split(', ')
      
      for(var i=0; i<phone.length; i++){
      var bill = phone[i];
        if(bill === 'call'){
        totalBill = totalBill + 2.75;
        }
    else {
      totalBill = totalBill + 0.65;
     } 
       }
       //var results = totalBill.length + totalBill;
      return 'R' + totalBill.toFixed(2);
}