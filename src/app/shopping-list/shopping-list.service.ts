import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";

// Providing the shopping-list.service in app.module.ts and Add it into the Constructor of the Component where we want to Use it 
export class ShoppingListService {

    // When we ADD a Ingredient in the Shopping List
    ingredientChanged = new EventEmitter<Ingredient[]>();

      // add Ingrediants
       //  Make it PRIVATE so that no-one can Access this Service from Outside
  private ingredients: Ingredient[] = [
    // Here we Create the INSTANCE/BLUEPRINT of the ingredient.model class/Object with the 'new' Keyword
    new Ingredient('Apples', 13),
    new Ingredient('tomato', 13),
  ];

//   Add a Method to get the Ingredients
getIngredients() {
    return this.ingredients.slice();
}

// Functionality to Add the INGREDIENTS
addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
}
}