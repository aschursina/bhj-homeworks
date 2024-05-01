let products = document.querySelector(".cart__products");
let addProduct = document.querySelectorAll(".product__add");
let productControl = document.querySelectorAll(".product__quantity-controls");

productControl.forEach(action => {
  let productPlus = action.querySelector(".product__quantity-control_inc");
  let productMinus = action.querySelector(".product__quantity-control_dec");
  let productCurrent = action.querySelector(".product__quantity-value");
  productPlus.addEventListener("click", () =>{
    productCurrent.textContent = parseInt(productCurrent.textContent) + 1;
  })
  productMinus.addEventListener("click", () =>{
    productCurrent.textContent = parseInt(productCurrent.textContent) - 1;
    if(productCurrent.textContent < 1) {  
      productCurrent.textContent = 1;
    }
  })
});

addProduct.forEach(action => {
  action.addEventListener("click", (event) => {
    let product = event.target.closest(".product");
    let productId = product.dataset.id;
    let productPhoto = product.querySelector(".product__image");
    let productQuantity = parseInt(product.querySelector(".product__quantity-value").textContent);
    let cart = products.querySelector(`.cart__product[data-id="${productId}"]`);
    if(cart) {
      let cartCount = parseInt(cart.querySelector(".cart__product-count").textContent) + productQuantity;
      cart.querySelector(".cart__product-count").textContent = cartCount;
    } else {
      cart = document.createElement("div");
      cart.classList.add("cart__product");
      cart.innerHTML = `
      <div class="cart__product" data-id="${productId}">
      <img class="cart__product-image" src="${productPhoto.src}">
      <div class="cart__product-count">${productQuantity}</div>`;
      
      products.appendChild(cart);
    }
  })
});



