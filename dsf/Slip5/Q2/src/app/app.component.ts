/*
Practical no:7
sudo code /directory-to-open --user-data-dir='.' --no-sandbox
Q7. Using angular js create a SPA to carry out validation for a username entered in a textbox. If the textbox is blank, alert “Enter username”. If the number of characters is less than three, alert ‟ Username is too short”. If the value entered is appropriate the print “Valid username” and password should be a minimum of 8 characters.
Steps to Create:
1. Install Angular CLI: `npm install -g @angular/cli`
2. Create project: `ng new slip5 --defaults`
3. Folder structure: `slip5/src/app/`
Steps to Execute:
1. Navigate to `slip5` folder.
2. Run: `ng serve`
3. Open `http://localhost:4200`
*/

// Q.2) Using angular js create a SPA to carry out validation for a username entered in a textbox. If the textbox is blank, alert “Enter username”. If the number of characters is less than three, alert ‟ Username is too short”. If value entered is appropriate the print “Valid username” and password should be minimum 8 characters.

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
