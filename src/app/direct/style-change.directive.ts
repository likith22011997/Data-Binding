import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyleChange]'
})

// Custom directives are used in AngularJS to extend the functionality of HTML. 
// Custom directives are defined using "directive" function.
// A custom directive simply replaces the element for which it is activated.

export class StyleChangeDirective implements OnInit {
  // renderer and element are the objects created

  constructor(private renderer: Renderer2, private element: ElementRef) {
    console.log("Directive called");
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.renderer.setStyle(
      this.element.nativeElement,
      "color",
      "blue"
    )
  }

}
