// Q.2) Using angular js create a SPA to accept the details such as name, mobile number, pin code and email address and make validation. Name should contain character only, address should contain SPPU M.Sc. Computer Science Syllabus 2023-24, mobile number should contain only 10 digit, Pin code should contain only 6 digit, email id should contain only one @, . Symbol.

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '';
  address = '';
  mobile = '';
  pincode = '';
  email = '';
  message = '';

  validateForm() {
    if (!/^[A-Za-z ]+$/.test(this.name)) {
      alert("Name Error"); return;
    }
    if (!/^\d{10}$/.test(this.mobile)) {
      alert("Mobile Error"); return;
    }
    if (!/^\d{6}$/.test(this.pincode)) {
      alert("Pin Error"); return;
    }
    // Validate email: must have exactly one @, contains dot
    if (!/^[^@]+@[^@]+\.[^@]+$/.test(this.email) || (this.email.match(/@/g)||[]).length !== 1) {
      alert("Email Error"); return;
    }
    this.message = "All Details Validated Successfully";
  }
}
