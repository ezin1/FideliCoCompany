document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const menuList = document.querySelector(".FideliCo-menu");
  
    menuToggle.addEventListener("click", function() {
      menuList.classList.toggle("collapsed");
      menuList.classList.toggle("expanded");
    });
  });
  