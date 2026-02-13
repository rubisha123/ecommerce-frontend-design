// Add to Cart Functionality
const addToCartBtn = document.getElementById('addToCart');

addToCartBtn.addEventListener('click', () => {
    const name = document.querySelector('.single-pro-details h2').innerText;
    const price = document.querySelectorAll('.single-pro-details h2')[1].innerText.replace('$','');
    const size = document.getElementById('size').value;
    const quantity = document.getElementById('quantity').value;

    if (!size) {
        alert("Please select a size!");
        return;
    }

    // Get current cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add product to cart
    cart.push({
        name: name,
        price: parseFloat(price),
        size: size,
        quantity: parseInt(quantity)
    });

    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${name} (Size: ${size}, Qty: ${quantity}) added to cart!`);
});



