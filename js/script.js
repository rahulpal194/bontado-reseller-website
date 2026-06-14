window.addEventListener('scroll', function(){
    const headernav = document.querySelector('.db-header')
    if(window.pageYOffset >= 30){
        headernav.classList.add('fixed')
    }
    else{
        headernav.classList.remove('fixed')
    }
})