import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { PeopleService } from '../../services/people/people.service';

import { PeopleComponent } from '../../components/people/people.component';
import { PersonDetailComponent } from '../person-detail/person-detail.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/components/app/app.component.html',
  styleUrls: ['app/components/app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    PeopleService
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
    path: '/detail/:id',
    name: 'PersonDetail',
    component: PersonDetailComponent
  }
])

export class AppComponent {
  title = 'HR Cohortinator';
}
