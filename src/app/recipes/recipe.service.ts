// This Service is to Manage the Recipes

import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";
import { Recipe } from "./recipe.model";

// Providing the recipe.service in recipes.component.ts and Add it into the Constructor of the Component where we want to Use it 
export class RecipeService {
    
    // Add a Property to transfer the Data
    recipeSelected = new EventEmitter<Recipe>() 
 
     // This Array Contains all the Recipes i.e Recipe MODEL
    //  Make it PRIVATE so that no-one can Access this Service from Outside
  private recipes: Recipe[] = [
    // Here we Create the INSTANCE/BLUEPRINT of the recipe.model class/Object with the 'new' Keyword
    new Recipe('BEEF TACOS', 
    'The most flavorful and juiciest taco meat EVER!!', 
    'https://houseofyumm.com/wp-content/uploads/2021/06/Taco-Meat-8-680x520.jpg', 
    [
        // USING THE INGREDIENT CONSTRUCTOR
        new Ingredient('Corn Tortillas', 4),
        new Ingredient('Mint Lime', 2)
    ]),
    
    new Recipe('GARLICKY SPAGHETTI', 
    ' If you are a major garlic fan!!', 
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/garlic-spaghetti-horizontal-1539203011.jpg', 
    [
        new Ingredient('Bread Crumbs', 2),
        new Ingredient('White Wine', 2)
    ]),

    new Recipe('CHEESY MEATBALL PIZZA RING', 
    'You’ve officially fallen off the deep end into pizza bliss!!', 
    'https://www.cookedperfect.com/wp-content/uploads/sites/239/2016/06/cooked-perfect-recipe-cheesy-meatball-pizza-2.jpg', 
    [
        new Ingredient('Meatballs', 15),
        new Ingredient('Iced tea', 2)
    ]),

    new Recipe('CHICKEN JUICY BURGER', 
    'Big Bad Boy Burger!!', 
    'https://www.getflavor.com/wp-content/uploads/2022/07/4-Ways-to-Build-Crave-in-Fried-Chicken-Sandwiches-Featured.png', 
    [
        new Ingredient('Chicken Breast', 2),
        new Ingredient('Fresh Lime Soda', 2)
    ]),

    new Recipe('Crispy Chinese Chicken Wings', 
    'Bring this dish to the party!!', 
    'https://iheartumami.com/wp-content/uploads/2018/12/Whole30-Crispy-Chinese-Chicken-Wings-Oven-Baked-Paleo-Keto-Chicken-Wings-I-Heart-Umami-4.jpg', 
    [
        new Ingredient('Chicken Wings', 6),
        new Ingredient('Blue Lagoon Moacktail', 2)
    ]),

    new Recipe('Hyderabadi Chicken Biryani', 
    'The most popular biryani is Here!!', 
    'https://c.ndtvimg.com/2022-07/g1sfm4pg_biryani_625x300_07_July_22.png', 
    [
        new Ingredient('Meat', 2),
        new Ingredient('Coke', 2)
    ]),
  ];

//   A Method to get the Service from Outside
    getRecipes() {
        // Use SLICE() so that it will Return the Exact Copy of this recipes ARRAY
        return this.recipes.slice();
    }

}