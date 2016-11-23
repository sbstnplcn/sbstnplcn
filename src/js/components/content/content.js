((app) => {
    app.component('content', {
        templateUrl: 'src/js/components/content/content.html',
        controller: ['$http', function($http) {
            angular.extend(this, {
                $onInit() {
                    $http.get('/src/js/components/content/exp-pro.json').then((res) => {
                        this.exps = res.data
                    })
                    $http.get('/src/js/components/content/studies.json').then((res) => {
                        this.studies = res.data
                    })
                    this.expslimit = 3
                    this.loadMoreExps = () => {
                        this.expslimit += 1
                    }
                    this.studieslimit = 3
                    this.loadMoreStudies = () => {
                        this.studieslimit += 1
                    }
                }

            })
        }]
    })
})(angular.module('app.content'))
