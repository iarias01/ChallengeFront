import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
  imports: [CommonModule, TranslateModule],
})
export class ButtonModule {}
