

app.service('offerService',function($http){

    this.fetchOffer = function(offerId){
        var api_url = "http://10.225.30.178:8080/offers/metadata/"+offerId;
        var promise = $http({method : "GET", url:api_url}).then(function mySuccess(response) {
            console.log(response)
        	return response.data;
        }, function myError(response) {
        });
        return promise;
    }
});