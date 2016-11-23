((app) => {
    app.component('sidebar', {
        templateUrl: 'src/js/components/sidebar/sidebar.html',
        controller: ['$http', function($http) {
            angular.extend(this, {
                $onInit() {

                }
            })
        }]
    })
})(angular.module('app.sidebar'))
