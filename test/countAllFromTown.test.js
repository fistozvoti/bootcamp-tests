describe('countAllFromTown' , function(){
    it('should return number registration numbers in the string that is for that town' , function(){
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'),3);

    });
    it('should return number registration numbers in the string that is for that town' , function(){
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CJ'),1);

    });

});