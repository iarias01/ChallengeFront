import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '../../button/button.module';
import { TranslateModule } from '@ngx-translate/core';
import { InputFieldModule } from '../input-field/input-field.module';

@NgModule({
  declarations: [ContactComponent],
  exports: [ContactComponent],
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, TranslateModule, InputFieldModule],
})
export class ContactModule {}
