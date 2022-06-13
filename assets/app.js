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

 
 function dataFilter(){

    const listItem=document.querySelectorAll(".animal-menu-list ul li");
    const levelBox=document.querySelectorAll(".level");
    
    listItem.forEach(li=>{
        li.addEventListener("click",function(){
            // console.log(li.textContent);
            let value = li.textContent;
        
    
            levelBox.forEach(content=>{
            content.style.display="none";
            if(content.getAttribute("data-filter") === value){
                content.style.display="flex";
                li.style.color = "green";
            }
        })
        })
        
    })
}
dataFilter();

const range = document.querySelectorAll(".range-slider input");
const progress = document.querySelector(".progress");
let gap = 50;
const inputValue = document.querySelectorAll(".numberVal input");

range.forEach(input =>{
    input.addEventListener("input", e =>{
        let minrange = parseInt(range[0].value),
        maxrange = parseInt(range[1].value);

        if(maxrange-minrange<gap){
            if(e.target.className === "range-min"){
                range[0].value = maxrange - gap;
            }
            else{
                range[1].value = minrange + gap;
            }
        }
        else{
            progress.style.left = (minrange/range[0].max) * 100 + "%";
            progress.style.right = 100-(maxrange/range[1].max) *100 + "%";
            inputValue[0].value = minrange;
            inputValue[1].value = maxrange;
        }
    })
})

const minInput = document.querySelector('.range-min');
const maxInput = document.querySelector('.range-max');
const leftPrice = document.querySelector('.left-price');
const rightPrice = document.querySelector('.right-price');

minInput.oninput = (()=>{
    let value = minInput.value;
    leftPrice.textContent = value;
    leftPrice.style.left = (value/10) + "%";
})

maxInput.oninput = (()=>{
    let value = maxInput.value;
    rightPrice.textContent = value;
    rightPrice.style.left = (value/7) + "%";
})


function showList(){
    const categoryNameImg = document.querySelectorAll('.category-name img');
    const openCategory = document.querySelectorAll('.open-category');

    categoryNameImg[0].addEventListener('click',()=>{
        openCategory[0].classList.toggle('open-category-active');
    })
    categoryNameImg[1].addEventListener('click',()=>{
        openCategory[1].classList.toggle('open-category-active');
    })
    categoryNameImg[2].addEventListener('click',()=>{
        openCategory[2].classList.toggle('open-category-active');
    })
    categoryNameImg[3].addEventListener('click',()=>{
        openCategory[3].classList.toggle('open-category-active');
    })
    categoryNameImg[4].addEventListener('click',()=>{
        openCategory[4].classList.toggle('open-category-active');
    })
    categoryNameImg[5].addEventListener('click',()=>{
        openCategory[5].classList.toggle('open-category-active');
    })
    categoryNameImg[6].addEventListener('click',()=>{
        openCategory[6].classList.toggle('open-category-active');
    })
    categoryNameImg[7].addEventListener('click',()=>{
        openCategory[7].classList.toggle('open-category-active');
    })
    categoryNameImg[8].addEventListener('click',()=>{
        openCategory[8].classList.toggle('open-category-active');
    })
    categoryNameImg[9].addEventListener('click',()=>{
        openCategory[9].classList.toggle('open-category-active');
    })
    categoryNameImg[10].addEventListener('click',()=>{
        openCategory[10].classList.toggle('open-category-active');
    })
    categoryNameImg[11].addEventListener('click',()=>{
        openCategory[11].classList.toggle('open-category-active');
    })
    categoryNameImg[12].addEventListener('click',()=>{
        openCategory[12].classList.toggle('open-category-active');
    })
    categoryNameImg[13].addEventListener('click',()=>{
        openCategory[13].classList.toggle('open-category-active');
    })
}
showList();

 



