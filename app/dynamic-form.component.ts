import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { DynamicFormInputComponent } from './dynamic-form-input.component';
import { InputBase }                 from './input-base';
import { InputControlService }       from './input-control.service';

@Component({
  selector: 'dynamic-form',
  template: `
  <div class="container">
  <form (ngSubmit)="onSubmit()" [formGroup]="form" #dForm="ngForm">
    <div *ngFor="let inElement of inputList" class="form-row form-group">
      <df-input [inElement]="inElement" [form]="form"></df-input>
    </div>
    <div class="form-row">
      <button type="submit" [disabled]="!form.valid" class="btn btn-success" [disabled]="!dForm.form.valid">Save</button>
    </div>
  </form>
  <div *ngIf="payLoad" class="form-row">
    <br>{{payLoad}}
  </div>
</div>`,
  directives: [DynamicFormInputComponent, REACTIVE_FORM_DIRECTIVES],
  providers:  [InputControlService]
})
export class DynamicFormComponent implements OnInit {
  @Input() inputList: InputBase<any>[] = [];
  form: FormGroup;

  payLoad = 'fill the form and hit Save';
  constructor(private ics: InputControlService) {  }
  ngOnInit() {
    console.log('ics:',this.ics);  
    this.form = this.ics.toFormGroup(this.inputList);
  }
  onSubmit() {
    console.log('on submit:',this.form.value);
    this.payLoad = JSON.stringify(this.form.value);
  }
}