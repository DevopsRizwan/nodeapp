(function(){

    console.log('in UserController');
    var app=angular.module("githubViewer",[])

    app.controller('UserController',["$scope","$http",function($scope,$http){
         



$scope.search=function(){

        console.log("in submit");
          var obj={};
          obj.url="pprprpr";
          obj.date="3123213";

          var jsonObj = {'key':'value'};
          

        //   var data = {
        //         amount: 3,
        //         currency: 2,
        //         source: 3,
        //         description: 4
        //     };

        var data = $.param({
                book: JSON.stringify({
                    author: "asd",
                    title : "sdsd",
                    body : "sdsddddds"
                })
              });
        

        $http.get('http://localhost:8187/about',data)
        .then(onUserComplete,onError)

}

      

    var  onUserComplete=function(data){
  console.log("succeeess");
     };

    var  onError=function(reason){
        console.log("false");

    };

    }]);

})();