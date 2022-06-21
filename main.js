const burger= document.querySelector(".burger");
const navMenu=document.querySelector(".nav-menu");
burger.addEventListener("click",()=>{
  navMenu.classList.toggle("active");
  burger.classList.toggle("active");
})


document.querySelectorAll(".nav-menu").forEach(n => n.addEventListener("click",()=>{
  navMenu.classList.remove("active");
  burger.classList.remove("active");
}))
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-8vh";
    navMenu.classList.remove("active");
    burger.classList.remove("active");
  }
  prevScrollpos = currentScrollPos;
}
