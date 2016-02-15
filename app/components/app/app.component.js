System.register(['angular2/core', 'angular2/router', '../../services/people/people.service', '../../services/sprints/sprints.service', '../../components/people/people.component', '../../components/sprints/sprints.component', '../person-detail/person-detail.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, people_service_1, sprints_service_1, people_component_1, sprints_component_1, person_detail_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (people_service_1_1) {
                people_service_1 = people_service_1_1;
            },
            function (sprints_service_1_1) {
                sprints_service_1 = sprints_service_1_1;
            },
            function (people_component_1_1) {
                people_component_1 = people_component_1_1;
            },
            function (sprints_component_1_1) {
                sprints_component_1 = sprints_component_1_1;
            },
            function (person_detail_component_1_1) {
                person_detail_component_1 = person_detail_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'HR Cohortinator';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <h1>{{title}}</h1>\n    <nav>\n      <a [routerLink]=\"['People']\">People</a>\n      <a [routerLink]=\"['Sprints']\">Sprints</a>\n    </nav>\n    <router-outlet></router-outlet>\n    ",
                        styleUrls: ['app/components/app/app.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            people_service_1.PeopleService,
                            sprints_service_1.SprintsService
                        ]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/people',
                            name: 'People',
                            component: people_component_1.PeopleComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/sprints',
                            name: 'Sprints',
                            component: sprints_component_1.SprintsComponent,
                        },
                        {
                            path: '/detail/:id',
                            name: 'PersonDetail',
                            component: person_detail_component_1.PersonDetailComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map