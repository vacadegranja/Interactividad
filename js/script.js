console.log("Hello, World!")
a = 5
b = 10
sum = a + b
console.log("The sum of a and b is: " + sum)
//alert("This is an alert message!")
const TOGGLE_BTN = document.getElementById("toggle-theme-btn");
TOGGLE_BTN.addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");
});
