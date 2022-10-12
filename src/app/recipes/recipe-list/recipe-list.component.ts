import { Component, OnInit } from '@angular/core';

// For Recipe Array
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  // This Array Contains all the Recipes i.e Recipe MODEL
  recipes: Recipe[];

  // Add the recipe.service here to USE it
  constructor( private recipeService: RecipeService ) { }

  ngOnInit() {
    // With This we Will get the Copy of the ARRAY
    this.recipes = this.recipeService.getRecipes();
  }

}