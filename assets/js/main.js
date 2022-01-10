/**
* Template Name: Sailor - v4.7.0
* Template URL: https://bootstrapmade.com/sailor-free-bootstrap-theme/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
function showb() {

  var name = document.getElementById("name").value;
  var Email= document.getElementById("email").value;
  var amount = document.getElementById("amount").value;
  var attendee= document.getElementById("attendee").value;


   firebase.database().ref("User/"+ name).set({
          name : name,
          email : Email,
          amount: amount,
          attendee: attendee
        }, function(error) {
          if (error) {
            // The write failed...
            alert("Not done");
          } else {
              alert("DONE");
            
         
          }
        });
} 

function view2(_n,_e,_m,_w){
  var a=document.getElementById('yo');
  var div=document.createElement('div');



div.style.padding = "10px";
div.style.margin = "10px";
div.style.backgroundColor = "#fff";
div.style.borderRadius = "2%";

  div.innerHTML = `<h4 style='color: rgb(54, 52, 52); font-weight: ; "font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;"'>${_n}</h4> <h6 style='color: rgb(54, 52, 52); font-size: medium'> ${_m}<br></h6>`
  a.appendChild(div);

  }
  function view(){

    firebase.database().ref('User/').once('value').then(function(snapshot) {
    snapshot.forEach(function(child) {
    var n = child.val().name;
    var e = child.val().email;
    var m = child.val().comment;
    var w = child.val().website;
    view2(n,e,m,w);
      

      
    });      
    
            
     }, function(error) {
         if (error) {

         } else {
            alert("view done");
         }
       });
}

function show() {

    var name = document.getElementById("name").value;
    var website= document.getElementById("website").value;
    var email= document.getElementById("email").value;
    var comment=document.getElementById("comment").value;
    if(name==""||email==""||website==""||comment=="")
    {
      alert('Provide all information');
    }

    else{
     firebase.database().ref("User/"+ name).set({
            comment: comment,
            name : name,
            website : website,
            email : email
            
          }, function(error) {
            if (error) {
              // The write failed...
              alert("Not done");
            } else {
                view();
                document.getElementById("name").value="";
                document.getElementById("email").value="";
                document.getElementById("comment").value="";
                document.getElementById("website").value="";
                alert("DONE");
                
            }
          });
        }
 } 


(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Hero carousel indicators
   */
  let heroCarouselIndicators = select("#hero-carousel-indicators")
  let heroCarouselItems = select('#heroCarousel .carousel-item', true)

  heroCarouselItems.forEach((item, index) => {
    (index === 0) ?
    heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "' class='active'></li>":
      heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "'></li>"
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Initiate portfolio details lightbox 
   */
  const portfolioDetailsLightbox = GLightbox({
    selector: '.portfolio-details-lightbox',
    width: '90%',
    height: '90vh'
  });

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

})()