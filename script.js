var nav = document.querySelector('.nav');
var menu = document.querySelector('#menu');
var cancel = document.querySelector('#cancel');
var nav_outer = document.querySelector('nav');




// window.addEventListener( "scroll", () => {
//     if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
//         alert('vijul');
//       nav_outer.style.backgroundColor = "white";
      
//     } else {
//       nav_outer.style.backgroundColor = "transparent";
      
//     }
// })

menu.addEventListener("click",() => {
    nav.style.width = "100vw";
 })
cancel.addEventListener("click", () => {
     nav.style.width = "0vw";
 })






  