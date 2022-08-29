// Dropdown menu

const arrowBtn = document.querySelector('h2 > .arrow');
const downContent = document.querySelector('.dropdown-menu > p');
const textField = document.querySelector('.dropdown-menu > h2')

textField.addEventListener('click', function(){
    downContent.classList.toggle('active');
    arrowBtn.classList.toggle('active-arrow')
})

//Modal window

const modalBtn = document.querySelector('.ui-element > .modal-btn');
const modalWindow = document.querySelector('.ui-element > .modal-pop-up');
const cross = document.querySelector('h2 > .cross');

modalBtn.addEventListener('click', function(){
    modalWindow.classList.toggle('active');
})

cross.addEventListener('click',function(){
    modalWindow.classList.toggle('active');
})

//Accordion

const accordionElements = document.querySelectorAll('.ui-element > .img');

const resetFlexGrow = function(){
    accordionElements.forEach(element => element.style.flexGrow = 1)
}
accordionElements.forEach( element => {
    element.addEventListener('click', function(){ 
        if(element.style.flexGrow == 20){

            element.style.flexGrow = 1;
        }else{
            resetFlexGrow();
            element.style.flexGrow = 20;
        }
        
    })
})

// On off

const switchCase = document.querySelector('.switch');
const checkbox = document.querySelector('input[type = checkbox]');

switchCase.addEventListener('click',function(){
    if(checkbox.checked){
        switchCase.classList.toggle('slider-on');
    }
})

//Carousel

const carouselElements = document.querySelectorAll('.c-element');
const previousArrow = document.querySelector('.previous-element');
const nextArrow = document.querySelector('.next-element');
const liPagination = document.querySelectorAll('.pagination > li');

let translate = 0;

const resetActiveStyle = function(){
    liPagination.forEach(element => element.classList.remove('li-active'));
};

const activeLi = function(){
    switch (translate) {
        case 0:
            resetActiveStyle();
            liPagination[translate].classList.add('li-active');
            break;
        case 1:
            resetActiveStyle();
            liPagination[translate].classList.add('li-active');
            break;
        case 2:
            resetActiveStyle();
            liPagination[translate].classList.add('li-active');
            break;
        case 3:
            resetActiveStyle();
            liPagination[translate].classList.add('li-active');
            break;
}}

activeLi();


nextArrow.addEventListener('click', function(){
    translate+= 1;
    carouselElements.forEach(element => {

        if(translate == 4){
            alert("You can't")
            translate-=1
        }else{
            element.style.translate = `-${translate}00%`
            activeLi();
        }
    })
});

previousArrow.addEventListener('click', function(){
    translate-= 1;
    carouselElements.forEach(element => {

        if(translate == -1){
            alert("You can't");
            translate+=1;
        }else{
            element.style.translate = `-${translate}00%`;
            activeLi();
        }
    })
});



