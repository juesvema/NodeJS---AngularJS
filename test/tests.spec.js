// Fail --------------------
describe("Color grades", function(){
	beforeEach(module('myApp'));

	var gradesT;

	beforeEach(inject(function($filter){
		gradesT = $filter('gradesT');
	}));	
	it("should css check colour", function(){
		var grad = //id;
		expect(gradesT(grad)).toHaveCss({'color': 'yellow'})
	});
});