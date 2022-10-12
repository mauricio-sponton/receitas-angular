import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Bolo', 'Bolo feito de limão.', 'https://claudia.abril.com.br/wp-content/uploads/2020/02/receita-bolo-musse-de-limao.jpg?quality=85&strip=info&resize=680,453'),
    new Recipe('Strogonoff', 'Feito usando frango ;)', 'https://www.unileverfoodsolutions.com.br/dam/global-ufs/mcos/SLA/calcmenu/recipes/BR-recipes/chicken-&-other-poultry-dishes/strogonoff-de-frango/main-header.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
