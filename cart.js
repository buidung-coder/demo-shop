const productCart = document.querySelector('.header__cart-noti').textContent
var cartIcon =document.querySelector('.header__cart-icon')
var noProduct =document.querySelector('.cart-notify__no-product')
var haveProduct = document.querySelector('.cart-notify__list')
if(productCart==0) {
    cartIcon.addEventListener('mouseenter', function() {
        noProduct.classList.add('open')
    })
}else {
    cartIcon.addEventListener('mouseenter', function() {
        haveProduct.classList.add('open')
    })
}

cartIcon.addEventListener('mouseleave', function() {
    haveProduct.classList.remove('open')
    noProduct.classList.remove('open')
})