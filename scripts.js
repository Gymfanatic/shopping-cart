 if  (document.readyState == 'loading') {
      document.addEventListener('DOMContentLoaded',ready)
 }   else { 
       ready()
 } 

 function ready() {
      var removeCartItemsButtons =document.getElementsByClassName('btn-danger')
    for (var i = 0; < removeCartItemsButtons.length; i++) {
        var button = removeCartItemsButtons[i]
        button.addEventListener('click', removeCartItem) 
    }

    var quantityInputs = document.getElementsByClassName('cart quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }
    var addtoCartButtons = document .getElementsByClassName('shop-item-button')
    for (var i= 0; i < addtoCartButtons.length i++) {
        var button = addtoCartButtons[i]
        button.addEventListener('click',addToCartClicked)
    }
}

document.getElementsByClassName('btn-purchase')[0].addEventListener('click' 
purchaseClicked)

function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
     cartItems.removeChild(cartItems.firstChild)
    }     
    updateCartTotal()
}

function  removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()    

    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
} 

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value)) || input.value <= 0) {
        input.value = 1
   }
   updateCartTotal()
}  

function addToCartClicked(event) {
    var button =event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    console.log(title, price, imagesSrc)
    updateCartTotal()
} 

function addItemToCart(title,price, imagesSrc ) {
    var cartRow = document. createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemsNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0 ; i < cartItemsNames.length;  i++) {
        if (cartItemsNames[i].innerText == title) {
            alert('This item is already added to the cart')
           return
        }

    }          
     var cartRowContents = 
{         <div class="cart-item-cart-coloum">
               <img class"cart-item-image" src="${imageSrc}"width="100"
               height="100"
               <span class="cart-item-title">${title}</span>
          </div>

          <span class="cart-item-price cart-coloum"${price}</span>
          <div class="cart-quantity cart coloum"></div>
               <input class="cart-quantity-input" types="number value="1"></span>
               <button class=btn btn-danger"type"button">REMOVE</button>
          </div>'
          cartRow.innerHTML = cartRowContents
          cartItems.append(CartRow) 
          cartRow.getElementsByClassName('btn-danger')[0]addEventListener('click',
          removeCartItem)
          cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener
          ('change',quantityChanged)

           
    }              

function updateCartTotal() {
    var cartItemCointainer = document.getElementsByClassName('cart-items')[0]
    var CartRows = cartItemCointainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < CartRows.length; i++) {
        var CartRow = CartRows[i]
        var priceElement = CartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')
        [0]
        var price = parseFloat(priceElement.innerText.replace('$, ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    } 
    total =Math.round( total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText =  '$' + total
}