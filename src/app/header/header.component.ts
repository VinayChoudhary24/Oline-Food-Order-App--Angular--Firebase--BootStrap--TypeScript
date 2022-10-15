import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    // add a Property
    // Create a Variable that will be LISTENED(@Output) by other Components, and EMIT the FEATURES
    // After routing we dont need this
    // @Output() featureSelected = new EventEmitter<string>();



    // This function will Fire the LINKS in the HEADER Section
    // After routing we dont need this
    // onSelect(feature: string) {
    //     this.featureSelected.emit(feature);
    // }
}