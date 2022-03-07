(function () {
    'use strict';
    window.onscroll = function () {
      const ud_header = document.querySelector('.header');
      const sticky = ud_header.offsetTop;
      if (window.pageYOffset > sticky) {
        ud_header.classList.add('sticky');
      } else {
        ud_header.classList.remove('sticky');
      }
      const backToTop = document.querySelector('.back-to-top');
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        backToTop.style.display = 'flex';
      } else {
        backToTop.style.display = 'none';
      }
    };
    let navbarToggler = document.querySelector('#navbarToggler');
    const navbarCollapse = document.querySelector('#navbarCollapse');
    navbarToggler.addEventListener('click', () =>{
      navbarToggler.classList.toggle('navbarTogglerActive');
      navbarCollapse.classList.toggle('am');
    });
    document.querySelectorAll('#navbarCollapse ul li:not(.submenu-item) a').forEach((e) =>e.addEventListener('click', () =>{
      navbarToggler.classList.remove('navbarTogglerActive');
      navbarCollapse.classList.add('am');
    }));
    const submenuItems = document.querySelectorAll('.submenu-item');
    submenuItems.forEach((el) =>{
      el.querySelector('a').addEventListener('click', () =>{
        el.querySelector('.submenu').classList.toggle('am');
      });
    });
    new WOW().init();
    function scrollTo(element, to = 0, duration = 500) {
      const start = element.scrollTop;
      const change = to - start;
      const increment = 20;
      let currentTime = 0;
      const animateScroll = () =>{
        currentTime += increment;
        const val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if (currentTime < duration) {
          setTimeout(animateScroll, increment);
        }
      };
      animateScroll();
    }
    Math.easeInOutQuad = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return ( - c / 2) * (t * (t - 2) - 1) + b;
    };
    document.querySelector('.back-to-top').onclick = () =>{
      scrollTo(document.documentElement);
    };
  }) ();
  