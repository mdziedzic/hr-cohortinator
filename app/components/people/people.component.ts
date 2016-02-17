import { Component, Input, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Person } from '../../interfaces/person';
import { PersonDetailComponent } from '../person-detail/person-detail.component';
import { SearchBox } from '../search-box/search-box.component';
import { PeopleService } from '../../services/people/people.service';
import { ArraySortPipe } from '../../pipes/arraysort.pipe';
import { SearchFilterPipe } from '../../pipes/searchfilter.pipe';

@Component({
  selector: 'my-people',
  templateUrl: 'app/components/people/people.component.html',
  styleUrls: ['app/components/people/people.component.css'],
  directives: [PersonDetailComponent, SearchBox],
  pipes: [ArraySortPipe, SearchFilterPipe]
})

export class PeopleComponent implements OnInit {
  @Input() term;
  public title = 'People';
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
    if (this.selectedPerson !== person) {
      this.selectedPerson = person;
    } else {
    }
  }

  localTime(person: Person) {
    var utc = new Date().getTime();
    var time = utc - (person.timeDiff - 8) * 3600000;
    var hours = new Date(time).getHours();
    var minutes = new Date(time).getMinutes();
    var amPm = hours < 12 ? ' AM' : ' PM';
    if (hours > 12) hours -= 12;
    var shortenTime = hours + ':' + minutes + amPm;
    return shortenTime;
  }

  sort(sortBy: string) {
    this.sortBy = sortBy;
  }

  bio(person: Person) {
    console.log('bobby');
  }

  gotoDetail() {
    this._router.navigate(['PersonDetail', { id: this.selectedPerson.id }]);
  }
}
