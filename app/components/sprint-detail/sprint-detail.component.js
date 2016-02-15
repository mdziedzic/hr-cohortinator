System.register(['angular2/core', 'angular2/router', '../../services/sprints/sprints.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, sprints_service_1;
    var SprintDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (sprints_service_1_1) {
                sprints_service_1 = sprints_service_1_1;
            }],
        execute: function() {
            SprintDetailComponent = (function () {
                function SprintDetailComponent(_sprintsService, _routeParams) {
                    this._sprintsService = _sprintsService;
                    this._routeParams = _routeParams;
                }
                SprintDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this._sprintsService.getSprint(id)
                        .then(function (sprint) { return _this.sprint = sprint; });
                };
                SprintDetailComponent.prototype.goBack = function () {
                    window.history.back();
                };
                SprintDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-sprint-detail',
                        inputs: ['sprint'],
                        templateUrl: 'app/components/sprint-detail/sprint-detail.component.html',
                        styleUrls: ['app/components/sprint-detail/sprint-detail.component.css']
                    }), 
                    __metadata('design:paramtypes', [sprints_service_1.SprintsService, router_1.RouteParams])
                ], SprintDetailComponent);
                return SprintDetailComponent;
            })();
            exports_1("SprintDetailComponent", SprintDetailComponent);
        }
    }
});
//# sourceMappingURL=sprint-detail.component.js.map