const bodyClassElement = document.body.classList;
const navButtonElement = document.body.querySelector('.js-news-button');

function func1 (){
  if (bodyClassElement.value === 'news.html'){
    navButtonElement.classList.add('button-selected');
  };
};
func1();
