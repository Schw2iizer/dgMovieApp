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

    $scope.getMovies = mainService.getMovies().then(function(res){

      $scope.movies = res.Search;
			$scope.showThousands = false;
			$scope.showNineties = false;
			$scope.allMovies = true;

      for (let i in $scope.movies) {
				$scope.details = mainService.getMovieDetail($scope.movies[i].imdbID).then(function(res) {
					$scope.movieDetails.push(res);
					for (let j in $scope.movieDetails) {
						console.log($scope.movieDetails[j])
						if ($scope.movieDetails[j].Year.charAt(0) === '2') {
						  $scope.thousands.push($scope.movieDetails[j]);
							console.log($scope.thousands)
						} else {
						  $scope.nineties.push($scope.movieDetails[j]);
						}
					}

				})
      }
			console.log($scope.movieDetails)

			// for (let i in $scope.movieDetails) {
			// 	console.log($scope.movieDetails[i])
			// 	if ($scope.movieDetails[i].Year.charAt(0) === '2') {
			// 	  $scope.thousands.push($scope.movieDetails[i]);
			// 	} else {
			// 	  $scope.nineties.push($scope.movieDetails[i]);
			// 	}
			// }
    }, function(error){
      console.log("Error occured ", error);
    })

    $scope.showTwoThousandsMovies = function() {
			console.log($scope.thousands)
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
