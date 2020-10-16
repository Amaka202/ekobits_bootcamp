var earth = {
    isRound: true,
    numberFromSun: 3,
    density: 5.51
};

describe("Earth", function(){

    it("is round", function(){
        expect(earth.isRound).toEqual(false);
    });

    it("is the third planet from the sun", function(){
        expect(earth.numberFromSun).toEqual(3);
    });

    it("is the densest of all the planets", function(){
        expect(earth.density).toBeGreaterThan(5.50);
    });

});