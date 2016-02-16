import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Person } from '../../interfaces/person';
import { PersonDetailComponent } from '../person-detail/person-detail.component';
import { PeopleService } from '../../services/people/people.service';

import { ArraySortPipe } from '../../pipes/arraysort.pipe';

@Component({
  selector: 'my-people',
  templateUrl: 'app/components/people/people.component.html',
  styleUrls: ['app/components/people/people.component.css'],
  directives: [PersonDetailComponent],
  pipes: [ArraySortPipe]
})

export class PeopleComponent implements OnInit {
  public title = 'People';
  public people = [];
  public selectedPerson: Person;
  public sortBy = 'firstName';

  //public time = new Date().toLocaleTimeString();


  constructor(
    private _router: Router,
    private _peopleService: PeopleService) {
  }

  ngOnInit() {
    this.getPeople();
  }

  getPeople() {
    this._peopleService.getPeople().then(people => this.people = people);
  }

  onSelect(person: Person) {
    this.selectedPerson = person;
  }

  paired(person: Person) {
    if (!this.selectedPerson) return false;
    return this.selectedPerson['pairs'].indexOf(person.id) !== -1;
  }

  sort(sortBy: string) {
    this.sortBy = sortBy;
  }

  gotoDetail() {
    this._router.navigate(['PersonDetail', { id: this.selectedPerson.id }]);
  }
}
