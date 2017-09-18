

app.service('offerService',function($http){

    this.fetchOffer = function(offerId){
        var api_url = "http://10.225.30.102:8080/offers-automation/fetch-offerdata/"+offerId;
        var promise = $http({method : "GET", url:api_url}).then(function mySuccess(response) {
        	return response.data;
        }, function myError(response) {
        	console.log(response);
        });
        return promise;
    },
    this.cloneOffer = function(offerData){
        var api_url = "http://10.225.30.102:8080/offers-automation/test";
        console.log(offerData);
        var promise = $http.post(api_url,offerData,function(response){
        	
        })
        
        return promise;
    }
});