import { Component } from '@angular/core';

//## To Use BootStrap we need to Inform Angular in ANGULAR.JSON File in STYLES[]
   //-- "node_modules/bootstrap/dist/css/bootstrap.min.css"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeatue = 'recipe';

  // onNavigate(), function will NAVIGATE different LINKS
  onNavigate(feature:  string) {
    this.loadedFeatue = feature;
  }
}
