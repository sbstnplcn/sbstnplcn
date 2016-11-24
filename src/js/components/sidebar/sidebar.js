((app) => {
    app.component('sidebar', {
        templateUrl: 'src/js/components/sidebar/sidebar.html',
        controller: ['$http', function($http) {
            angular.extend(this, {
                $onInit() {
                    $http.get('/src/js/infos.json').then((res) => {
                        this.infos = res.data
                    })

                }
            })
        }]
    })
})(angular.module('app.sidebar'))
