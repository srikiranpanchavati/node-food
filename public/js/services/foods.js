angular.module('foodService', [])

    // super simple service
    // each function returns a promise object
    .factory('Foods', ['$http',function($http) {
        return {
            get : function() {
                return $http.get('/api/foods');
            },
            create : function(foodData) {
                return $http.post('/api/foods', foodData);
            },
            delete : function(id) {
                return $http.delete('/api/food/' + id);
            },
            total : function(){
                return $http.get('/api/total');
            }
        }
    }]);