function openMessage(element) {
  let displayValue = document.getElementById(element);
  if (displayValue.style.display === "none") {
    displayValue.style.display = "flex";
  } else {
    displayValue.style.display = "none";
  }
}

/* CLOSE BUTTON FOR NOW */

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

