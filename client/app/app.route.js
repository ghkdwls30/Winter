app.config([ '$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/board/list', {
                  templateUrl: 'app/views/board/common-board-list.html',
                  controller: 'boardController'			
		})
		.when('/board/edit', {
                  templateUrl: 'app/views/board/common-board-edit.html',
                  controller: 'boardController'		
            })
            .when('/board/view/:id', {
                  templateUrl: 'app/views/board/common-board-view.html',
                  controller: 'boardViewController'			
            })
		.otherwise({
                  redirectTo: '/'
            });
}]);
               

