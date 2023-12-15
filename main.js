const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');
const headerNav = document.querySelector('#header-nav');
navBtn.onclick = () => {
  if (nav.classList.toggle('open')) {
    navBtnImg.src = "./img/mobile-menu/menu-close.svg";
    headerNav.style.justifyContent = "center";
  } else {
navBtnImg.src = "./img/mobile-menu/menu-open.svg"
headerNav.style.justifyContent = "space-between";
  }
}
