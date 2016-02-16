import { Directive, ElementRef, Input } from 'angular2/core';

@Directive({
  selector: '[myHighlight]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})

export class HighlightDirective {

  constructor(private el: ElementRef) {}

  onMouseEnter() { this._highlight(1); }
  onMouseLeave() { this._highlight(0.5); }

  private _highlight(olevel: number) {
    this.el.nativeElement.style.opacity = olevel;
  }
}
