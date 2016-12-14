((app) => {
    'use strict'
    app.service('infosService', ['$http', function($http) {
        return {
            get() {
                return $http.get('src/js/infos.json')
            }
        }
    }])
})(angular.module('app.services'))
