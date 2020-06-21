'use strict';

angular.module('athleteProfileApp.athleteList', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/athletes', {
    templateUrl: 'athlete-list/athlete-list.template.html',
    controller: 'athleteListController'
  });
}])

.controller('athleteListController', ['$http', function($http) {
  let self = this

  $http.get('http://localhost:3000/api/athletes').then(function(response){
    self.athletes = response.data
    console.log(self.athletes)
  })
}])

.filter('filterByName', function() {
  return function(input, search) {
      if (!search)
          return input

      search = search.toLowerCase()
      return input.filter(function(athlete) {
          return athlete.name.toLowerCase().includes(search)
      })
  }
})

.directive('athletePreview', function() {
  return {
    templateUrl: 'athlete-list/athlete-card.template.html',
    restrict: 'E',
    scope: {
      athlete: '='
    }
  }
})