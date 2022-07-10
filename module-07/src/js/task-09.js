function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  const btnToChangeColor = document.querySelector('.change-color');
  const spanToChangeColor = document.querySelector('.color');
  const bodyColor = document.querySelector('body')


  btnToChangeColor.addEventListener('click', () =>{
    bodyColor.style.backgroundColor =  `${getRandomHexColor()}`
    spanToChangeColor.textContent = `${getRandomHexColor()}`
  })


  