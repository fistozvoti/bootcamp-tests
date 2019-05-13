describe('totalPhoneBill function' , function(){
    it('should calculate the total bill for the data given in the string' , function(){
        assert.equal(totalPhoneBill('call, call'), 'R5.50');

    });
    it('should calculate the total bill for the data given in the string' , function(){
        assert.equal(totalPhoneBill('sms, sms, sms'), 'R1.95');

    });
    it('should calculate the total bill for the data given in the string' , function(){
        assert.equal(totalPhoneBill('call'), 'R2.75');

    });
    it('should calculate the total bill for the data given in the string' , function(){
        assert.equal(totalPhoneBill('sms'), 'R0.65');

    });

});