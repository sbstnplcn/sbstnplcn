((app) => {
    app.component('whoiam', {
        templateUrl: 'src/js/components/content/whoiam/whoiam.html',
        controller: ['$http', function($http) {
            angular.extend(this, {
                $onInit() {
                    $http.get('/src/js/manifesto.html').then((res) => {
                        this.manifesto = res.data
                    })

                    this.manifestolimit = 800
                    this.loadMoreManifesto = () => {
                        this.manifestolimit = this.manifesto.length
                    }
                }
            })
        }]
    })
})(angular.module('app.content'))
