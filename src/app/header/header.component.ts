import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    // add a Property
    // Create a Variable that will be LISTENED(@Output) by other Components, and EMIT the FEATURES
    @Output() featureSelected = new EventEmitter<string>();

    // This function will Fire the LINKS in the HEADER Section
    onSelect(feature: string) {
        this.featureSelected.emit(feature);
    }
}