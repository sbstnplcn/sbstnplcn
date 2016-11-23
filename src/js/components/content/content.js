((app) => {
    app.component('content', {
        templateUrl: 'src/js/components/content/content.html',
        controller: ['$http', function($http) {
            angular.extend(this, {
                $onInit() {

                }
            })
        }]
    })
})(angular.module('app.content'))
