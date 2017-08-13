// Defines the application and is the container for the application controllers
/* controller that get the JSON from the request to nodeJS 
and set a scope with the records named jsonList to be called in the html */
var myApp = angular.module('myApp', [])
.controller('StudentCtrl', function($scope, $http) {
// get the Json file saved in the jsonList url and return the records in it
$http.get('/jsonList').then(function (data){
    $scope.jsonList = [data.data];
})

// Function to take the average of the grades of each student
$scope.total = function(values) {
			let sum = values.reduce((previous, current) => current += previous);
			let average = sum / values.length;
		return average;
	  };
})