((app) => {
    app.component('content', {
        templateUrl: 'src/js/components/content/content.html',
        controller: [function() {
            angular.extend(this, {
                $onInit() {
                }
            })
        }]
    })
})(angular.module('app.content'))
