import { Component } from "@angular/core";
import { DataStorageService } from "../shared/Http-data-storage.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    // To access the Http Request 
    constructor( private dataStorageService: DataStorageService ) {}

    // add a Property
    // Create a Variable that will be LISTENED(@Output) by other Components, and EMIT the FEATURES
    // After routing we dont need this
    // @Output() featureSelected = new EventEmitter<string>();



    // This function will Fire the LINKS in the HEADER Section
    // After routing we dont need this
    // onSelect(feature: string) {
    //     this.featureSelected.emit(feature);
    // }

    // Store the Recipes to the Database by Click Save
    onSaveData() {
        this.dataStorageService.storeRecipes();
    }

    // Fetch the Recipes from the Database
    onFetchData() {
        this.dataStorageService.fetchRecipes().subscribe();
    }
}