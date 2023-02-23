
document.getElementById('header').innerHTML = `

`;


function openMenu() {
    document.getElementById('fullmenu').style.display = 'flex';
}

const menuBtn = document.querySelector('.burger');
let isMenuOpen = false;


menuBtn.addEventListener('click', () => {
  if (!isMenuOpen) {
    document.getElementsByClassName("burger").style.display="block"
    isMenuOpen = true;
  } else {
    document.getElementsByClassName("burger").style.display="none "
    isMenuOpen = false;
  }
});