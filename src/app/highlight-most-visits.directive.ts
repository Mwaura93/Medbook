import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightMostVisits]'
})
export class HighlightMostVisitsDirective implements OnChanges {
  @Input() appHighlightMostVisits!: number;
  @Input() mostVisitsThreshold!: number;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    if (this.appHighlightMostVisits >= this.mostVisitsThreshold) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'yellow');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'background-color');
    }
  }
}
