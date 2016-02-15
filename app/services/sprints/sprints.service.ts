import { Injectable } from 'angular2/core';

import { SPRINTS } from '../../data/sprints.data';
import { Sprint } from '../../interfaces/sprint';

@Injectable()

export class SprintsService {
  getSprints() {
    return Promise.resolve(SPRINTS);
  }

  getSprint(id: number) {
    return Promise.resolve(SPRINTS).then(
      sprints => sprints.filter(sprint => sprint.id === id)[0]
    );
  }
}
