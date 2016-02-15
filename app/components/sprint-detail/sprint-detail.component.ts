import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { SprintsService } from '../../services/sprints/sprints.service';
import { Sprint } from '../../interfaces/sprint';

@Component({
  selector: 'my-sprint-detail',
  inputs: ['sprint'],
  templateUrl: 'app/components/sprint-detail/sprint-detail.component.html',
  styleUrls: ['app/components/sprint-detail/sprint-detail.component.css']
})

export class SprintDetailComponent {
  sprint: Sprint;

  constructor(
    private _sprintsService: SprintsService,
    private _routeParams: RouteParams) {
  }

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._sprintsService.getSprint(id)
      .then(sprint => this.sprint = sprint);
  }

  goBack() {
    window.history.back();
  }
}
