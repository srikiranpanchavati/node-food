angular.module('foodController', [])

    // inject the food service factory into our controller
    .controller('mainController', ['$scope','$http','Foods', function($scope, $http, Foods) {
        $scope.formData = {};
        $scope.loading = true;

        // GET =====================================================================
        // when landing on the page, get all foods and show them
        // use the service to get all the foods
        Foods.get()
            .success(function(data) {
                $scope.foods = data;
                $scope.loading = false;
                $scope.totalPrice();
            });

        $scope.totalPrice = function(){
            Foods.total()
                .success(function (data) {
                    $scope.total = data;
                })
        };


        // CREATE ==================================================================
        // when submitting the add form, send the text to the node API
        $scope.createFood = function() {

            // validate the formData to make sure that something is there
            // if form is empty, nothing will happen
            if ($scope.formData.name != undefined && $scope.formData.price != undefined && $scope.formData.priority != undefined) {
                $scope.loading = true;

                // call the create function from our service (returns a promise object)
                Foods.create($scope.formData)

                    // if successful creation, call our get function to get all the new foods
                    .success(function(data) {
                        $scope.loading = false;
                        $scope.formData = {}; // clear the form so our user is ready to enter another
                        $scope.foods = data; // assign our new list of foods
                        $scope.totalPrice();
                    });
            }
        };

        // DELETE ==================================================================
        // delete a food after checking it
        $scope.deleteFood = function(id) {
            $scope.loading = true;

            Foods.delete(id)
                // if successful creation, call our get function to get all the new foods
                .success(function(data) {
                    $scope.loading = false;
                    $scope.foods = data; // assign our new list of foods
                    $scope.totalPrice();
                });
        };
    }]);