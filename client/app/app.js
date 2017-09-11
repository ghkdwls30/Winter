var app = angular.module('root', ['ngRoute']);

app.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
}]);

app.config(function($routeProvider) {
	$routeProvider
		.when('/test', {
			templateUrl: 'app/views/test.html'			
		})
		.when('/test2', {
			templateUrl: 'app/views/test2.html',
			controller: 'testController'
		})
		.otherwise({
			redirectTo: '/'
		});
});
               

