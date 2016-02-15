System.register(['angular2/core', 'angular2/router', '../sprint-detail/sprint-detail.component', '../../services/sprints/sprints.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, sprint_detail_component_1, sprints_service_1;
    var SprintsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (sprint_detail_component_1_1) {
                sprint_detail_component_1 = sprint_detail_component_1_1;
            },
            function (sprints_service_1_1) {
                sprints_service_1 = sprints_service_1_1;
            }],
        execute: function() {
            SprintsComponent = (function () {
                function SprintsComponent(_router, _sprintsService) {
                    this._router = _router;
                    this._sprintsService = _sprintsService;
                    this.title = 'People';
                    this.sprints = [];
                }
                SprintsComponent.prototype.ngOnInit = function () {
                    this.getSprints();
                };
                SprintsComponent.prototype.getSprints = function () {
                    var _this = this;
                    this._sprintsService.getSprints().then(function (sprints) { return _this.sprints = sprints; });
                };
                SprintsComponent.prototype.onSelect = function (sprint) { this.selectedSprint = sprint; };
                SprintsComponent.prototype.gotoDetail = function () {
                    this._router.navigate(['SprintDetail', { id: this.selectedSprint.id }]);
                };
                SprintsComponent = __decorate([
                    core_1.Component({
                        selector: 'my-sprints',
                        templateUrl: 'app/components/sprints/sprints.component.html',
                        styleUrls: ['app/components/sprints/sprints.component.css'],
                        directives: [sprint_detail_component_1.SprintDetailComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, sprints_service_1.SprintsService])
                ], SprintsComponent);
                return SprintsComponent;
            })();
            exports_1("SprintsComponent", SprintsComponent);
        }
    }
});
//# sourceMappingURL=sprints.component.js.map