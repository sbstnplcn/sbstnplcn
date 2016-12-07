((app) => {
    app.component('portfolio', {
        templateUrl: 'src/js/components/content/portfolio/portfolio.html',
        controller: ['infosService', function(infosService) {
            angular.extend(this, {
                $onInit() {
                    infosService.get().then((res) => {
                        this.infos = res.data
                    })

                }
            })
        }]
    })
})(angular.module('app.content'))
