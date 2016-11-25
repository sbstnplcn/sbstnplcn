((app) => {
    app.component('studies', {
        templateUrl: 'src/js/components/content/studies/studies.html',
        controller: ['infosService', function(infosService) {
            angular.extend(this, {
                $onInit() {
                    infosService.get().then((res) => {
                        this.infos = res.data
                    })

                    this.studieslimit = 3
                    this.loadMoreStudies = () => {
                        this.studieslimit += 1
                    }
                }

            })
        }]
    })
})(angular.module('app.content'))
