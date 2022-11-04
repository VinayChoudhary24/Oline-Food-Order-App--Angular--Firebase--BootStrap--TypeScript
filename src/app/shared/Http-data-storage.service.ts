import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { map, tap } from "rxjs/operators";

// Add Injectable to add Other Services and Providers Array
@Injectable({
    providedIn: 'root'
})

export class DataStorageService {

    // This property uses the HttpClientModule in this Service
    constructor( private http: HttpClient,
        // to Access all the Recipes in this Servies i.e to Store and Fetch them
                private recipeService: RecipeService ) {}

    //To Store all the Recipes from the RecipeList Section to the FIREBASE Database...
    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        // Use PUT request to Store all data and at the Same time Replace the Existing data i.e UPDATE
        this.http.put('https://online-food-order-app-40d46-default-rtdb.firebaseio.com/recipes.json', recipes)
        // To send a HttpRequest we need to SUBSCRIBE always
        .subscribe( (response) => {
            console.log(response);
        }) 
    }
    
    // To Fetch the Stored recipes from the FIREBASE Database
    fetchRecipes() {
        return this.http.get<Recipe[]>('https://online-food-order-app-40d46-default-rtdb.firebaseio.com/recipes.json')
        // Add Operator to Make sure we always fetch in a FORMAT i.e recipes with Ingredients[] Array
        // This map is the RxJS Operator Map used with PIPE()
        .pipe( map( (recipes) => {
            // This is the Normal JS map Function
            return recipes.map( (recipe) => {
                return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }
            });
        }),
        // Tap method is Used here for the ResolverService
        tap( (recipes) => {
            this.recipeService.setRecipes(recipes);
        }) 
        )
    }

}