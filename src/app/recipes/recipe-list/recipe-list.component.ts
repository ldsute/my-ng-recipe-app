import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe',
               'This is a test',
               'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYORsFvHE2gwtLzjfPXuS5uL1Gc6a03mpq0VDw8qL6-6Hnkne_7Q'),
               new Recipe('A test recipe',
               'This is a test',
               'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYORsFvHE2gwtLzjfPXuS5uL1Gc6a03mpq0VDw8qL6-6Hnkne_7Q'),
               new Recipe('A test recipe',
               'This is a test',
               'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYORsFvHE2gwtLzjfPXuS5uL1Gc6a03mpq0VDw8qL6-6Hnkne_7Q'),
               new Recipe('A test recipe',
               'This is a test',
               'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYORsFvHE2gwtLzjfPXuS5uL1Gc6a03mpq0VDw8qL6-6Hnkne_7Q'),
               new Recipe('A test recipe',
               'This is a test',
               'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYORsFvHE2gwtLzjfPXuS5uL1Gc6a03mpq0VDw8qL6-6Hnkne_7Q')
  ];

  constructor() { }

  ngOnInit() {
  }

}
