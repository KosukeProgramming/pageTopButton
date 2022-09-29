// ページトップではボタンを非表示
let scroll_button = document.querySelector('.scroll-button');

document.addEventListener('scroll',function(){
    
    if(window.scrollY >= 500) {
        scroll_button.classList.add('active');
    } else {
        scroll_button.classList.remove('active');
    }  

});