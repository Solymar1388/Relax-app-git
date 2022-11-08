<<<<<<< HEAD
let text = `It's time to relax...`;
let i = 0;
let speed = 200;

function type() {
  if (i < text.length) {
    document.querySelector('#title').textContent += text.charAt(i);
    i++;
    setTimeout(type, speed);
  }
}

type();

const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.addEventListener('mouseover', () => {
    removeFocus();
    card.classList.add('rotated');
  });

  removeFocus = () => {
    cards.forEach((card) => {
      card.addEventListener('mouseleave', () => {
        card.classList.remove('rotated');
      });
    });
  };
});
=======
let text = `It's time to relax...`;
let i = 0;
let speed = 200;

function type() {
  if (i < text.length) {
    document.querySelector('#title').textContent += text.charAt(i);
    i++;
    setTimeout(type, speed);
  }
}

type();

const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.addEventListener('mouseover', () => {
    removeFocus();
    card.classList.add('rotated');
  });

  removeFocus = () => {
    cards.forEach((card) => {
      card.addEventListener('mouseleave', () => {
        card.classList.remove('rotated');
      });
    });
  };
});
>>>>>>> 84d2485a61b07f60cc3ea50f48976808797f4a23
