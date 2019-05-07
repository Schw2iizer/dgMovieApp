var dgMovieApp = angular.module('dgMovieApp')

.component('ratingComponent', {
  bindings: {
    rating: '@',
  },
  template: `<div class="rating">{{$ctrl.rating}}</div>`,
})
