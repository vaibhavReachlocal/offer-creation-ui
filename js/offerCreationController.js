app.controller('offerCreationController', function ($scope,offerService) {
    $scope.cities = "hi";
    $scope.fetchDetails = function(){
    offerService.fetchOffer($scope.id).then(function(response){
		$scope.offerDetails = response; 
		console.log(response);
	});
    }

});