((app) => {
    app.component('footer', {
        templateUrl: 'src/js/components/footer/footer.html',
        controller: ['$http', function($http) {
            angular.extend(this, {
                $onInit() {

                }
            })
        }]
    })
})(angular.module('app.footer'))
