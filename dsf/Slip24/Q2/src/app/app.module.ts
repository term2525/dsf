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

/*
Step 1: ng new slip17-app
Step 2: Replace contents of src/app/ with these files
Step 3: ng serve
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
