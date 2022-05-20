const buttonMainImg =document.querySelectorAll('.button-main-img');
const imgSlides =document.querySelectorAll('.main-img');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
let index = 0;

left.addEventListener("click",function(){
    leftSlide();
})

right.addEventListener("click",function(){
    rightSlide();
})

function leftSlide(){
    if(index==0){
        index=imgSlides.length-1;
    }
    else{
        index--;
    }
}

function rightSlide(){
    if(index==imgSlides.length-1){
        index=0;
    }
    else{
        index++;
    }
}






 
















// function changeButton(){
//     const btnMainSliders = document.querySelectorAll(".slider-button");

//     for(let i=0; i<btnMainSliders.length; i++){
//         btnMainSliders[i].addEventListener("click",function(){
//             btnMainSliders[i].classList.add("slider-button-change");
//             console.log(btnMainSliders[i]);
//         })
        
//     }
// }
// changeButton();

