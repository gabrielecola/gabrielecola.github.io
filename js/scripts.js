/*!
* Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

function matchHeightPortfolio() {
    //$('.portfolio__innerWrapper').matchHeight({
      //byRow: false
    //});

    $('.port__proj--title').matchHeight({
      byRow: false
    });
}

function matchHeightBlog() {
  $('.blog__matchHeight').matchHeight({
  });
}

function projectFiltering() {
  jQuery('.portfolio__filter--wrapper > span').on('click', function(){
    var filter = jQuery(this).attr('data');
    
    jQuery('.resume-section-content').attr('id', filter);

    if(filter == 'All') {

    } else {
      jQuery('.projectLink').css({
        'transform' : 'scale(0)'
      });

      setInterval(myTimer, 400);

        function myTimer() {
          jQuery('.projectLink').css({
            'display' : 'none'
          });
        }

        setInterval(myTimer2, 800);

        function myTimer2() {
          jQuery('.projectLink').each(function(){
            var projectCat = jQuery(this).attr('data');
            if (projectCat == filter) {
              jQuery(this).css({
                'display' : 'block',
                'transform' : 'scale(1)'
              });
            }
            
          });
        }

      
    }
  });
}

function filteringPortfolio() {
  //var filterizd = $('.filtr-container').filterizr({	});

  $('.portfolio__filter--wrapper span').click(function(){
    var value = $(this).attr('data-filter');
    if (value == 'all') {
      $('.filtr-item').show('1000');
    } else {
      $('.filtr-item').not('.' + value).hide('1000');
      $('.filtr-item').filter('.'+value).show('1000');
    }
  });

  jQuery('.portfolio__filter--wrapper span').on('click', function(){
    jQuery('.portfolio__filter--wrapper span').removeClass('active');
    jQuery(this).toggleClass('active');
  });
}


jQuery( document ).ready(function() {
  if($(window).width()>992) {
    matchHeightPortfolio();
    matchHeightBlog();
  }
    //projectFiltering();
    filteringPortfolio();


    $('.venobox').venobox()
});

$( window ).resize(function() {
  if($(window).width()>992) {
    matchHeightPortfolio();
    matchHeightBlog();
  }
});
