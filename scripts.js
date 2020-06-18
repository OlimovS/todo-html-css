const slideSideNav = () => {
   const sideNav = document.querySelector('.side-nav');
   const burger = document.querySelector(".burger");

   burger.addEventListener('click', () => {
      sideNav.classList.toggle('nav-active');
      
      burger.classList.toggle('toggle');
   });

}

slideSideNav()
