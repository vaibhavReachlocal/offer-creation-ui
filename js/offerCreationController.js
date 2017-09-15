app.controller('offerCreationController', function ($scope,offerService) {
    $scope.cities = "hi";
    $scope.offerDetails = {
    		"offer":{
    			"Name":"Name of offer",
    			"Des 1":"Des 1"
    		},
    		"tab1":[{
    			"Col1":"col1",
    			"col2" :"col2"
    		},{
    			"Col1":"col1",
    			"col2" :"col2"
    		}],
    		"tab2":[{
    			"Col1":"col1",
    			"col2" :"col2"
    		},{
    			"Col1":"col1",
    			"col2" :"col2"
    		}]
    
    }
    $scope.fetchDetails = function(){
    offerService.fetchOffer($scope.id).then(function(response){
		$scope.offerDetails = response; 
		
		
		console.log(response);
	});
    }

});