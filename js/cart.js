function cart() {
    const cartBtn = document.querySelector('.button-cart');
    const cart = document.getElementById('modal-cart');
    const close = document.querySelector('.modal-close');

    cartBtn.addEventListener('click', () => {
        cart.style.display = 'flex';
    });

    close.addEventListener('click', () => {
        cart.style.display = '';
    });
}

cart();