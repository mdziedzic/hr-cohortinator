import { Component, OnInit, Input } from 'angular2/core';
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
  @Input() selectedPerson: Person;
  @Input() paired;
  person: Person;
  public people = [];

  constructor(
    private _peopleService: PeopleService,
    private _routeParams: RouteParams) {
  }

  ngOnInit() {
    this.getPeople();

    let id = this.selectedPerson.id;
    this._peopleService.getPerson(id)
      .then(person => this.person = person);
  }

  getPeople() {
    this._peopleService.getPeople().then(people => this.people = people);
  }
}
