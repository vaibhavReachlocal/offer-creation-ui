

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
    	 var jira_api = "https://tickets.reachlocal.com/rest/api/2/issue/"+ticketId;
    	 var loginArgs = {
    		        data: {
    		                "username": "vaibhav.shah",
    		                "password": ""
    		        },
    		        headers: {
    		                "Content-Type": "application/json"
    		        } 
    		};
    	 var promise = $http.get(jira_api,loginArgs,function(response){
    		 return response.data;
         })
    	 
         return promise;
    }
    this.cloneOffer = function(offerData){
        var api_url = "http://10.225.30.102:8080/offers-automation/test";
        console.log(offerData);
        var promise = $http.post(api_url,offerData,function(response){
        	
        })
        
        return promise;
    }
});