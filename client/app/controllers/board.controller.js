app.controller('boardController',  [ '$scope', '$http', '$location', 'boardService', function( $scope, $http, $location, boardService) {

     $http.get("/boards").then(function(response) {
        $scope.posts = response.data;
     });

     $scope.deletePost = function(){
        angular.forEach($scope.posts, function(post, index) {
            if(  post.selected){

                var callback = function(){
                    post.hideThis = true;
                }

                boardService.delete( post.id, callback);
            }
        });
     }

     $scope.moveEditPost = function(){
        $location.path( "/board/edit")
     }

     $scope.moveListPost = function(){
        $location.path( "/board/list")
     }

     $scope.createPost = function(){

         $http.post( '/boards', $scope.post);

         
         var dataObj = {
            title : $scope.title,            
        };	
     }
}]);

app.controller('boardViewController',  [ '$scope', '$routeParams', 'boardService', function( $scope, $routeParams, boardService) {
    

     var callback = function( data){
         $scope.post = data;     
     } 

    boardService.find( id, callback);    

}]);
    