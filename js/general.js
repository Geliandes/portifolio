function btnMenu() {
  let button = document.querySelector('#btnMenu');
  let menuMobile = document.querySelector('#menuMobileContainer');

  if (button.classList == 'btnActive') {
    button.classList.remove('btnActive');
    button.classList.add('opened');
    menuMobile.style.width = '0%';
  } else {
    button.classList.add('btnActive');
    button.classList.remove('opened');
    menuMobile.style.width = '100%';
  }
}

function closeMenu() {
  closeMenuOption = document.querySelector('#btnMenu');

  closeMenuOption.click();
}
