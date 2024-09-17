import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
})
export class InputFieldComponent {
  @Input() label!: string;
  @Input() control!: FormControl;
  @Input() type: string = 'text';
  @Input() isTextarea: boolean = false;
  @Input() submitted: boolean = false;
  @Input() errorMessages: { [key: string]: string } = {};

  get showError(): boolean {
    return (this.submitted || this.control.touched) && this.control.invalid;
  }
}
