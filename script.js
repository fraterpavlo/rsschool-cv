const waveButton = document.querySelector('.wave-btn');
const morePage = document.querySelector('.more-page');

function showMorePage() {
  morePage.classList.toggle('none');
  waveButton.classList.toggle('none');
}

waveButton.addEventListener('click', showMorePage);

(function logCrossCheck() {
  console.log("вёрстка валидная +10;\n вёрстка семантическая +20;\n в footer есть ссылка на гитхаб автора работы, год создания приложения, логотип курса со ссылкой на курс +10;\n для оформления СV используются css-стили +10;\n при уменьшении масштаба страницы браузера вёрстка размещается по центру по горизонтали, а не сдвигается в сторону +10;\n на странице СV есть фото или аватарка автора, пропорции изображения не искажены, у изображения есть атрибут alt +10;\n навигация, контакты для связи и перечень навыков оформлены в виде списка +10;\n Содержание CV +30;\n CV выполнено на английском языке +10\n студент засабмитил в rs app ссылку на своё CV, задеплоенное на gh-pages +10; \n \n Oбщая самооценка 120");
} )();