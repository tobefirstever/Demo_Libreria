import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgHttpLoaderModule } from 'ng-http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MasterLayoutComponent } from './layouts/master-layout/master-layout.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { EnviromentServiceProvider } from './shared/services/enviroment.service.provider';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './shared/interceptors/http-error.interceptor';
import { MessageErrorInterceptor } from './shared/interceptors/message-error.interceptor';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';

import { registerLocaleData } from '@angular/common';
import localePE from '@angular/common/locales/es-PE';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { AuthModule } from './modules/auth/auth.module';
registerLocaleData(localePE);

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    MasterLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    AuthModule,
    NgHttpLoaderModule.forRoot() 
  ],
  providers: [
    EnviromentServiceProvider,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MessageErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }    
  ],
  bootstrap: [AppComponent],
  entryComponents: [LoadingComponent]  
})
export class AppModule { }
