((app) => {
    app.component('portfolio', {
        templateUrl: 'src/js/components/content/portfolio/portfolio.html',
        controller: ['infosService', '$timeout', function(infosService, $timeout) {
            angular.extend(this, {
                $onInit() {
                    infosService.get().then((res) => {
                        this.infos = res.data
                    })
                    this.begin = 0;

                    let timer;
                    let sliderFunc = () => {
                        timer = $timeout(() => {
                            next()
                            timer = $timeout(sliderFunc, 5000);
                        }, 5000);
                    }
                    //let idx = 0
                    this.next = (portfolio, idx) => {
                        idx < portfolio.images.length - 1 ? portfolio.images[idx++] : portfolio.images[idx] = 0
                    }
                }
            })
        }]
    })
})(angular.module('app.content'))
