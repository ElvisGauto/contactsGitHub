import { Directive, HostListener } from '@angular/core';
import { AbstractControl, NgControl } from '@angular/forms';

/**
 * Just numbers Directive
 * prevent to input no numbers characters
 * @example
 * <input justNumbers>
 */
@Directive({
  /* tslint:disable */
  selector: '[justNumbers]'
  /* tslint:enable */
})
export class JustNumbersDirective {
/**
 * Listen keyup event
 * if character is not a number, is removed from value
 */
  @HostListener('keyup') onKeyUp() {
    const ngControl = this.ngControl || <NgControl>{};
    const control = ngControl.control || <AbstractControl>{};
    const v = (ngControl.value || '').replace(/\D+/g, '');

    control.setValue( v );

    if ( v === '' ) {
      control.reset();
    }
  }

  constructor( private ngControl: NgControl ) { }

}
