const cartItems = [];
function addtocart(ele){
 const parent = ele.closest('.item');
 const price = parent.querySelector('.price').innerText;
 const title = parent.querySelector('.name').innerText;
 console.log("price",price);
const cartItem = {
	price:price,
	name:title
}
cartItems.push(cartItem);
let html="";

for(i=0;i<cartItems.length;i++){
	html += `<div class="shopping-cart">
	<span>${cartItems[i].name}</span> 
	<span>${cartItems[i].price}</span> 
	<button onclick="removeItem(this)">Remove Item</button>
	</div>
	`
}
const cart = document.querySelector('.cart');
cart.innerHTML=html;
}

function removeItem(){
const itemRemove = document.querySelector('.shopping-cart');
console.log("rem",itemRemove);
itemRemove.remove();
}