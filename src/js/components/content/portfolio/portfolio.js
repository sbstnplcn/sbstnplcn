((app) => {
    'use strict'
    app.component('portfolio', {
        templateUrl: 'src/js/components/content/portfolio/portfolio.html',
        controller: ['infosService', function (infosService) {
            angular.extend(this, {
                $onInit() {
                    infosService.get().then((res) => {
                        this.infos = res.data
                    })

                    this.next = (portfolio, idx) => {
                        idx < portfolio.images.length - 1 ? idx++ : idx = 0
                    }
                }
            })
        }]
    })
})(angular.module('app.content'))
