//ao clicar aparece o pop-up
const projectBoxes = document.querySelectorAll('.js-project-box');
projectBoxes.forEach((box) => {
  box.addEventListener('click', () => {
    openMessage();
  });
});

function openMessage() {
  document.querySelectorAll('.js-overlay').forEach((overlay) => {
    if (overlay.style.display === "none") {
      overlay.style.display = "flex";
    } else {
      overlay.style.display = "none";
    }
  });

  //ao clicar no x o pop-up é fechado
  document.querySelectorAll('.js-close').forEach((btn) => {
    btn.addEventListener('click', close);
  });
}

function close() {
  document.querySelectorAll('.js-overlay').forEach((overlay) => {
    overlay.style.display = "none";
  });
}


/* CLOSE BUTTON FOR NOW */
/*
function closeMessage() {
  let displayValue = document.getElementById('pageStats');
  let displayValue1 = document.getElementById('welcomeMessage');
  let displayValue2 = document.getElementById('carouselSlider');

  if (displayValue.style.display === "flex") {
    displayValue.style.display = "none";
  } else if (displayValue1.style.display === "flex") {
    displayValue1.style.display = "none";
  } else if (displayValue2.style.display === "flex") {
    displayValue2.style.display = "none";
  } else {
    displayValue2.style.display = "flex";
  }

}

*/

const nav = document.querySelector('nav');
let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', ()=>{
  let currentScrollPos = window.pageYOffset;
  if(prevScrollPos < currentScrollPos){
    nav.classList.add("hide");
  } else {
    nav.classList.remove("hide");
  }

  prevScrollPos = currentScrollPos;
})

