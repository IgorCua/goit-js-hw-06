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
  
  const potatoes = document.createElement('li');
  potatoes.textContent = ingredients[0];
  potatoes.classList.add('item');

  const mushrooms = document.createElement('li');
  mushrooms.textContent = ingredients[1];
  mushrooms.classList.add('item');

  const garlic = document.createElement('li');
  garlic.textContent = ingredients[2];
  garlic.classList.add('item');

  const tomatoes = document.createElement('li');
  tomatoes.textContent = ingredients[3];
  tomatoes.classList.add('item');

  const herbs = document.createElement('li');
  herbs.textContent = ingredients[4];
  herbs.classList.add('item');

  const condiments = document.createElement('li');
  condiments.textContent = ingredients[5];
  condiments.classList.add('item');
  
  list.append(
    potatoes,
    mushrooms,
    garlic,
    tomatoes,
    herbs,
    condiments
  );
}
addIngredients(ingredients);