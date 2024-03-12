//АНИМАЦИЯ 

document.addEventListener('DOMContentLoaded', function() {
  const bubbles = document.querySelectorAll('.bubble');

  function showBubbles() {
    bubbles.forEach((bubble, index) => {
      setTimeout(() => {
        bubble.classList.add('show');
      }, index * 1200); // Adjust the delay time as needed
    });
  }

  function checkVisibility() {
    const windowHeight = window.innerHeight;
    const chatTop = document.querySelector('.chat').getBoundingClientRect().top;

    if (chatTop < windowHeight * 0.75) {
      showBubbles();
      window.removeEventListener('scroll', checkVisibility);
    }
  }

  window.addEventListener('scroll', checkVisibility);
});

//ВАЛИДАЦИЯ ФОРМЫ 
const inputElements = document.querySelectorAll('.form__input');
document.addEventListener("DOMContentLoaded", function() {
  inputElements.forEach(function(inputElement) {
      inputElement.addEventListener('focus', function() {
          this.classList.add('focused'); // Добавляем класс при фокусировке
      });

      inputElement.addEventListener('blur', function() {
          this.classList.remove('focused'); // Удаляем класс при потере фокуса
      });
  });
});

function checkValid () {
  if (inputElements.values==='') {
    console.log('no');
  }
}



const button = document.querySelector('.form-button');

button.addEventListener('click', checkValid() )




