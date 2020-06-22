'use strict';

// Declare app level module which depends on views, and core components
angular.module('athleteProfileApp', [
  'ngRoute',
  'athleteProfileApp.athleteList',
  'athleteProfileApp.athleteForm',
  'athleteProfileApp.athleteDetail',
  'athleteProfileApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/athletes'});
}]);
