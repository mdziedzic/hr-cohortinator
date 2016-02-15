import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { PeopleService } from '../../services/people/people.service';
import { SprintsService } from '../../services/sprints/sprints.service';

import { PeopleComponent } from '../../components/people/people.component';
import { SprintsComponent } from '../../components/sprints/sprints.component';
import { PersonDetailComponent } from '../person-detail/person-detail.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['People']">People</a>
      <a [routerLink]="['Sprints']">Sprints</a>
    </nav>
    <router-outlet></router-outlet>
    `,
  styleUrls: ['app/components/app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    PeopleService,
    SprintsService
  ]
})

@RouteConfig([
  {
    path: '/people',
    name: 'People',
    component: PeopleComponent,
    useAsDefault: true
  },
  {
    path: '/sprints',
    name: 'Sprints',
    component: SprintsComponent,
  },
  {
    path: '/detail/:id',
    name: 'PersonDetail',
    component: PersonDetailComponent
  }
])

export class AppComponent {
  title = 'HR Cohortinator';
}
