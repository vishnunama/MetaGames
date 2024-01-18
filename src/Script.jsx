import React, { useEffect } from 'react';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle'; // Import Bootstrap JS

const Script = () => {
  useEffect(() => {
    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
      new bootstrap.ScrollSpy(document.body, {
        target: '#mainNav',
        offset: 74,
      });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
      document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
      responsiveNavItem.addEventListener('click', () => {
        if (
          window.getComputedStyle(navbarToggler).display !== 'none'
        ) {
          navbarToggler.click();
        }
      });
    });

    $(document).on('scroll', function () {
      if ($(window).scrollTop() > 650) {
        $('#container-header').addClass('change-color');
      } else {
        $('#container-header').removeClass('change-color');
      }
    });

    // Other scroll functions...

    // form validation
    (function () {
      'use strict';

      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.querySelectorAll('.needs-validation');

      // Loop over them and prevent submission
      Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add('was-validated');
        }, false);
      });
    })();

    // Other code...

  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
    </div>
  );
};

export default Script;
