import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularComponent } from './angular/angular.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { EnrollService } from './Services/enroll.service';

@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    JavascriptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EnrollService],
  //Now we have providded this EnrollService inside the app.module ,so now
  //an instance of this enroll service will be created and it will be injected
  //for all the COMPONENTS,all DIRECTIVES and SERVICES!!!
  bootstrap: [AppComponent]
})
export class AppModule { }
