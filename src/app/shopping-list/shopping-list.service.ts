// import { EventEmitter } from "@angular/core";

// OBSERVABLE Subject to emit Event
import { Subject } from "rxjs";

import { Ingredient } from "../shared/ingredients.model";

// Providing the shopping-list.service in app.module.ts and Add it into the Constructor of the Component where we want to Use it 
export class ShoppingListService {

  // Add Subject Emit event rather than EvventEmitter -- to all the Services Files
  ingredientChanged = new Subject<Ingredient[]>();

    // After Adding Observables we Dont need this -- to all the Services Files
  // When we ADD a Ingredient in the Shopping List
    // ingredientChanged = new EventEmitter<Ingredient[]>();

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
    // After Adding Observables, we Need to Call NEXT() and Not emit()
    this.ingredientChanged.next(this.ingredients.slice());
}

// Add this Method to add ingredients to the ShoppingList
addIngredients(ingredients: Ingredient[]) {
  // Use Spread Operator to Push the Ingredients
  // Spread will Convert the Array of Elements into List of Elements
  this.ingredients.push(...ingredients);
  // To Pass a Copy of it
  this.ingredientChanged.next(this.ingredients.slice());
}

}