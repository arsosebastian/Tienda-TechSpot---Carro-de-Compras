const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const aside = document.querySelector("aside");

/**
 * Abre el menú lateral
 *
 * @param {Event} event - Evento de click en el botón de abrir menú
 */
openMenu.addEventListener("click", (event) => {
    /**
     * Agrega la clase "aside-visible" al elemento aside para mostrar el menú
     */
    aside.classList.add("aside-visible");
});

/**
 * Cierra el menú lateral
 *
 * @param {Event} event - Evento de click en el botón de cerrar menú
 */
closeMenu.addEventListener("click", (event) => {
    /**
     * Elimina la clase "aside-visible" del elemento aside para ocultar el menú
     */
    aside.classList.remove("aside-visible");
});