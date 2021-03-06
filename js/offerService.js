

app.service('offerService',function($http){

    this.fetchOffer = function(offerId){
        var api_url = "http://localhost:8080/offers-automation/fetch-offer/"+offerId;
       
        var promise = $http({method : "GET", url:api_url}).then(function mySuccess(response) {
        	return response.data;
        }, function myError(response) {
        	console.log(response);
        });
        return promise;
    },
    this.fetchJiraDetails = function(ticketId){
    	 var jira_api = "http://localhost:8080/issues/"+ticketId;
    	
    	 var promise = $http.get(jira_api,function(response){
    		 return response.data;
         })
    	 
         return promise;
    }
    this.cloneOffer = function(offerData){
        var api_url = "http://localhost:8080/offers-automation/post-offer";
        var promise = $http.post(api_url,offerData,function(response){
        	
        })
        
        return promise;
    }
});