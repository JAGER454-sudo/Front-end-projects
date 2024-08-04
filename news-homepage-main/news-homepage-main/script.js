const menus = document.querySelector ('.menus');
const hamburger = document.querySelector ('.hamburger');
const menu = document.querySelector ('.menu-icon');
const menuclose = document.querySelector ('.menu-close');
const menuitem = document.querySelector ('.menu-item');

function togglemenu () {

    if (menus.classlist.contains ("showmenus")) {

        menus.classlist.remove ("showmenus");
        menuclose.style.display = "none";
        menu.style.display = "block";
    }

    else {
        menus.classlist.add("showmenu");
        menuclose.style.display = "block";
        menu.style.display = "none";
    }
hamburger.addeventListener("click" , togglemenu);

menuitem.forEach (
  function(menuitem) {

    menuitem.addeventListener("click" , togglemenu);
  }



)


}