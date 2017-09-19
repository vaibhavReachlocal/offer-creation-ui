app.controller('offerCreationController', function ($scope,$rootScope,offerService) {
    $scope.showValue = false;
    $scope.cities = "hi";
    $scope.templateFields=[{
    	"name":"Offer Name®:",
    	"type":"offer",
    	"model":"offerName"
    },{
    	"name":"Retail Price",
    	"type":"offer",
    	"model":""
    },{
    	"name":"Offer Minimum Price (Vendor Minimum Price)(R):",
    	"type":"offer",
    	"model":"vendorMinCost"
    },
    {
    	"name":"Offer Max Price(R):",
    	"type":"offer",
    	"model":"vendorMaxCost"
    },
    {
    	"name":"Lumpsum Flag(R):",
    	"type":"offer",
    	"model":"isLumpSum"
    },
    {
    	"name":"No. of Cycles (R):",
    	"type":"offer",
    	"model":""
    },
    {
    	"name":"Evergreen Eligible (yes/No)(R):",
    	"type":"offer",
    	"model":""
    },
    {
    	"name":"Currency to be used(R):",
    	"type":"offer",
    	"model":"currency"
    },{
    	"name":"Product Family (R):",
    	"type":"productFamily",
    	"model":"productFamilyId"
    },{
    	"name":"Platform/Country on which this offer should be created.(R):",
    	"type":"productFamily",
    	"model":""
    },{
    	"name":"Margin Rate:",
    	"type":"productFamily",
    	"model":""
    },{
    	"name":"Product URI:",
    	"type":"productFamily",
    	"model":""
    },{
    	"name":"What BID's should these new offers be enabled:",
    	"type":"hasMarginPercents",
    	"model":""
    },{
    	"name":"Business Justification:",
    	"type":"productFamily",
    	"model":""
    },{
    	"name":"Priority Flag:",
    	"type":"productFamily",
    	"model":""
    },{
    	"name":"Priority Justification:",
    	"type":"productFamily",
    	"model":""
    },{
    	"name":"Product owner:",
    	"type":"productFamily",
    	"model":"productFamilyId"
    },{
    	"name":"Web Publisher ID to be used for the new offer:",
    	"type":"offer",
    	"model":"idWebPublisher"
    },{
    	"name":"Campaign Type to be used(R):",
    	"type":"offer",
    	"model":"idCampaignType"
    },{
    	"name":"CampaignSubType to be used(R):",
    	"type":"offer",
    	"model":"idCampaignSubType"
    },{
    	"name":"Margin Percentage(yes/no)(R):",
    	"type":"hasMarginPercents",
    	"model":""
    },{
    	"name":"Margin Percentage:",
    	"type":"hasMarginPercents",
    	"model":"markUpPercent"
    }



    ]
    $scope.fetchDetails = function(){

        $scope.showValue = false;
        $scope.submitted = true;

    	if($scope.id) {
            $scope.showLoading = true;
            offerService.fetchOffer($scope.id).then(function (response) {
                $scope.offerDetails = response;
                $scope.showLoading = false;
                $scope.showValue = true;
            });
        }
//    	offerService.fetchJiraDetails($scope.ticketNo).then(function(response){
//    		console.log(response);
//    	});
    	
    }

    $scope.blocked = ["id","idOffer","offerId"];
    $scope.loadTableFields=function(tableName,data){
    	$scope.selectedTable = tableName;
    	var fieldData = [];
    	if(!$scope.isArray(data)){
    		fieldData.push(data);
    		$scope.tabFields = fieldData;
    	} else {
    		$scope.tabFields = data;
    	}
    	
    }
    $scope.isArray = angular.isArray;
    $scope.isBlocked = function(val){
    	console.log(val)
    	return $scope.blocked.indexOf(val)==-1
    }
    $scope.cloneOffer = function(){
    	 offerService.cloneOffer($scope.offerDetails).then(function(response){
    			 
    		});
    }
    $scope.removeRow = function(row,index){
    	row.splice(index, 1);
    	console.log(row,index);
    	
    }
});