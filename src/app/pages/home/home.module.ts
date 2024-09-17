import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { ModalModule } from 'src/app/shared/components/modal/modal.module';
import { ContactModule } from 'src/app/shared/components/forms/contact/contact.module';
import { TranslateModule } from '@ngx-translate/core';
import { BtnLangComponentModule } from 'src/app/shared/components/btn-lang/btn-lang.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    ButtonModule,
    ModalModule,
    ContactModule,
    TranslateModule,
    BtnLangComponentModule,
  ],
})
export class HomeModule {}
