var items=document.querySelectorAll(".item-content .name")

var cartItems=document.querySelector(".cart-items")

var btn=document.querySelector(".cart button")

var showPrice = document.querySelector(".show-price")

var totalPrice = 0
var counter = 1

items.forEach(function(item)
{
    item.addEventListener("click", function ()
    {
        var itemPrice = item.getAttribute("price")
        cartItems.innerHTML += (counter + ". " + item.textContent + " :  " + itemPrice + " EGP" + '<br>')

        if(counter==1)
        {
            btn.style.display="block"
        }

        counter++
        totalPrice+= +(itemPrice)
    })
    
})

btn.addEventListener("click", function ()
{
    showPrice.innerHTML = "Total Price: " + totalPrice + " EGP"
})
