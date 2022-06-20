import { Component } from '@angular/core';

@Component({
  selector: 'app-root1',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'LT Project';
  name:string = 'Vaibhav';
  today = new Date();
  //define the property and writing the events in angular and after fire the data is changed

  // define one more property here 

   clickMessage:string="What is Status";


   //define the Event to bind this Click msg 


onClickMe() {

  console.log('event fired !!--->');
  this.clickMessage = ' Training! is Active ';

}


}
