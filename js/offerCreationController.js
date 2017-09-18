app.controller('offerCreationController', function ($scope,$rootScope,offerService) {
    $scope.cities = "hi";
    $scope.offerDetails = {"offer":{"id":2008,"idWebPublisher":65,"idWebPublisherProvisioningFulfillment":0,"idWebPublisherReportingFulfillment":0,"idOfferMediaType":3,"idOfferPricingModelVendor":3,"idOfferPricingModelExchange":3,"idOfferStatus":2,"idOfferType":1,"idDivision":1,"idCampaignType":1,"idCampaignSubType":28,"idAutoEndType":1,"idAllocationType":2,"idBiddingPricingModel":3,"idAdvertisingCategory":5,"idOfferPricingTypeVendor":2,"idOfferPricingTypeExchange":2,"idOfferMaster":2008,"idOfferParent":0,"idWebLocation":0,"idWebPublisherRelationshipLevel":1,"idWebPublisherExternalAccount":0,"idOfferMediaMarkupType":2,"idTaxGroup":1,"idGeoType":0,"offerName":"YouTube Advertising","offerDescription":"YouTube Advertising Offer","vendorMinCost":0.1,"vendorMaxCost":50,"vendorRecommendedCost":1,"vendorPrice":0,"vendorRecommendedPrice":0,"xchangeMinCost":0.1,"xchangeMaxCost":50,"xchangeRecommendedCost":1,"xchangePrice":0,"xchangeRecommendedPrice":0,"xchangeListingPrice":null,"xchangeMinBudget":1000,"xchangeMaxBudget":99999,"xchangeListingBudget":null,"vendorMinBudget":1000,"vendorMaxBudget":99999,"displayStartDate":1504636200000,"displayEndDate":4102338600000,"runStartDate":1504636200000,"runEndDate":4102338600000,"leadTime":3,"campaignDuration":30,"cycleDuration":30,"adGuidelines":"","maxKeywords":0,"maxAds":12,"maxCategories":0,"maxRenewalCycles":99,"allowsFrequencyCapping":false,"allowsRenewal":true,"allowsPausing":true,"allowsEnding":true,"allowsBidUpdate":true,"allowsBudgetUpdate":true,"allowsGeoUpdate":true,"allowsAdUpdate":true,"allowsCategoryUpdate":false,"allowsKeywordUpdate":false,"allowsAdGroups":false,"allowsSiteLinks":0,"allowsBudgetTool":false,"allowsTrackingEmail":true,"allowsTrackingPhone":true,"allowsCampaignBuy":true,"useKeywords":false,"useArbitragePricing":false,"hasKeywordreporting":false,"hasImpressions":true,"hasRemarketing":true,"useEntryVisits":false,"useRawCost":true,"useRlClicks":false,"isLumpSum":false,"isFeatured":false,"canModifyOffer":false,"showPrice":true,"showBudget":true,"isBudgetLocked":false,"automation":false,"currency":"AUD","proposalTemplateId":0,"idBusinessUserCreatedBy":1,"idBusinessUserLastModifiedBy":1,"offerCreated":1504690078000,"offerModified":1504690078000,"offerStartDate":1504690078000,"offerPauseDate":null,"offerEndDate":null,"segmentCookieDuration":2592000,"adTags":"allowed","campaignCreationType":"dynamic","requiresPayment":true,"supportsProxyPageRedirection":false,"maxCampaignBudget":100000,"allowsMediaPlan":null},"hasCampaignType":null,"offerMetadatas":[],"offerOptions":[{"id":118378,"idOffer":2008,"ooTableName":"BusinessCategory","ooTableValue":"0"},{"id":118379,"idOffer":2008,"ooTableName":"CountryCode","ooTableValue":"USA"},{"id":118380,"idOffer":2008,"ooTableName":"StateAbbreviations","ooTableValue":"0"},{"id":118381,"idOffer":2008,"ooTableName":"TargetType","ooTableValue":"1"},{"id":118382,"idOffer":2008,"ooTableName":"TargetType","ooTableValue":"3"},{"id":118383,"idOffer":2008,"ooTableName":"TargetType","ooTableValue":"4"},{"id":118384,"idOffer":2008,"ooTableName":"TargetType","ooTableValue":"6"}],"offerBundle":[],"productFamilyOffer":[{"offerId":2008,"isAddon":null,"productAbbreviation":null,"productFamilyName":null,"displayOrder":0,"productFamilyId":2}],"hasMarginPercents":[],"hasDefaultOffers":[],"offerProductURI":[],"offerHasCreativeTypes":[{"id":51121,"idOffer":2008,"idCreativeType":3,"idCreativeFields":10,"idMediaAttributes":1,"required":true,"mediaAttributeValue":200},{"id":51122,"idOffer":2008,"idCreativeType":3,"idCreativeFields":10,"idMediaAttributes":5,"required":true,"mediaAttributeValue":1},{"id":51123,"idOffer":2008,"idCreativeType":4,"idCreativeFields":10,"idMediaAttributes":1,"required":true,"mediaAttributeValue":200},{"id":51124,"idOffer":2008,"idCreativeType":4,"idCreativeFields":10,"idMediaAttributes":5,"required":true,"mediaAttributeValue":1},{"id":51125,"idOffer":2008,"idCreativeType":5,"idCreativeFields":10,"idMediaAttributes":1,"required":true,"mediaAttributeValue":200},{"id":51126,"idOffer":2008,"idCreativeType":5,"idCreativeFields":10,"idMediaAttributes":5,"required":true,"mediaAttributeValue":1},{"id":51127,"idOffer":2008,"idCreativeType":9,"idCreativeFields":10,"idMediaAttributes":1,"required":true,"mediaAttributeValue":200},{"id":51128,"idOffer":2008,"idCreativeType":9,"idCreativeFields":10,"idMediaAttributes":5,"required":true,"mediaAttributeValue":1},{"id":51129,"idOffer":2008,"idCreativeType":10,"idCreativeFields":10,"idMediaAttributes":1,"required":true,"mediaAttributeValue":200},{"id":51130,"idOffer":2008,"idCreativeType":10,"idCreativeFields":10,"idMediaAttributes":5,"required":true,"mediaAttributeValue":1},{"id":51131,"idOffer":2008,"idCreativeType":11,"idCreativeFields":10,"idMediaAttributes":1,"required":true,"mediaAttributeValue":200},{"id":51132,"idOffer":2008,"idCreativeType":11,"idCreativeFields":10,"idMediaAttributes":5,"required":true,"mediaAttributeValue":1},{"id":51133,"idOffer":2008,"idCreativeType":12,"idCreativeFields":10,"idMediaAttributes":1,"required":true,"mediaAttributeValue":200},{"id":51134,"idOffer":2008,"idCreativeType":12,"idCreativeFields":10,"idMediaAttributes":5,"required":true,"mediaAttributeValue":1},{"id":51135,"idOffer":2008,"idCreativeType":13,"idCreativeFields":10,"idMediaAttributes":1,"required":true,"mediaAttributeValue":200},{"id":51136,"idOffer":2008,"idCreativeType":13,"idCreativeFields":10,"idMediaAttributes":5,"required":true,"mediaAttributeValue":1},{"id":51137,"idOffer":2008,"idCreativeType":23,"idCreativeFields":10,"idMediaAttributes":1,"required":true,"mediaAttributeValue":200},{"id":51138,"idOffer":2008,"idCreativeType":23,"idCreativeFields":10,"idMediaAttributes":5,"required":true,"mediaAttributeValue":1},{"id":51139,"idOffer":2008,"idCreativeType":32,"idCreativeFields":10,"idMediaAttributes":1,"required":true,"mediaAttributeValue":200},{"id":51140,"idOffer":2008,"idCreativeType":32,"idCreativeFields":10,"idMediaAttributes":5,"required":true,"mediaAttributeValue":1},{"id":51141,"idOffer":2008,"idCreativeType":41,"idCreativeFields":10,"idMediaAttributes":1,"required":true,"mediaAttributeValue":200},{"id":51142,"idOffer":2008,"idCreativeType":41,"idCreativeFields":10,"idMediaAttributes":5,"required":true,"mediaAttributeValue":1},{"id":51143,"idOffer":2008,"idCreativeType":42,"idCreativeFields":10,"idMediaAttributes":1,"required":true,"mediaAttributeValue":200},{"id":51144,"idOffer":2008,"idCreativeType":42,"idCreativeFields":10,"idMediaAttributes":5,"required":true,"mediaAttributeValue":1},{"id":51145,"idOffer":2008,"idCreativeType":47,"idCreativeFields":10,"idMediaAttributes":1,"required":true,"mediaAttributeValue":200},{"id":51146,"idOffer":2008,"idCreativeType":47,"idCreativeFields":10,"idMediaAttributes":5,"required":true,"mediaAttributeValue":1},{"id":51147,"idOffer":2008,"idCreativeType":49,"idCreativeFields":10,"idMediaAttributes":1,"required":true,"mediaAttributeValue":200},{"id":51148,"idOffer":2008,"idCreativeType":49,"idCreativeFields":10,"idMediaAttributes":5,"required":true,"mediaAttributeValue":1},{"id":51149,"idOffer":2008,"idCreativeType":52,"idCreativeFields":10,"idMediaAttributes":1,"required":true,"mediaAttributeValue":200},{"id":51150,"idOffer":2008,"idCreativeType":52,"idCreativeFields":10,"idMediaAttributes":5,"required":true,"mediaAttributeValue":1},{"id":51151,"idOffer":2008,"idCreativeType":54,"idCreativeFields":10,"idMediaAttributes":5,"required":true,"mediaAttributeValue":1},{"id":51152,"idOffer":2008,"idCreativeType":54,"idCreativeFields":10,"idMediaAttributes":1,"required":true,"mediaAttributeValue":200},{"id":51153,"idOffer":2008,"idCreativeType":123,"idCreativeFields":10,"idMediaAttributes":6,"required":true,"mediaAttributeValue":7200},{"id":51154,"idOffer":2008,"idCreativeType":123,"idCreativeFields":10,"idMediaAttributes":1,"required":true,"mediaAttributeValue":1048576},{"id":51155,"idOffer":2008,"idCreativeType":123,"idCreativeFields":10,"idMediaAttributes":5,"required":true,"mediaAttributeValue":32}],"offerHasEnhancedCreativeGroups":[],"campaignFormTemplates":[],"campaignValidationRules":[]}
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
    	offerService.fetchOffer($scope.id).then(function(response){
    		$scope.offerDetails = response; 
    	});
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
