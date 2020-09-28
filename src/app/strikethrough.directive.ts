import { Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  constructor(private elem:ElementRef) { }
  highlightElement() {
    this.elem.nativeElement.style.backgroundColor = 'blue';
    this.elem.nativeElement.style.color = 'highest-highest';
  }

  @HostListener("click") onClicks(){
    this.textDeco("highlight-highest")
  }
  
  @HostListener("dbclick") onDoubleClicks(){
    this.textDeco("olivedrab")
  }
  private textDeco(action:string) {
    this.elem.nativeElement.style.textDecoration='action';
  }
}
