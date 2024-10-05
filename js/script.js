// Variables
const mobileIcon = document.querySelector("#mobile i.fa-bars");
const navbar = document.getElementById("navbar");
const iconClose = document.getElementById("Close");

iconClose.addEventListener("click", () => {
  if (navbar.classList.contains("active")) {
    navbar.classList.remove("active");
  }
});
// Abrir el menú móvil
mobileIcon.style.cursor = "pointer";

mobileIcon.addEventListener("click", () => {
  if (navbar.classList.contains("active")) {
    navbar.classList.remove("active");
  } else {
    navbar.classList.add("active");
  }
});

// Selecciona el enlace de "Menu"
const menuLink = document.getElementById("menu");

const submenu = document.getElementById("sub-menu");
// Agrega un evento de clic al enlace de "Menu"
menuLink.addEventListener("click", function (event) {
  event.preventDefault(); // Evita que el enlace redirija al hacer clic

  // Verificamos si el submenu está visible o no
  if (submenu.style.display === "flex") {
    submenu.style.display = "none"; // Oculta el submenu
  } else {
    submenu.style.display = "flex"; // Muestra el submenu
    submenu.style.flexDirection = "column"; // Alinea los elementos verticalmente
  }
});

/*para mostrar los sub menus*/
// Seleccionamos el ícono de las barras y el menú que queremos mostrar
/*const menuBarssh = document.getElementById('menu-bars1');
const shawermaMenu = document.getElementById('shawerma-menu');

// Agregamos el eventListener para que, al hacer clic en las barras, se añada la clase 'active' al submenú
menuBarssh.addEventListener('click', function() {
  if(shawermaMenu.classList.contains('active')) {
  shawermaMenu.classList.remove('active');}
  else {
  shawermaMenu.classList.add('active');
  }
});*/

/*
function toggleMenu(iconId, menuId) {
  const icon = document.getElementById(iconId);
  const menu = document.getElementById(menuId);
  const pts = document.getElementById("products");

  pts.forEach((pt) => {
    if (pt !== menu) {
      menu.classList.remove("modal");
      pt.style.display = "none";
      
      menu.style.display = "none";
      
    }
  });
  {
    if (menu.classList.contains("modal")) {
      menu.classList.remove("modal");
      menu.style.display = "none";
      pts.style.display = "none";
    } else {
      menu.classList.add("modal");
      menu.style.display = "flex";
      pts.style.display = "flex";
    }
  }
}*/
/*
function toggleMenu(iconId, menuId) {
  const icon = document.getElementById(iconId); // Icono del menú (si lo necesitas)
  const menu = document.getElementById(menuId); // El modal que queremos mostrar u ocultar
  const allMenus = document.querySelectorAll(".modal"); // Seleccionamos todos los menús con la clase 'modal'
  const pts = document.getElementById("products");

  // Ocultar todos los otros menús abiertos
  allMenus.forEach((pt) => {
    if (pt !== menu) {
      pt.style.display = "none"; // Ocultamos los otros modales
    }
  });

  // Alternar el modal actual
  if (menu.style.display === "flex") {
    // Si el menú ya está visible, lo ocultamos
    menu.style.display = "none";
    pts.style.display = "none";
  } else {
    // Si el menú está oculto, lo mostramos
    menu.style.display = "flex";
    pts.style.display = "flex";
    menu.style.maxHeight = "100%";
    dialog.showModal();
  }
}*/

function toggleMenu(iconId, menuId) {
  const icon = document.getElementById(iconId); // Icono del menú (si lo necesitas)
  const menu = document.getElementById(menuId); // El modal que queremos mostrar u ocultar
  const allMenus = document.querySelectorAll(".modal"); // Seleccionamos todos los menús con la clase 'modal'
  const pts = document.getElementById("products");

  // Ocultar todos los otros menús abiertos
  /*allMenus.forEach((pt) => {
    if (pt !== menu) {
      pt.classList.remove("show"); // Ocultamos los otros modales
    }
  });*/

  // Alternar el modal actual
  if (menu.classList.contains("show")) {
    // Si el menú ya está visible, lo ocultamos
    menu.classList.remove("show");
    pts.style.display = "none";
  } else {
    // Si el menú está oculto, lo mostramos
    menu.classList.add("show");
    pts.style.display = "flex";
  }
}

// para descargar el menu

// Deshabilita el clic derecho en la página
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});
