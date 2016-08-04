import { Component, Input } from '@angular/core';
import { FormGroup, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { InputBase }     from './input-base';
@Component({
  selector: 'df-input',
  templateUrl: 'app/dynamic-form-input.component.html',
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class DynamicFormInputComponent {
  @Input() inElement: InputBase<any>;
  @Input() form: FormGroup;
  get isValid() { 
      console.log('isValid');
      return this.form.controls[this.inElement.key].valid; 
    }
}