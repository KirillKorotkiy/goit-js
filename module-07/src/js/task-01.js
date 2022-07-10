const quantityOfCategories = document.querySelectorAll('.item')

console.log(`В списке ${quantityOfCategories.length} категории.`)

quantityOfCategories.forEach(element => {
    console.log(`Категория: ${element.querySelector('h2').textContent}`);
    console.log(
      `В категории: ${element.querySelectorAll('li').length} элементов`,
    )})

