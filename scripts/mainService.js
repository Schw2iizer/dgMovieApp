var dgMovieApp = angular.module('dgMovieApp');

dgMovieApp.factory('mainService',
	function ($http, $q) {

    return {
     getMovies: function() {
       let deferred = $q.defer();
       $http.get("http://www.omdbapi.com/?s=Batman&i=tt3896198&apikey=ed150b2a").then(function(res){
         deferred.resolve(res.data);
       })
       return deferred.promise;
     },

		 getMovieDetail: function(id) {
			 let deferred = $q.defer();
			 $http.get('http://www.omdbapi.com/?i=' + id +'&apikey=ed150b2a').then(function(res){
				 deferred.resolve(res.data);
			 })
			 return deferred.promise;
		 }
   }

	});
