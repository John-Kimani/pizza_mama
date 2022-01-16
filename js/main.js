// console.log("hello") //confirm link
// var and loops start

//remove cart button loop start
var removeCartItemButtons = document.getElementsByClassName('btn-danger')
console.log(removeCartItemButtons) //confirms button selects

for(var i=0; i < removeCartItemButtons.length; i++){
    var button = removeCartItemButtons[i]
    button.addEventListener('click', removeCartItem)
}
// remove cart  button loop end
//  set input value loop
var quantityInputs = document.getElementsByClassName('ngapi')
for(var i=0; i < quantityInputs.length; i++){
    var input = quantityInputs[i]
    input.addEventListener('change', quantityChanged)
}
// set input value loop end
// add to cart loop start
var addToCartButtons = document.getElementsByClassName('add-to-cart')
for(var i=0; i < quantityInputs.length; i++){
    var button = addToCartButtons[i]
    console.log(button)
    button.addEventListener('click', addToCartClicked)
}

// add to cart loop end

// loops end

// var and loops end

// functions starts
// remove cart button function
function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

//remove cart button function end
//set input value function start
function quantityChanged(event){
    var input = event.target
    if(isNaN(input.value) || input.value <=0){
        input.value = 1
    }
    updateCartTotal()
}
//set input value function end

// add to cart function start
function addToCartClicked(event){
    var button = event.target
    var orderItem = button.parentElement.parentElement
    var orderTitle = orderItem.getElementsByClassName('add-to-cart')
    console.log(orderTitle)

}
// add to cart function end

//function to cart item price total

function updateCartTotal(){
    var cartItemForm = document.getElementsByClassName('cart-items')[0]
    // fetch objects inside class
    var cartRows = cartItemForm.getElementsByClassName('cart-row')
    var total = 0
    for(var i=0; i < cartRows.length; i++){
        var cartRow = cartRows[i]
        var bei = cartRow.getElementsByClassName('bei')[0]
        var ngapi = cartRow.getElementsByClassName('ngapi')[0]
        // console.log(bei, ngapi) //confirms fetch
        var price = parseFloat(bei.innerText.replace('ksh.', ' ')) //declares new variable and converts it from string to interger
        // console.log(price) //confirms price picked
        var quantity = ngapi.value
        // console.log(price * quantity) //display math function
        total = total + (price * quantity) //new total for every cart item
    }
    total = Math.round(total * 100)/ 100 //sets total to the nearest 2 decimal place
    document.getElementsByClassName('cart-total-price')[0].innerText = 'ksh.' + total //sets and inserts new total in html

}