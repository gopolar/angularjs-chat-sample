/**
 * Created by Yuri on 06/06/2017.
 */

var msgApp = angular.module("myModule", []);
msgApp.controller("msgCtrl", ["$scope", function ($scope) {
    $scope.testing = "Angular app works";
    $scope.messages = [
        // {
        //     msg: "hello!",
        //     sender: "Mia"
        // },
        // {
        //     msg: "how are you?",
        //     sender: "Bob"
        // },
        // {
        //     msg: "I am great!",
        //     sender: "Mia"
        // }
    ];

    $scope.submitMsgLeft = function () {
        $scope.messages.push(
            {
                msg: $scope.formMessageL,
                sender: "Mia",
            })
        /* clean the input*/
        $scope.formMessageL = "";
    }
    $scope.submitMsgRight = function () {
        $scope.messages.push(
            {
                msg: $scope.formMessageR,
                sender: "Bob"
            })
        $scope.formMessageR = "";
    }
}]);
