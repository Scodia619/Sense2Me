//button to click for the main page
var button;

//determines which product it will be - used for title and ? for URL

//one product type
button = document.getElementById("double");

button.addEventListener("click", function(){
    document.location.href ="product.html?double"
})

//another product type to add to page
button = document.getElementById("anxiety");

button.addEventListener("click", function(){
    document.location.href = "./product/product.html?anxiety"
})
