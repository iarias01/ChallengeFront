import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '../../button/button.module';
import { TranslateModule } from '@ngx-translate/core';
import { InputFieldComponent } from './input-field.component';

@NgModule({
  declarations: [InputFieldComponent],
  exports: [InputFieldComponent],
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, TranslateModule],
})
export class InputFieldModule {}
