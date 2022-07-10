const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const ul = document.querySelector('#ingredients');

  ingredients.forEach(element => {
  const ingredientRef  = document.createElement('li')
   ingredientRef.textContent = element;
   ul.appendChild(ingredientRef)
});




 
