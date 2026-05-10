/*
Practical no:15
Q15. Using angular js create a SPA to accept the details such as name, mobile number, pin code and email address and make validation.
Steps to Create:
1. Create project: `ng new slip19 --defaults`
2. Navigate to: `slip19/src/app/`
Steps to Execute:
1. Run: `ng serve`
2. Open `http://localhost:4200` to test validations.
*/

/*
To run this Angular application:
1. Create a new Angular project: ng new my-app
2. Navigate to the project directory: cd my-app
3. Replace the contents of src/app/app.component.ts, src/app/app.component.html, and src/app/app.module.ts with these files.
4. Run the application: ng serve
5. Open your browser at http://localhost:4200/
*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
