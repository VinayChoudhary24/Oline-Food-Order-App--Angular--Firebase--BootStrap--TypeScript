import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { RecipesModule } from './recipes/recipes.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { Authmodule } from './auth/auth.module';

@NgModule({
  //## For All the Components of the Application
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  //## For all the Other Modules Requered in the Application
  imports: [
    BrowserModule,
    // FormsModule,
    // For Reactive Forms Approach
    // ReactiveFormsModule,
    // For HTTP Requests
    HttpClientModule,
    // Import app-routing.module
    AppRoutingModule,
    // This is the Recipe.module
    RecipesModule,
    // This is the Shopping-List.Module
    ShoppingListModule,
    // Auth.module
    Authmodule,
    // Shared.module
    SharedModule,
    // core.module
    CoreModule,
  ],
  // ## For all the Services used in the Application
   // Providing shopping-list.service.ts will make sure All its COMPONENTS use This INSTANCE from Here
    // Add RecipeService here so that when we add a new Recipe it's not LOST after some Navigations
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
