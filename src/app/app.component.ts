import { Component } from '@angular/core';
import { EnrollService } from './Services/enroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  //This is Hierarchical Injection
  providers: [EnrollService] //We can uses it in app.module Hierarchical Injection
  //Now this propery ,which tells Angular how to provide this Service to us is accesseble
  //for all CHILD components of this PARENT component, this is Hierarchical Injection
})
export class AppComponent {

  constructor(private enrollService: EnrollService){
    //We have created a paramether in this constructor with type EnrollService
    //That is how we are telling Anuglar we need an instance of this enroll Service class
    //So angular will inject this service class to our child components
    //But now Angular doesn't know how to privide this service to us,so we have to
    //create another property in this @Component decorator
  }

  title = 'MyEleventhAngularProjectSubscribeService';

}
