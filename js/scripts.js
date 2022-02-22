/*!
* Start Bootstrap - Agency v7.0.10 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

const contactDiv = document.querySelector(".contact");
const contactForm = document.getElementById('contact-form');
const message = document.querySelector('.message');

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
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

// Send message through form

(function() {
    emailjs.init("user_sOKqZKmVqQDVPfCQ7jueQ");
  })();
  
  window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // Send form information to email JS api.
        emailjs.sendForm('service_2zfeihg', 'template_lhf9757', 'contact-form')
            .then(function() {
              sucessfulMessage();
            }, function(error) {
              failureMessage();
            });
    });
  }
  
  //Successful Message
  function sucessfulMessage(){
    contactForm.hidden = true;
    message.textContent = 'Thank you for your message. We will be in contact with you soon!';
    timer = setInterval(restoreFormSuccess, 2000);
  }
  
  //Failure Message 
  function failureMessage() {
    contactForm.hidden = true;
    message.textContent = "Ooops! Your message wasn't sent. Please try again!"
    timer = setInterval(restoreFormFail, 2000);
  }
  
  //Restore form Success
  function restoreFormSuccess() {
    message.textContent = 'Get in touch!'
    contactForm.hidden = false;
    document.getElementById('contact-form').reset();
  }
  
  //Restore form Failure
  function restoreFormFail() {
    message.textContent = 'Get in touch!'
    contactForm.hidden = false;
  
  }