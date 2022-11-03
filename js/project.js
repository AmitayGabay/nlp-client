$ = document.querySelector.bind(document);

function burger_init() {
    let burger_btn = document.querySelector("#burger_btn");

    let id_nav_show_hide = document.querySelector("#id_nav_show_hide");

    burger_btn.addEventListener("click", function () {

        id_nav_show_hide.style.display = (id_nav_show_hide.style.display != "block") ? "block" : "none";
    })
}














