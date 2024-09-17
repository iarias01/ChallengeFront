import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HttpInterceptorInterceptor } from './services/interceptor/http-interceptor.interceptor';
import { RouterModule } from '@angular/router';
import { HeaderModule } from './shared/components/header/header.module';
import { AlertModule } from './shared/components/alert/alert.module';
import { LoadingModule } from './shared/components/loading/loading.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    HeaderModule,
    AlertModule,
    LoadingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
