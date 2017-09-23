app.controller('boardController',  [ '$scope', '$http', '$location', 'boardService', function( $scope, $http, $location, boardService) {

     $http.get("json/posts.json").then(function(response) {
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
<<<<<<< HEAD
         
         var dataObj = {
            title : $scope.title,            
        };	

        $http.post( '/boards', dataObj);
=======
         $http.post( '/boards', $scope.formData);
>>>>>>> 93e72d7ec16d996e5b1d656e426423b32fe196f8
     }
}]);

app.controller('boardViewController',  [ '$scope', '$routeParams', 'boardService', function( $scope, $routeParams, boardService) {
    
   

    $scope.post = 
        {
        "id": 1234567890,
        "name": "2017년 회의록",
        "creator": {
          "id": 1234567890,
          "name": "홍길동"
        },
        "createdat": "2017/10/01",
        "lastmodifiedat": "2017/10/11",
        "contents": "Winter 프로젝트 시작합니다.",
        "viewcount": 3,
        "attatch": [
          {
            "id": 1234567890,
            "name": "file1",
            "link": "http://127.0.0.1/blob/blob0/file1"
          }
        ]
      };
    
    // var callback = function( data){
    //     $scope.post = data;     
    // } 

    //boardService.find( id, callback);    

}]);
    