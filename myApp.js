console.log("This code is being used");
var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
    $scope.prefix = "Angulajs";
    $scope.name = "Website Application";
});
