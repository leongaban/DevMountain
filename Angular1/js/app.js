var app = angular.module('friendsList', []);

app.controller('mainCtrl', function($scope) {
    $scope.name = "Leon Gaban";

    var vm = this;
        vm.name = "Leon Gaban";

        vm.myFriends = [
            "Joe Rogan",
            "Neil deGrasse Tyson",
            "Dan Carlin",
            "Aubrey Marcus",
            "Duncan Trussell"
        ]
})
