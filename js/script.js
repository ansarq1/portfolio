// loading animation
document.addEventListener("DOMContentLoaded", function(){
    let image = document.getElementById("profile");
    let loading = document.querySelector(".loader");


    image.onload = function() {
        loading.style.display = "none";
        image.style.display = "block";
    };

})