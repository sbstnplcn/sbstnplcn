((app) => {
    app.component('exp', {
        templateUrl: 'src/js/components/content/exp/exp.html',
        controller: ['infosService', function(infosService) {
            angular.extend(this, {
                $onInit() {
                    infosService.get().then((res) => {
                        this.infos = res.data
                        this.exps = this.infos[0].exps
                    })

                    this.expslimit = 3
                    this.loadMoreExps = () => {
                        this.expslimit += 1
                    }
                }

            })
        }]
    })
})(angular.module('app.content'))
