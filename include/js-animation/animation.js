$( document ).ready(function() {
    let tap__title = document.getElementById('tap__title');
    let firstArrow = document.getElementById('firstArrow');
  
    if (tap__title){ //если на странице нет такого айди то будет ошибка
      tap__title.addEventListener ("click", function (e) {
        firstArrow.classList.toggle('_rotate');
      });
    
      let menu_containers = document.querySelectorAll('.menu_container');
      let arrows = document.querySelectorAll('.menu__item_arrowDown');
    
      if (arrows.length > 0) {
        for (let i = 0; i < arrows.length; i++) {
          const arrow = arrows[i];
          const menu_container = menu_containers[i];
    
          menu_container.addEventListener ("click", function (e) {
            arrow.classList.toggle('_rotate');
          });
        }
      }
    }
  
    //анимация плавное проявление
    let animItems = document.querySelectorAll('._view');
  
    if (animItems.length > 0) {
      window.addEventListener('scroll', animOnScroll);
      function animOnScroll(params) {
        for (let i = 0; i < animItems.length; i++){
          const animItem = animItems[i];
          const animItemHeight = animItem.offsetHeight;
          const animItemOffset = offset(animItem).top;
          const animStart = 6; //при достижении 1/6 высоты
  
          let animItemPoint = window.innerHeight - animItemHeight / animStart;
  
          if (animItemHeight > window.innerHeight) { //если высота обьекта выше высоты окна браузера
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
          }
  
          if ((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight)){
            animItem.classList.add('_active');
          } else {
            if (!animItem.classList.contains('_no-repeat')){
              animItem.classList.remove('_active');
            }
          }
        }
      }
  
      function offset(el) {
        const rect = el.getBoundingClientRect(),
          scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left :rect.left + scrollLeft }
      }
      
  
      setTimeout(() => {
        animOnScroll();
      }, 150);
  
    }
  });