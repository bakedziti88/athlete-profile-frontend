'use strict';

angular.module('athleteProfileApp.athleteForm', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/create', {
    templateUrl: 'athlete-form/athlete-form.template.html',
    controller: 'athleteFormController'
  });
}])

.controller('athleteFormController', ['$http','$location', function($http, $location) {
  let self = this
  self.pendingForm = {gender: 'Male'}
  self.confirm = false
  self.error = false

  $http.get('http://localhost:3000/api/sports').then(function(response) {
    self.SPORTS = response.data
  })

  self.validate = function() {
    if (!(self.pendingForm.name && self.pendingForm.gender && self.pendingForm.DOB)) {
      return false
    }

    //TODO: NEED TO VALIDATE DATE
    if (self.pendingForm.DOB) {}
    return true
  }
  self.goConfirm = function() {
    self.error = false


    if (self.validate()) {
      self.confirm = true
    }
    else {
      self.error = true
    }
  }
  self.goBack = function() {
    self.confirm = false
  }

  self.submission = function() {
    $http.post('http://localhost:3000/api/athletes', self.pendingForm).then(function(response) {
      console.log(response.data)
      $location.path('/athletes')
    })
  }

}]);