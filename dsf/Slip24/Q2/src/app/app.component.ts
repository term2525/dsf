// Q.2) Using angular js create a SPA to carry out validation for a username entered in a textbox. If the textbox is blank, alert “Enter username”. If the number of characters is less than three, alert ‟ Username is too short”. If value entered is appropriate the print “Valid username” and password should be minimum 8 characters

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string = '';
  password: string = '';
  message: string = '';

  validateForm() {
    if (this.username.trim() === '') {
      alert("Enter username");
      return;
    }
    if (this.username.length < 3) {
      alert("Username is too short");
      return;
    }
    if (this.password.length < 8) {
      alert("Password must be minimum 8 characters");
      return;
    }
    this.message = "Valid username";
  }
}
