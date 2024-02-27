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
