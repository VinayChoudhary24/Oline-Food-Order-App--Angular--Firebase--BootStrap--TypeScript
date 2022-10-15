import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  // Store ID
  id: number;

  // Add a Property to show if the User is in editMode or NOT
  editMode: boolean = false;

  // INJECT ActivatedRoute to use the routes
  constructor( private route: ActivatedRoute ) { }

  ngOnInit() {
    // Here we Retrieve ID and Also subscribe to react to Changes
    this.route.params.subscribe( (params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
    })
  }

}
