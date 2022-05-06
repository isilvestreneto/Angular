import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[highlight]',
})
export class HighlightDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string = '';

  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaultColor;
  }

  @Input() defaultColor: string = 'white';

  @Input('highlight') highlightColor: string = 'yellow';

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {}

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }
}
