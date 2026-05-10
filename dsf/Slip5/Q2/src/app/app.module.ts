/*
Practical no:7
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
