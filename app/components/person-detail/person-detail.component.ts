import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { PeopleService } from '../../services/people/people.service';
import { Person } from '../../interfaces/person';

@Component({
  selector: 'my-person-detail',
  inputs: ['person'],
  templateUrl: 'app/components/person-detail/person-detail.component.html',
  styleUrls: ['app/components/person-detail/person-detail.component.css']
})

export class PersonDetailComponent {
  person: Person;

  constructor(
    private _peopleService: PeopleService,
    private _routeParams: RouteParams) {
  }

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._peopleService.getPerson(id)
      .then(person => this.person = person);
  }

  goBack() {
    window.history.back();
  }
}