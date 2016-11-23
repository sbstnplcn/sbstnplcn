((app) => {
    app.component('navbar', {
        templateUrl: 'src/js/components/navbar/navbar.html',
        controller: ['$http', function($http) {
            angular.extend(this, {
                $onInit() {

                }
            })
        }]
    })
})(angular.module('app.navbar'))
