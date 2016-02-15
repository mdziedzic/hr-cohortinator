import { Injectable } from 'angular2/core';

import { PEOPLE } from '../../data/people.data';
import { Person } from '../../interfaces/person';

@Injectable()

export class PeopleService {
  getPeople() {
    return Promise.resolve(PEOPLE);
  }

  getPerson(id: number) {
    return Promise.resolve(PEOPLE).then(
      people => people.filter(person => person.id === id)[0]
    );
  }
}
