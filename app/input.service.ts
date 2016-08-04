import { Injectable }       from '@angular/core';
import { InputBase }     from './input-base';
import { DropdownInput } from './input-dropdown';
import { TextboxInput }  from './input-textbox';

@Injectable()
export class InputService {
  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getFormDesc() {
    console.log('getFormDesc');
    
    let questions: InputBase<any>[] = [
      new DropdownInput({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),
      new TextboxInput({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),
      new TextboxInput({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];
    return questions.sort((a, b) => a.order - b.order);
  }
}