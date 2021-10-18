// Dropdown Menu
const linksItem = document.querySelectorAll('.links__item');

// Hamburger menu
const hamburgerBtn = document.querySelector('.hamburger');
const header = document.querySelector('.header');
const body = document.querySelector('body');

// Accordion Menu
const accordionItem = document.querySelectorAll('.accordion__item');
const accordionHeadline = document.querySelectorAll(
  '.accordion__item-headline'
);
const accordionCollapse = document.querySelectorAll('.accordion__collapse');
const accordionBody = document.querySelectorAll('.accordion__item-body');
const accordionBodyItem = document.querySelectorAll('.accordion__item-body a');

hamburgerBtn.addEventListener('click', () => {
  header.classList.toggle('active');
  body.classList.toggle('scroll-lock');
});

accordionBodyItem.forEach(item => {
  item.addEventListener('click', () => {
    body.classList.toggle('scroll-lock');
    header.classList.remove('active');
  });
});

accordionHeadline.forEach((headline, index) => {
  headline.addEventListener('click', () => {
    let height = accordionBody[index].offsetHeight;

    if (!headline.classList.contains('openned')) {
      accordionHeadline.forEach((item, index) => {
        item.classList.remove('openned');
        accordionCollapse[index].style.height = '0px';
      });
      accordionCollapse[index].style.height = `${height}px`;
      headline.classList.add('openned');
    } else {
      height = 0;
      accordionCollapse[index].style.height = `${height}px`;
      headline.classList.remove('openned');
    }
  });
});

window.addEventListener('click', dropdownMenu);

// Dropdown menu function
function dropdownMenu(e) {
  if (
    e.target.classList.contains('links__item') &&
    !e.target.classList.contains('active')
  ) {
    linksItem.forEach(item => {
      item.classList.remove('active');
    });
    e.target.classList.add('active');
  } else if (
    e.target.classList.contains('links__item') &&
    e.target.classList.contains('active')
  ) {
    e.target.classList.remove('active');
  } else {
    linksItem.forEach(item => {
      item.classList.remove('active');
    });
  }
}
