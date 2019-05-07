var dgMovieApp = angular.module('dgMovieApp')

.component('titleComponent', {
  bindings: {
    title: '@',
  },
  template: `<div class="title">{{$ctrl.title}}</div>`,
})
