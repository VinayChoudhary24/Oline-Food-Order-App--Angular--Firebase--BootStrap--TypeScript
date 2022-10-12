import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  // Use @ViewChild to REFERENCE the Inputs
  @ViewChild('nameInput', { static: false })  nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;


  // Add the shopping-list.service here to USE it
  constructor( private slService: ShoppingListService ) { }

  ngOnInit() {
  }

  // ADD Functionality
  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.slService.addIngredient(newIngredient);
  }

  
  // // DELETE Functionality
  // onDeleteItem() {}

  
  // // CLEAR Functionality
  // onClearItem() {}

}
