import { Component }       from '@angular/core';
import { DynamicFormComponent }     from './dynamic-form.component';
import { InputBase } from './input-base';
import { InputService } from './input.service';

@Component({
  selector: 'my-app',
  template: `
    <div>
      <h2>Dynamic Form Example</h2>
      <ul>
        <li>textbox</li>
        <li>dropdown</li>
        <li>textarea</li>
        <li>calendar</li>
      </ul>
      <dynamic-form [inputList]="inputList"></dynamic-form>
    </div>
  `,
  directives: [DynamicFormComponent],
  providers:  [InputService]
})
export class AppComponent {
  inputList: InputBase<any>[];
  constructor(service: InputService) {
    this.inputList = service.getFormDesc();
  }
}