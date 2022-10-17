import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  // add Ingrediants
  ingredients: Ingredient[];

  // Store the Subject Observable to Clean it Up i.e DESTROY
  private subscription: Subscription;

  constructor( private slService: ShoppingListService ) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();

    // Store the Subscription in the Variable/Property
    this.subscription = this.slService.ingredientChanged
    // ADD a LISTENER to Display the ADDED Ingredients
    .subscribe( (ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    })
  }

  // Destroyin the Subject Event
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
