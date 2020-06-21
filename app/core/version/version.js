'use strict';

angular.module('athleteProfileApp.version', [
  'athleteProfileApp.version.interpolate-filter',
  'athleteProfileApp.version.version-directive'
])

.value('version', '0.1');
