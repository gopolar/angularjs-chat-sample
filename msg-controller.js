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
        //     senderDisplay: "You"
        // },
        // {
        //     msg: "how are you?",
        //     sender: "Bob"
        //     senderDisplay: "Bob"
        // },
        // {
        //     msg: "I am great!",
        //     sender: "Mia"
        //     senderDisplay: "You"
        // }
    ];

    $scope.submitMsgLeft = function () {

        // console.log("senderMod = " + $scope.messages[0]);

        $scope.messages.push(
            {
                msg: $scope.formMessageL,
                sender: "Mia",
            })
        $scope.formMessageL = "";

            $scope.senderModified = "You";

    }

    $scope.submitMsgRight = function () {
        $scope.messages.push(
            {
                msg: $scope.formMessageR,
                sender: "Bob"
            })
        $scope.formMessageR = "";

        $scope.senderModified = "You";

    }
}]);
