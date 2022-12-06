// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa


// include a function name description which should display: Recipe "title" has 2 servings and take so much time for preparation
const recipe = {
	title: "Mole",
	servings: 2,
	duration:"30 mins",
	ingredients: ["cinnamon", "cumin", "cocoa"]
}

console.log(recipe.title);
console.log(recipe.servings);
for(let i=0;i<recipe.ingredients.length;i++){
	console.log(recipe.ingredients[i])
}

for(let key in recipe){
	console.log(key,recipe[key]);
	// if(Array.isArray(recipe[key])){
	// 	for(let i=0;i<recipe[key].length;i++){
	// 		console.log(recipe[key][i])
	// 	}
	// }
}