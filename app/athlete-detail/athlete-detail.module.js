'use strict';

angular.module('athleteProfileApp.athleteDetail', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/athletes/:id', {
    templateUrl: 'athlete-detail/athlete-detail.template.html',
    controller: 'athleteDetailController'
  });
}])

.controller('athleteDetailController', ['$http', '$routeParams', function($http, $routeParams) {
    let self = this
    self.id = $routeParams.id

    self.hasPersonalInfo = false
    self.hasSports = false
    self.hasSocialMedia = false

    $http.get('http://localhost:3000/api/athletes/' + self.id).then(function(response) {
        self.athlete = response.data

        if (self.athlete.about || self.athlete.interests || self.athlete.charities || self.athlete.nationality) {
            self.hasPersonalInfo = true
        }
        if (self.athlete.sports.length > 0) {
            self.hasSports = true
        }
        console.log(self.athlete.social_medias)
        if (self.athlete.social_medias) {
            self.hasSocialMedia = true
        }
    })
}])