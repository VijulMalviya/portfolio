var nav = document.querySelector('.nav');
var menu = document.querySelector('#menu');
var cancel = document.querySelector('#cancel');
var nav_outer = document.querySelector('nav');



// object.addEventListener("scroll", scrollfunction());

//  var scrollfunction =  () => {
//    debugger
//     if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
//        console.log('done')
//       nav_outer.style.backgroundColor = "white";
      
//     } else {
//       nav_outer.style.backgroundColor = "transparent";
      
//     }
// }


var typed = new Typed('.type', {
  strings: ["UI/UX Developer", "Web and Graphic Designer", "React JS Developer"],
  showCursor: false,
  loop:true,
  loopCount: Infinity, 
  
  typeSpeed: 100
});

menu.addEventListener("click",() => {
    nav.style.width = "50vw";
 })
cancel.addEventListener("click", () => {
     nav.style.width = "0vw";
 })








 




  