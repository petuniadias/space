/* HEADER */
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
