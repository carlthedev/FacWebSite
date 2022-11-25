const currOff = document.querySelector(".light")
const currOn = document.querySelector(".dark")
const colorVariable = '--light-theme'
const colorVariable2 = '--dark-back'

currOff.addEventListener('click', () => {
  currOff.style.display = 'none';
  currOn.style.display = 'inline-block';
  document.documentElement.style.setProperty(colorVariable, 'black');
  document.documentElement.style.setProperty(colorVariable2, 'white');
});

currOn.addEventListener('click', () => {
  currOn.style.display = 'none';
  currOff.style.display = 'inline-block';
  document.documentElement.style.setProperty(colorVariable, 'white');
  document.documentElement.style.setProperty(colorVariable2, 'black');
});

