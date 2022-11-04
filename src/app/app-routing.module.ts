// This File Contains all the Routes of the Application

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { RecipeDetailsComponent } from "./recipes/recipe-details/recipe-details.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipesResolverService } from "./recipes/recipes-resolver.service";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

// This variable contains all the routes
const appRoutes: Routes = [
    // We Need a Empty path for the Home Page
    // Add pathMatch: 'full' property to the Empty Path Always, so that it redirects without errors
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },

    // This goes the the recipes section i.e /recipes
    // Add the Child Routes
    { path: 'recipes', component: RecipesComponent, children: [
        
        // To Load the TEXT near recipesComponent
        { path: '', component: RecipeStartComponent },

          // To Load a New Recipe when Click
          { path: 'new', component: RecipeEditComponent },

        // To Load the recipe-detail.component, Here id is the DYNAMIC PARAMETER
        { path: ':id', component:RecipeDetailsComponent, resolve: [RecipesResolverService] },

        // To Load a New Recipe in edit Mode when Click
        { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService] },
    ] },

    // this goes to the shopping-list section i.e /shopping-list
    { path: 'shopping-list', component: ShoppingListComponent },

    // This will Load the Login/Sign up Authentication Page
    { path: 'auth', component: AuthComponent }

]

// Add NgModule to transform the TypeScript class into a Angular Module
@NgModule({
    // Configure the Router
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}