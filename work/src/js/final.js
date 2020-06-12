// jquery
$( function(){

    black_box = $("#black-box");
    menu = $("#menu");
    menu_icon = $(".menu-icon-adapt");
    menu_items = $(".menu-item");
    slash = $(".slash")
    menu_icon.on("click",menuExpandF);

    function menuExpandF() {
        black_box.toggle();
        menu.toggleClass("menu-adapt");
        menu_items.toggleClass("menu-item-adapt");
        slash.toggleClass("slash-adapt");
    }



});