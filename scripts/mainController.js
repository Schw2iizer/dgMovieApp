var dgMovieApp = angular.module('dgMovieApp');

dgMovieApp.controller('mainController',
	function ($scope, mainService) {
    $scope.showThousands = false;
    $scope.showNineties = false;
		$scope.allMovies = true;
    $scope.movies = [];
    $scope.thousands = [];
    $scope.nineties = [];

    $scope.getMovies = mainService.getMovies().then(function(res){

      $scope.movies = res.Search;
			$scope.showThousands = false;
			$scope.showNineties = false;
			$scope.allMovies = true;

      for (let i in $scope.movies) {
        if ($scope.movies[i].Year.charAt(0) === '2') {
          $scope.thousands.push($scope.movies[i]);
        } else {
          $scope.nineties.push($scope.movies[i]);
        }
      }
    }, function(error){
      console.log("Error occured ", error);
    })

    $scope.showTwoThousandsMovies = function() {
      $scope.movies = $scope.thousands;
      $scope.showThousands = true;
      $scope.showNineties = false;
			$scope.allMovies = false;
    }

    $scope.showNinetiesMovies = function() {
      $scope.movies = $scope.nineties;
      $scope.showNineties = true;
      $scope.showThousands = false;
			$scope.allMovies = false;
    }

    $scope.routeToIMDB = function(id) {
      window.location.href = 'https://www.imdb.com/title/' + id
    }
	});
