/**
 * Created by abc on 13/05/2016.
 */
var app=angular.module("myapp",[]);

app.controller("myctrl", function ($scope) {
    
    $scope.id=1;
    $scope.user={'id':$scope.id};
    
    $scope.userlist=[];

    $scope.saver=function(){
        $scope.userlist.push($scope.user);

        $scope.id = $scope.id +1 ;
        $scope.user={'id':$scope.id};

    };
    
    $scope.updater=function($index){
        $scope.userlist.splice($index, 0, $scope.user);
        
        $scope.editer=false;
        $scope.user={'id':$scope.id};
    
    };
    
    $scope.editer=function(){

    };
    
    
    
});