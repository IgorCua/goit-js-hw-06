const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

function addIngredients(ingredients){
  const list = document.querySelector('ul');    

  const arr = ingredients.map((e, i) => {
    i = document.createElement('li');
    i.classList.add('item');
    i.textContent = e;
    return i;
  });

  list.append(...arr);
}
addIngredients(ingredients);
