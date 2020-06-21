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
  self.confirm = false
  self.error = false

  $http.get('http://localhost:3000/api/sports').then(function(response) {
    self.SPORTS = response.data
  })

  self.validate = function() {
    if (!(self.pendingForm.name && self.pendingForm.gender && self.pendingForm.dob)) {
      return false
    }

    //TODO: NEED TO VALIDATE DATE
    if (self.pendingForm.dob) {}
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

}]);