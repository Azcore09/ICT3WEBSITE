/* BEST SELLER */
const mocha = 89;
const caramel = 89;
const pickup = 95;
const kastila = 75;

/*ESPRESSO*/
const espresso = 25;
const americano = 50;
const latte = 75;
const cappuccino = 70;

/*FRUIT TEA*/
const peach = 75;
const lychee = 70;
const apple = 65;
const thaiger = 75;

/*BITES*/
const croissant = 80;
const chococroissant = 90;
const cookie = 109;
const eggbun = 89;

let cart = [];


function addToCart(name) {
    switch(name) {
        case "mocha":
            cart.push({name: "Mocha", price: mocha});
            break; 
        case "caramel":
            cart.push({name: "Caramel Macchiato", price: caramel});
            break;
        case "pickup":
            cart.push({name: "Pickup Coffee", price: pickup});
            break;
        case "kastila":
            cart.push({name: "Kastila", price: kastila});
            break;
        case "espresso":
            cart.push({name: "Espresso", price: espresso});
            break; 
        case "americano":
            cart.push({name: "Americano", price: americano});
            break;
        case "latte":
            cart.push({name: "Latte", price: latte});
            break;
        case "cappuccino":
            cart.push({name: "Cappuccino", price: cappuccino});
            break;
        case "peach":
            cart.push({name: "Peach Tea", price: peach});
            break;
        case "lychee":
            cart.push({name: "Lychee Tea", price: lychee});
            break;
        case "apple":
            cart.push({name: "Apple Tea", price: apple});
            break;
        case "thaiger":
            cart.push({name: "Thaiger Tea", price: thaiger});
            break;
        case "croissant":
            cart.push({name: "Croissant", price: croissant});
            break;
        case "chococroissant":
            cart.push({name: "Choco Croissant", price: chococroissant});
            break;
        case "cookie":
            cart.push({name: "Cookie", price: cookie});
            break;
        case "eggbun":
            cart.push({name: "Egg Bun", price: eggbun});
            break;
}
   updateCartDisplay();
}

function updateCartDisplay() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price;
    }
    document.getElementById("totalAmount").innerHTML = total + " PHP";

    const cartBox = document.getElementById("cartItems");

    if (cart.length === 0) {
        cartBox.innerHTML = '<p class="empty-cart-msg">Your cart is empty.</p>';
        return;
    }

    cartBox.innerHTML = "";
    cart.forEach((item) => {
        const row = document.createElement("div");
        row.classList.add("cart-item-row");
        row.innerHTML = `<span>${item.name}</span><span>${item.price} PHP</span>`;
        cartBox.appendChild(row);
    });
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    // item list 
    const popupItems = document.getElementById("popupCartItems");
    popupItems.innerHTML = "";
    cart.forEach(item => {
        const row = document.createElement("div");
        row.classList.add("popup-item-row");
        row.innerHTML = `<span>${item.name}</span><span>${item.price} PHP</span>`;
        popupItems.appendChild(row);
    });

    // total
    let total = 0;
    cart.forEach(item => total += item.price);
    document.getElementById("popupTotal").innerHTML = "TOTAL: " + total + " PHP";

    // popup
    document.getElementById("checkoutPopup").style.display = "flex";
}


function closePopup() {
    document.getElementById("checkoutPopup").style.display = "none";
}

function clearCart() {
    cart = [];
    updateCartDisplay();
}