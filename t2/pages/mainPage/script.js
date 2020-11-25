$(document).ready(function() {
    let admin = false

    $('#promoCode').on("input",function(e){
        if ($(e.target).val() === 'animeGirl'){
            if(admin === true){
                alert('Вы уже админ')
            } 
            else {
                alert('Поздравляю у вас админка')
                admin = true
            }
        }
    });

    // smooth scroll
    const anchors = document.querySelectorAll('a[href^="#"]')

    for(let anchor of anchors) {
        anchor.addEventListener("click", function(e) {
            e.preventDefault()
            const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
            document.querySelector(goto).scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        })
    }

    // deploy header_item
    
    document.getElementsByClassName('header_menu_items')[0].addEventListener('click' , function() {
        $('.header_menu_items_deployed_vertion')[0].classList.toggle('active')
    });

    document.getElementsByClassName('header_menu_items')[1].addEventListener('click' , function() {
        $('.header_menu_items_deployed_vertion')[1].classList.toggle('active')
    });

    document.getElementsByClassName('header_menu_items')[2].addEventListener('click' , function() {
        $('.header_menu_items_deployed_vertion')[2].classList.toggle('active')
    });

    document.getElementsByClassName('header_menu_items')[3].addEventListener('click' , function() {
        $('.header_menu_items_deployed_vertion')[3].classList.toggle('active')
    });

    document.getElementsByClassName('header_menu_items')[4].addEventListener('click' , function() {
        $('.header_menu_items_deployed_vertion')[4].classList.toggle('active')
    });

    document.getElementsByClassName('header_menu_items')[5].addEventListener('click' , function() {
        $('.header_menu_items_deployed_vertion')[5].classList.toggle('active')
    });

});