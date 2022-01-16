// console.log("hello") //confirm link
//remove cart button function start
var removeCartItemButtons = document.getElementsByClassName('btn-danger')
console.log(removeCartItemButtons) //confirms button selects

for(var i=0; i < removeCartItemButtons.length; i++){
    var button = removeCartItemButtons[i]
    button.addEventListener('click', function(event){
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
    })
}

//remove cart button function end