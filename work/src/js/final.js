// jquery
$( function(){

    let arrays = $(".work_examples__array");
    let left_array = $(".work_examples__array-left");
    let right_array = $(".work_examples__array-right");
    let figures = $(".work_examples__figures figure");
    let number_of_figures = figures.length;
    arrays.on("click",ArrayF);

    let step = 390;
    let position = 1;
    
    function ArrayF(event) {
        let left = $(event.target).is(".work_examples__array-left");
        let left_enable = (position<7);
        let right_enable = (position>1);
        let condition = left ? left_enable : right_enable;
        let translate_value = left ? -step*position : -step*(position-2);
        if(condition) {
            figures.css("transform", `translateX(${translate_value}px)`);
            left ? position++ : position--;
        }
        position<7 ? left_array.css("opacity","1") : left_array.css("opacity","0.3");
        position>1 ? right_array.css("opacity","1") : right_array.css("opacity","0.3");
    }


//    black_box.toggle();
    //    menu.toggleClass("menu-adapt");
    //    menu_items.toggleClass("menu-item-adapt");
      //  slash.toggleClass("slash-adapt");


});