System.register(['angular2/core', '../../data/sprints.data'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, sprints_data_1;
    var SprintsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (sprints_data_1_1) {
                sprints_data_1 = sprints_data_1_1;
            }],
        execute: function() {
            SprintsService = (function () {
                function SprintsService() {
                }
                SprintsService.prototype.getSprints = function () {
                    return Promise.resolve(sprints_data_1.SPRINTS);
                };
                SprintsService.prototype.getSprint = function (id) {
                    return Promise.resolve(sprints_data_1.SPRINTS).then(function (sprints) { return sprints.filter(function (sprint) { return sprint.id === id; })[0]; });
                };
                SprintsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], SprintsService);
                return SprintsService;
            })();
            exports_1("SprintsService", SprintsService);
        }
    }
});
//# sourceMappingURL=sprints.service.js.map