document.querySelectorAll(".DROPDOWN").forEach(drop => {
    drop.addEventListener("mouseenter", () => {
        drop.querySelector(".dropdown_c").style.display = "block";
    });
    drop.addEventListener("mouseleave", () => {
        drop.querySelector(".dropdown_c").style.display = "none";
    });
});

document.querySelector(".login_btn").addEventListener("click", () => {
    alert("Login functionality will be added soon.");
});

document.querySelector(".crd5-sub").addEventListener("click", () => {
    let email = document.querySelector(".crd5-email").value.trim();
    if(email) {
        alert("Subscribed successfully with " + email);
        document.querySelector(".crd5-email").value = "";
    } else {
        alert("Please enter a valid email address.");
    }
});

document.querySelector(".search-button").addEventListener("click", e => {
    e.preventDefault();
    let q = document.querySelector(".search-bar").value.trim();
    if(q) {
        alert("Searching for: " + q);
    } else {
        alert("Please enter something to search.");
    }
});

let end = new Date();
end.setDate(end.getDate() + 7);
function updateCountdown() {
    let now = new Date().getTime();
    let diff = end - now;
    if(diff < 0) diff = 0;
    let days = Math.floor(diff / (1000*60*60*24));
    let hrs = Math.floor((diff % (1000*60*60*24))/(1000*60*60));
    let mins = Math.floor((diff % (1000*60*60))/(1000*60));
    let secs = Math.floor((diff % (1000*60))/1000);
    let parts = document.querySelectorAll(".clk");
    if(parts.length >= 4){
        parts[0].innerHTML = days + "<br>day";
        parts[1].innerHTML = hrs + "<br>hrs";
        parts[2].innerHTML = mins + "<br>min";
        parts[3].innerHTML = secs + "<br>sec";
    }
}
setInterval(updateCountdown, 1000);
updateCountdown();


let cart = document.createElement("div");
cart.innerHTML = "🛒";
cart.style.position = "fixed";
cart.style.bottom = "20px";
cart.style.right = "20px";
cart.style.width = "60px";
cart.style.height = "60px";
cart.style.background = " rgb(132, 184, 90)";
cart.style.color = "white";
cart.style.display = "flex";
cart.style.alignItems = "center";
cart.style.justifyContent = "center";
cart.style.borderRadius = "50%";
cart.style.fontSize = "28px";
cart.style.cursor = "pointer";
cart.style.zIndex = "2000";
document.body.appendChild(cart);

cart.addEventListener("click", () => {
    alert("Your cart is empty.");
});
