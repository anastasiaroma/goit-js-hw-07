const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsEl = document.querySelector('#ingredients');
const addIngredient = ingredients => {
    return ingredients.map(ingredient => {
        const element = document.createElement('li');
        element.textContent = ingredient;
        return element;
    });
};
const element = addIngredient(ingredients);
ingredientsEl.append(...element);