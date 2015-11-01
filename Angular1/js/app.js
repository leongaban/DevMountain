var app = angular.module('friendsList', []);

app.controller('mainCtrl', function($scope) {
    $scope.name = "Leon Gaban";

    var vm = this;
        vm.name = "Leon Gaban";

        vm.myFriends = [
            {
                name: "Joe Rogan"
            },
            {
                name: "Neil deGrasse Tyson"
            },
            {
                name: "Dan Carlin"
            },
            {
                name: "Aubrey Marcus"
            },
            {
                name: "Duncan Trussell"
            }
        ]
})
