import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

const recipeUrl = 'http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=KPTNrvis';

@Injectable()
export class RecipeService {

	private recipes: Recipe[] = [
		new Recipe('Yummy Recipe', 'This is a recipe that is yummy.', recipeUrl, [
			new Ingredient('Mushroom', 1),
			new Ingredient('Chicken', 1),
			new Ingredient('Spinach', 1),
			new Ingredient('Noodles', 1)
		])
	];

	constructor(private shoppingListService: ShoppingListService) { }

	getRecipes() {
		// adding slice will ensure that it is only a copy of the recipes array
		return this.recipes.slice();
	}

	getRecipe(index: number) {
		return this.recipes[index];
	}

	addIngredientsToShoppingList(ingredients: Ingredient[]) {
		this.shoppingListService.addIngredientsFromRecipe(ingredients);
	}
}