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
  person: Person;

  constructor(
    private _peopleService: PeopleService,
    private _routeParams: RouteParams) {
  }

  ngOnInit() {
    console.log('bobby');
    // let id = +this._routeParams.get('id');
    let id = this.selectedPerson.id;
    this._peopleService.getPerson(id)
      .then(person => this.person = person);
  }

  goBack() {
    window.history.back();
  }
}
