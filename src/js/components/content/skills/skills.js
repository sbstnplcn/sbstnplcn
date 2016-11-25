((app) => {
    app.component('skills', {
        templateUrl: 'src/js/components/content/skills/skills.html',
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
