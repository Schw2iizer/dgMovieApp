var dgMovieApp = angular.module('dgMovieApp');

dgMovieApp.controller('mainController',
	function ($scope, mainService) {
    $scope.showThousands = false;
    $scope.showNineties = false;
		$scope.allMovies = true;
    $scope.movies = [];
    $scope.thousands = [];
    $scope.nineties = [];
		$scope.movieDetails = []
		$scope.details = [];

    $scope.getMovies = mainService.getMovies().then(function(res){

      $scope.movies = res.Search;

			for (let i in $scope.movies) {
				if ($scope.movies[i].Year.charAt(0) === '2') {
					$scope.details = mainService.getMovieDetail($scope.movies[i].imdbID).then(function(res) {
						$scope.thousands.push(res);
					})
				} else {
					$scope.details = mainService.getMovieDetail($scope.movies[i].imdbID).then(function(res) {
						$scope.nineties.push(res);
					})
				}
			}

      for (let i in $scope.movies) {
				$scope.details = mainService.getMovieDetail($scope.movies[i].imdbID).then(function(res) {
					$scope.movieDetails.push(res);
				})
      }

    }, function(error){
      console.log("Error occured ", error);
    })

    $scope.showTwoThousandsMovies = function() {
      $scope.movieDetails = $scope.thousands;
      $scope.showThousands = true;
      $scope.showNineties = false;
			$scope.allMovies = false;
    }

    $scope.showNinetiesMovies = function() {
      $scope.movieDetails = $scope.nineties;
      $scope.showNineties = true;
      $scope.showThousands = false;
			$scope.allMovies = false;
    }

    $scope.routeToIMDB = function(id) {
      window.location.href = 'https://www.imdb.com/title/' + id
    }
	});
