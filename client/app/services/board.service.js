app.service('boardService', function($http) {
    this.delete = function ( id, callback) {
        $http.delete("/post/" + id).then(function (response) {
            callback();
            console.log( "delete");
        });
    }

    this.list = function () {
        $http.get("/post?page=1&size=10").then(function (response) {
            console.log( "list");
        });
    }

    this.find = function ( id, callback) {
        $http.get("/post/" + id).then(function (response) {
            callback(response.data);            
        });
    }

    this.create = function ( post) {
        $http.post("/post", post).then(function (response) {
            console.log( "create");
        });
    }

    this.update = function ( post) {
        $http.update("/post", post).then(function (response) {
            console.log( "create");
        });
    }
});