describe('regCheck function' , function(){
    it('should check if a registration number is for GP, L, EC, MP registration plates' , function(){
        assert.equal(regCheck('GP'), false);

    });
    it('should check if a registration number is for GP, L, EC, MP registration plates' , function(){
        assert.equal(regCheck('L, EC, MP'), false);

    });

});
