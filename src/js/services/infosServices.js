((app) => {
    'use strict'
    app.service('infosService', function($http) {
        return {
            get() {
                return $http.get('src/js/infos.json')
            }
        }
    })
})(angular.module('app.services'))
