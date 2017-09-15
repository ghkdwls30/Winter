var app = angular.module('root', ['ngMaterial', 'ngRoute']);

app.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
}]);
