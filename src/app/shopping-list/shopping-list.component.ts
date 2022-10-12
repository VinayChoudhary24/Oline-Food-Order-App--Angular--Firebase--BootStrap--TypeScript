import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  // add Ingrediants
  ingredients: Ingredient[];

  constructor( private slService: ShoppingListService ) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientChanged
    // ADD a LISTENER to Display the ADDED Ingredients
    .subscribe( (ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    })
  }

}
