
let cartCount = 0;

function addToCart(productName) {
    cartCount++;

    document.getElementById("count").innerText =
        cartCount;

    alert(productName + " added to cart!");
}

function addProduct() {
    let name = document.getElementById("pname").value;
    let price = document.getElementById("price").value;

    if (name === "" || price === "" || Number(price) <= 0) {
        document.getElementById("result").innerText =
            "Enter product name and valid price";
    } else {
        document.getElementById("result").innerText =
            name + " added successfully!";
    }
}
