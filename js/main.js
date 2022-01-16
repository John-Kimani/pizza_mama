// console.log("hello") //confirm link
//remove cart button function start
var removeCartItemButtons = document.getElementsByClassName('btn-danger')
console.log(removeCartItemButtons) //confirms button selects

for(var i=0; i < removeCartItemButtons.length; i++){
    var button = removeCartItemButtons[i]
    button.addEventListener('click', function(event){
        // console.log("Clicked") //confirms event listener
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
    })
}

//remove cart button function end

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
    document.getElementsByClassName('cart-total-price')[0].innerText = 'ksh.' + total //sets and inserts new total in html

}