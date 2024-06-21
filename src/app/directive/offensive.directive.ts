import { Directive, ElementRef, HostListener } from '@angular/core';
import { OffensiveWordsService } from '../services/offensive.service';

@Directive({
  selector: '[appFilterOffensiveWords]',
})
export class FilterOffensiveWordsDirective {
  constructor(
    private el: ElementRef,
    private offensiveWordsService: OffensiveWordsService
  ) {}

  @HostListener('input') onInput() {
    const input = this.el.nativeElement;
    const filteredValue = this.offensiveWordsService.filterOffensiveWords(
      input.value
    );
    input.value = filteredValue;
  }
}
