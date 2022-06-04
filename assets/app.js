const menuClick = document.querySelector(".menu");
const menuContentBg = document.querySelector(".menu-content-bg");
const menuList = document.querySelector(".menu-list");
const logo = document.querySelector(".logo-link");
const headerSearch = document.querySelector(".header-search");


function showMenu(){
    menuClick.addEventListener("click",function(){
        menuClick.classList.toggle("move");
        menuContentBg.classList.toggle("active");
        menuList.classList.toggle('open');
        logo.classList.toggle("display-none");
        headerSearch.classList.toggle("display-none");
    })
}
 showMenu();

 

    








