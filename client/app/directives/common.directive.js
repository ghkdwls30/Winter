app.directive('sideMenu', function() {
    return {
        restrict: 'E',        
        templateUrl: 'app/views/common/side-menu.html'
    };
});

app.directive('commonBoardHeader', function() {
    return {
        restrict: 'E',        
        templateUrl: 'app/views/board/common-board-header.html',
        controller : 'boardController'
    };
});