var dgMovieApp = angular.module('dgMovieApp')

.component('buttonComponent', {
  bindings: {
    text: '@',
    active: '@',
  },
  template: `<button class="years-button" ng-class="{'active': $ctrl.active}">{{$ctrl.text}}</button>`
})
