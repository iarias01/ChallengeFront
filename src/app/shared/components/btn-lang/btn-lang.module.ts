import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BtnLangComponent } from './btn-lang.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule, FormsModule, TranslateModule],
  declarations: [BtnLangComponent],
  exports: [BtnLangComponent],
})
export class BtnLangComponentModule {}
