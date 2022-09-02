

const nav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
//when someone clicks the hamburger menu;
navToggle.addEventListener('click', () => {
   
    const visibility = nav.getAttribute('data-visible');
     if(visibility === 'false'){
         nav.setAttribute('data-visible', true); // if it's closed open it
         navToggle.setAttribute('aria-expanded', true);
        
        }else{
         nav.setAttribute('data-visible', false);  //; when its open, close it
         navToggle.setAttribute('aria-expanded', false); 

     }
     console.log(navToggle.getAttribute('aria-expanded'));
})



//this will make backgroung color transition from one color to another when scrolling
// function bhChanger(){
//   if(this.scrollY > this.innerHeight / 2){
//     document.querySelector('body').classList.add('bg-active-light');
//   }else{
//     document.querySelector('body').classList.remove('bg-active-light');
//   }
// }
// window.addEventListener('scroll', bhChanger);



//this will make sections background transition from one color to another while scrolling

$(function () {
  'use strict';
  var view = $(window).height();
  $('.part')
      .height(view)
      .scrollie({
          scrollOffset: -50,
          scrollingInView: function (elem) {
              var bgColor = elem.data('background');
              $('body').css('background-color', bgColor);
          }
      });
});
