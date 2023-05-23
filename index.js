// Closes navbar if one of the elements are clicked
$(document).ready(function () {

    $(document).click(function (event) {
  
          var target = $(event.target);
          var _mobileMenuOpen = $(".navbar-collapse").hasClass("show");
  
          if (_mobileMenuOpen === true && !target.hasClass("navbar-toggler")) {
              $("button.navbar-toggler").click();
          }
  
      });
      
  });