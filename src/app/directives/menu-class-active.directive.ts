import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appMenuClassActive]'
})
export class MenuClassActiveDirective {
  @Input() appMenuClassActive: any;

  constructor(private elementRef: ElementRef, private render: Renderer2) { }

  @HostListener('click') onMenuClick(){
    const childEles = this.appMenuClassActive.children
    for(let i = 0; i < childEles.length; i++){
      let className = childEles.item(i).className;
      if(className.includes('active'))
        childEles.item(i).className = className.replace('active', '');
    }
    this.render.addClass(this.elementRef.nativeElement, 'active');
  }
}
