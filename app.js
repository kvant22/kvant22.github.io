// ! Выбираем все пункты меню
const menuItems = document.querySelectorAll('.aa');

// для каждого пункта меню
menuItems.forEach(item => {
  // выбираем соответствующий заголовок
  const target = document.querySelector(item.getAttribute('href'));

  // при нажатии на пункт меню
  item.addEventListener('click', (event) => {
    // отменяем стандартное поведение ссылки
    event.preventDefault();

    // плавно прокручиваем к нужному заголовку
    target.scrollIntoView({behavior: 'smooth'});
  });
});


// ! Кнопка проскролить наверх
window.addEventListener('scroll', function() {
  var button = document.getElementById('scroll-to-top');
  if (window.pageYOffset > 0) {
    button.classList.add('show');
  } else {
    button.classList.remove('show');
  }
});


document.getElementById('scroll-to-top').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});
