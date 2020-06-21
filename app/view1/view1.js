'use strict';

angular.module('athleteProfileApp.athleteList', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/athletes', {
    templateUrl: 'view1/view1.html',
    controller: 'athleteListController'
  });
}])

.controller('athleteListController', ['$http', function($http) {
  let self = this

  $http.get('http://localhost:3000/api/athletes').then(function(response){
    self.athletes = []

    for (let i = 0; i < response.data.length; i+=3) {
      self.athletes.push(response.data.slice(i, i + 3))
    }
    
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
    templateUrl: 'view1/athlete-card.template.html',
    restrict: 'E',
    scope: {
      athlete: '='
    }
  }
})