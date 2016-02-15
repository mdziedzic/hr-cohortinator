import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Sprint } from '../../interfaces/sprint';
import { SprintDetailComponent } from '../sprint-detail/sprint-detail.component';
import { SprintsService } from '../../services/sprints/sprints.service';

@Component({
  selector: 'my-sprints',
  templateUrl: 'app/components/sprints/sprints.component.html',
  styleUrls: ['app/components/sprints/sprints.component.css'],
  directives: [SprintDetailComponent]
})

export class SprintsComponent implements OnInit {
  public title = 'People';
  public sprints = [];
  public selectedSprint: Sprint;

  constructor(
    private _router: Router,
    private _sprintsService: SprintsService) {
  }

  ngOnInit() {
    this.getSprints();
  }

  getSprints() {
    this._sprintsService.getSprints().then(sprints => this.sprints = sprints);
  }

  onSelect(sprint: Sprint) { this.selectedSprint = sprint; }

  gotoDetail() {
    this._router.navigate(['SprintDetail', { id: this.selectedSprint.id }]);
  }
}
