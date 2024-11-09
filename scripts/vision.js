const bodyClassElement = document.body.classList;
const navButtonElement = document.body.querySelector('.js-vision-button');

function func1 (){
  if (bodyClassElement.value === 'vision.html'){
    navButtonElement.classList.add('button-selected');
  };
};
func1();
