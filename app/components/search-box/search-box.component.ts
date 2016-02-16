import { Component, Output, EventEmitter } from 'angular2/core';

@Component({
  selector: 'search-box',
  template:  `
    <div id="search-box">
      <input #input type="text" (input)="update.emit(input.value)"
                placeholder="Search">
    </div>
    `,
    styleUrls: ['app/components/search-box/search-box.component.css'],
})

export class SearchBox {
  @Output() update = new EventEmitter();

  ngOnInit() {
    this.update.emit('');
  }
}
