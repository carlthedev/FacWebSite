const currOff = document.querySelector(".light");
const currOn = document.querySelector(".dark");
const colorVariable = '--light-theme';
const colorVariable2 = '--dark-back';

// This event listener will handle what happens when toggle is first clicked from default load page
currOff.addEventListener('click', () => {
  currOff.style.display = 'none';
  currOn.style.display = 'inline-block';
  document.documentElement.style.setProperty(colorVariable, 'black');
  document.documentElement.style.setProperty(colorVariable2, 'white');
});

// This event listener will handle what happens when toggle is clicked from on position
currOn.addEventListener('click', () => {
  currOn.style.display = 'none';
  currOff.style.display = 'inline-block';
  document.documentElement.style.setProperty(colorVariable, 'white');
  document.documentElement.style.setProperty(colorVariable2, 'black');
});

