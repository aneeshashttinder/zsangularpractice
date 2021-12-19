import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuccessAlert } from './successAlert/SuccessAlert.Component';
import { WarningAlert } from './WarningAlert/WarningAlert.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessAlert,
    WarningAlert
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
