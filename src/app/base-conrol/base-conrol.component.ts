import { Component } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { BaseComponent } from '../base/base.component';


@Component({
  selector: 'app-base-conrol',
  template: `
    <p>
      base-conrol works!
    </p>
  `,
  styleUrls: ['./base-conrol.component.scss']
})
export abstract class BaseConrolComponent extends BaseComponent implements ControlValueAccessor  {

  onChange = (_: any) => { }
  onTouch = () => { }
  
  constructor() { 
    super();
  }
  abstract writeValue(obj: any): void;

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}
