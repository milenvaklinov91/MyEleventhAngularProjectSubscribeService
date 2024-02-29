import { Component } from '@angular/core';
import { EnrollService } from '../Services/enroll.service';

@Component({
  //@Component decorator
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrl: './javascript.component.css',
  //This is Dependency Injection
  providers: [EnrollService] //We can also uses it in app.component - Hierarchical Injection
  //this is the propery ,which tells Angular how to provide this Service to us

})
export class JavascriptComponent {
  title = "JavaScript";

  //First we have to create a constructor
  constructor(private enrollService: EnrollService){
    //We have created a paramether in this constructor with type EnrollService
    //That is how we are telling Anuglar we need an instance of this enroll Service class
    //So angular will inject this service class to our component
    //But now Angular doesn't know how to privide this service to us,so we have to
    //create another property in this @Component decorator
  }

  // OnEnroll(){
  //   alert('Thank you for enrolling to ' + this.title + ` course.`)
  // }
  //Here we repeat same method in both component,it's not good practice

  OnEnroll(){
    //const enrollService = new EnrollService(); //I have created an instance,
    //but we don't want to do it by our own
    this.enrollService.OnEnrollClick(this.title)
    //now we can use this enroll Service class inside this OnEnroll() method
  }
  //First we have to create an instance of this enroll.service.ts inside this component class
  //This is not good practice,we can ask angular to provide us an instance
  //of this enroll service class and that is possible with dependency injection
}
