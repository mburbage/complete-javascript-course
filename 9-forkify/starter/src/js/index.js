import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';
import * as likesView from './views/likesView';
import { async } from 'regenerator-runtime';
import { elements, renderLoader, clearLoader } from './views/base';
import Search from './models/Search';
import List from './models/List';
import Recipe from './models/Recipe';
import Likes from './models/Likes';

/**
 * Global state of the app
 * - Search Object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
 */
const state = {};

/**
 * Search Controller
 */
const controlSearch = async () => {
	// Get the query from the view
	const query = searchView.getInput(); //TODO

	if (query) {
		// New search object and add to state
		state.search = new Search(query);

		// Prepare UI for results
		searchView.clearInput();
		searchView.clearResults();
		renderLoader(elements.searchRes);

		try {
			// Search for recipes
			await state.search.getResults();

			// Render results on the UI
			clearLoader();
			searchView.renderResults(state.search.result);
		} catch (error) {
			clearLoader();
			console.log(error);
			alert(error);
			
		}
		
	}
}

elements.searchForm.addEventListener('submit', e => {
	e.preventDefault();
	controlSearch();
});


elements.searchResPages.addEventListener('click', e => {
	const btn = e.target.closest('.btn-inline');
	if (btn) {
		const goToPage = parseInt(btn.dataset.goto, 10);
		searchView.clearResults();
		searchView.renderResults(state.search.result, goToPage);
	}
});

/**
 * Recipe Controller
 */

 const controlRecipe = async () => {
	 // Get the ID from the url
	 const id = window.location.hash.replace('#', '');

	 if (id) {
		recipeView.clearRecipe();
			
		 // Prepare the UI for changes
		 renderLoader(elements.recipe);

		 // Highlight selected search item
		 if (state.search) {
			 searchView.highlightSelected(id);
		 }
		 
		
		 // Create recipe data object
		 state.recipe = new Recipe(id);

		try {
			// Get recipe data
			await state.recipe.getRecipe();
			state.recipe.parseIngredients();
		 
			// Calculate servings and time
			state.recipe.calcTime();
			state.recipe.calcServings();


			// Render recipe
			clearLoader();
			recipeView.renderRecipe(
				state.recipe,
				state.likes.isLiked(id));


		} catch (error) {
			console.log(error);
			alert(error);
		}
		 

	 }
 }

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));

/**
 * List Controller
 */

const controlList = () => {
	// Create a new list if there is none yet
	if (!state.list) state.list = new List();

	// Add each ingredient to the list
	state.recipe.ingredients.forEach( el => {
		const item = state.list.addItem(el.count, el.unit, el.ingredient);
		listView.renderItem(item);
	})
}

// Handel delete of list items
elements.shopping.addEventListener('click', e => {
	const id = e.target.closest('.shopping__item').dataset.itemid;

	// Handle the delete button
	if (e.target.matches('.shopping__delete, .shopping__delete *')) {
		// Delete from state
		state.list.deleteItem(id);

		// Delete from UI
		listView.deleteItem(id);

		// Update list count
	} else if (e.target.matches('.shopping__count-value')) {
		const val = parseFloat(e.target.value);
		state.list.updateCount(id, val);
	}
})

/**
 * Like Controller
 */

window.addEventListener('load', () => {
	state.likes = new Likes();

	// Restore Likes
	state.likes.readStorage();

	// Toggle buttons
	likesView.toggleLikeMenu(state.likes.getNumLikes());

	// Render existing likes
	state.likes.likes.forEach(like => likesView.renderLike(like));
})

const controlLike = () => {
	if (!state.likes) state.likes = new Likes();
	const id = state.recipe.id;
	// User has not liked this recipe
	if (!state.likes.isLiked(id)){
		// Add like to the state
		const newLike = state.likes.addLike(
			id,
			state.recipe.title,
			state.recipe.author,
			state.recipe.img
		);
		// Toggle the like button
		likesView.toggleLikeBtn(true);

		// Add like to the UI list
		likesView.renderLike(newLike);
		
	// User has liked this recipe
	} else {

		// Remove like to the state
		state.likes.deleteLike(id);

		// Toggle the like button
		likesView.toggleLikeBtn(false);

		// Remove like to the UI list
		likesView.deleteLike(id);

	}
	likesView.toggleLikeMenu(state.likes.getNumLikes());
}


// Handle recipe button clicks

elements.recipe.addEventListener('click', e => {
	if (e.target.matches('.btn-decrease, .btn-decrease *')) {
		// Decreased is clicked
		if (state.recipe.servings > 1) {
			state.recipe.updateServings('dec');
			recipeView.updateServingsIngredients(state.recipe);
		}		
	} else if (e.target.matches('.btn-increase, .btn-increase *')) {
		// Increase clicked
		state.recipe.updateServings('inc');
		recipeView.updateServingsIngredients(state.recipe);
	} else if (e.target.matches('.recipe__btn--add, .recipe__btn--add *')) {
		// Add to shopping list
		controlList();
	} else if (e.target.matches('.recipe__love, .recipe__love *')) {
		// Like Controller
		controlLike();
	}
});