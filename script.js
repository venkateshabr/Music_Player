
const carousel2 = document.querySelector('.carousel2');
const carousel1 = document.querySelector('.carousel1');
const carousel3 = document.querySelector('.carousel3');

carousel2.addEventListener('mouseover', () => {
  carousel1.classList.add('hovered');
  carousel3.classList.add('hovered');
});

carousel2.addEventListener('mouseout', () => {
  carousel1.classList.remove('hovered');
  carousel3.classList.remove('hovered');
});

carousel3.addEventListener('mouseover', () => {
    carousel1.classList.add('hovered');
    carousel2.classList.add('hovered');
  });
  
  carousel3.addEventListener('mouseout', () => {
    carousel1.classList.remove('hovered');
    carousel2.classList.remove('hovered');
  });

//   $(".fa-play").hover(function(){
//     $(".onism-container").css({
//         "opacity":"0.7",
//       });
//   },)
   