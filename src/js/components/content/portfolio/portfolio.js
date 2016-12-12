((app) => {
    'use strict'
    app.component('portfolio', {
        templateUrl: 'src/js/components/content/portfolio/portfolio.html',
        controller: ['infosService', function (infosService) {
            angular.extend(this, {
                $onInit() {
                    infosService.get().then((res) => {
                        this.infos = res.data
                        this.portfolios = this.infos[4].portfolios
                    })

                    this.next = (portfolio, idx) => {
                        idx < portfolio.images.length - 1 ? idx++ : idx = 0
                    }

                    this.portfoliolimit = 6
                    this.loadMorePortfolio = () => {
                        this.portfoliolimit += 2
                    }
                }
            })
        }]
    })
})(angular.module('app.content'))
