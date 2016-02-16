import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Person } from '../../interfaces/person';
import { PersonDetailComponent } from '../person-detail/person-detail.component';
import { PeopleService } from '../../services/people/people.service';
import { ArraySortPipe } from '../../pipes/arraysort.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'my-pairs',
  templateUrl: 'app/components/pairs/pairs.component.html',
  styleUrls: ['app/components/pairs/pairs.component.css'],
  directives: [PersonDetailComponent, HighlightDirective],
  pipes: [ArraySortPipe]
})

export class PairsComponent implements OnInit {
  public title = 'Pairs';
  public people = [];
  public selectedPerson: Person;
  public sortBy = 'firstName';

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

  gotoDetail() {
    this._router.navigate(['PersonDetail', { id: this.selectedPerson.id }]);
  }
}
