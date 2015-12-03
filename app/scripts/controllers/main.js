'use strict';

/**
 * @ngdoc function
 * @name bikramAltApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bikramAltApp
 */
angular.module('bikramAltApp')
  .controller('MainCtrl', function ($scope, studiodb, $localStorage) {
     $scope.storage = $localStorage;
     $scope.findStudios = function(){
        console.log(this);
        $scope.studiodb = studiodb.query({
          location: $scope.city
        }).$promise.then(function(data){
          console.log(data);
          $scope.StudiosFound = data;
        });
     };

     $scope.saveStudio = function(studio){
       var isSaved = false;

       if (!$localStorage.savedStudioList) {
            $localStorage.savedStudioList = [];
       }

       for (var i = 0; i < $localStorage.savedStudioList.length; i++) {
         if ($localStorage.savedStudioList[i] === studio){

           console.log("Studio already saved");
           isSaved = true;
         }
       }
       if (!isSaved) {
         $localStorage.savedStudioList.push(studio);
       }
     };
     $scope.deleteStudio = function(studio){
       var studioIndex = $localStorage.savedStudioList.indexOf(studio);
       if (studioIndex > -1){
         $localStorage.savedStudioList.splice(studioIndex, 1);
       }
     };
  });
