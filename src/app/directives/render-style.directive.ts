import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appRenderStyle]'
})
export class RenderStyleDirective implements OnInit {


  //NOTE:---- @ ..... is always a decorator. ex: @Directive, @HostListener , @HostBinding
  @HostBinding('style.color') color='blue';

  constructor(private renderer: Renderer2, private element: ElementRef) { }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.renderer.setStyle(
      this.element.nativeElement,
      "fontsize",
      "2.2rem"
    )
  }
  //   Host Listener
  // ● To add event in the DOM elements Host Listener is used.
  // ● It is a equivalent method for addEventListener present in JavaScript.
  // ● Renderer2 and ElementReference classes are imported along with 
  // HostListener.


  // hover on the line and bg color updates to green
  @HostListener('mouseenter') onmouseenter(event: Event) {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'green'
    )
  }
  // not hovering on the line and bg color updates to yellow
  @HostListener('mouseleave') onmouseleave(event: Event) {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'yellow'
    )
  }
}
