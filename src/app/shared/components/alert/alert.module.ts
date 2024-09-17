import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [AlertComponent],
  exports: [AlertComponent],
  imports: [CommonModule, TranslateModule],
})
export class AlertModule {}
