import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]',
})
export class FundoAmareloDirective {
  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
    /**
     * this._elementRef.nativeElement.style.backgroundColor = 'yellow';
     * Esta maneira não é indicada pela documentação do Angular
     * por permitir acesso direto ao DOM, trazendo vulnerabilidades para
     * a aplicação, como ataques do tipo XXS (cross-scripting).
     *
     */

    // Melhor prática para manipular o DOM pela diretiva:
    this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background-color',
      'yellow'
    );
  }
}
