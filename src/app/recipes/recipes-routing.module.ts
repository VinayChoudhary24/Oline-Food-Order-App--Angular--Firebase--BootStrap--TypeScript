import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipesResolverService } from "./recipes-resolver.service";
import { RecipesComponent } from "./recipes.component";

const routes: Routes = [
    // This goes the the recipes section i.e /recipes
    // Add the Child Routes
    { path: 'recipes', component: RecipesComponent, 
    
    canActivate: [AuthGuard], 
    
    children: [    
        // To Load the TEXT near recipesComponent
        { path: '', component: RecipeStartComponent },

          // To Load a New Recipe when Click
          { path: 'new', component: RecipeEditComponent },

        // To Load the recipe-detail.component, Here id is the DYNAMIC PARAMETER
        { path: ':id', component:RecipeDetailsComponent,

        resolve: [RecipesResolverService] },

        // To Load a New Recipe in edit Mode when Click
        { path: ':id/edit', component: RecipeEditComponent, 
        
        resolve: [RecipesResolverService] },
    ] },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class RecipesRoutingModule {}