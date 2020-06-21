'use strict';

angular.module('athleteProfileApp.athleteForm', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/create', {
    templateUrl: 'athlete-form/athlete-form.template.html',
    controller: 'athleteFormController'
  });
}])

.controller('athleteFormController', ['$http', function($http) {
  let self = this
  self.pendingForm = {gender: 'Male'}
  $http.get('http://localhost:3000/api/sports').then(function(response) {
    self.SPORTS = response.data
  })
}]);