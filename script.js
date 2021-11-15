const sidebar = document.querySelector('.sidebar');
const burgerMenu = document.querySelector('.hamburger');
const burgerMenuIcon = document.querySelector('.hamburger img');
const main = document.querySelector('main');
const iamges = document.querySelectorAll('img');

burgerMenu.addEventListener('click', () => {
    sidebar.classList.toggle('active');

    //   toggle burgerMenu and close icon
  if (sidebar.classList.contains("active")) {
    burgerMenuIcon.src = "./icons/close.svg";
  } else {
    burgerMenuIcon.src = "./icons/hamburger.svg";
  }
});

main.addEventListener('click', closeSidebar);

function closeSidebar() {
  sidebar.classList.remove('active');
  burgerMenuIcon.src = "./icons/hamburger.svg";
}

// disable context menu
iamges.forEach(img => {
  img.addEventListener('contextmenu', e => {
    e.preventDefault();
  })
})