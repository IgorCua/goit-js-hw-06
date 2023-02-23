const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

window.addEventListener('load', ()=>{
  if (document.querySelector('title').text !== 'Task 2' ) {
    return;
  } else {
    return addIngredients(ingredients);
  }
})

function addIngredients(ingredients){
  const list = document.querySelector('ul');    
  
  ingredients.forEach((e, i) => {
    i = document.createElement('li');
    i.textContent = e;
    i.classList.add('item');
    list.append(i);
  });
}