'use strict';

angular.module('athleteProfileApp.athleteForm', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/create', {
    templateUrl: 'athlete-form/athlete-form.template.html',
    controller: 'athleteFormController'
  });
}])

.controller('athleteFormController', [function() {

}]);