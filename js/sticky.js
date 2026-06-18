window.addEventListener('scroll', function(){
    const headernav = document.querySelector('.db-header')
    if(window.pageYOffset >= 30){
        headernav.classList.add('sticky-header')
    }
    else{
        headernav.classList.remove('sticky-header')
    }
})