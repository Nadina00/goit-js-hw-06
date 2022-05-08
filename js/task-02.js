
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl = ingredients.map(ingredient =>{
const ingredientEl = document.createElement("li");
ingredientEl.classList.add('item');
ingredientEl.textContent = ingredient;
return ingredientEl; })
console.log(ingredientsEl);


const listEl = document.querySelector("#ingredients");
listEl.append(...ingredientsEl);
